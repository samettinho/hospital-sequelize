/* eslint-disable array-bracket-spacing */

import db from '../../src/models';
import language from '../../src/language';
import moment from 'moment/moment';
import 'moment/locale/tr';
import { Op } from 'sequelize';

class AppointmentService {

	static async create(req) {
		try {
			const lang = req.headers.lang;
			const {
				doctor,
				hospitalId
			} = req.body;

			const entryDate = moment(req.body.entryDate);
			const eDate = entryDate.format('YYYY-MM-DD HH:mm:ss');
			const releaseDate = entryDate.add(15, 'm').format('YYYY-MM-DD HH:mm:ss');
			const userResult = await db.Users.findOne({
				where: {
					id: req.body.userId,
					isRemoved: false
				}
			});
			if (!userResult) {
				return {
					type: false,
					message: (language[lang].error.user_not_found)
				};

			}
			const doctorResult = await db.Users.findAll({
				where: [
					{
						isRemoved: false,
						id: doctor
					}
				],
				include: [{
					model: db.Roles,
					attributes: [],
					where: [
						{
							rolName: 'doktor'
						}
					]
				}
				]
			});
			if (doctorResult.length <= 0) {
				return {
					type: false,
					message: (language[lang].error.not_found).replace('{}', 'doktor')
				};
			}
			const doctorHospital = await db.Users.findAll({
				where: [
					{
						isRemoved: false,
						id: doctor
					}
				],
				order: [
					['id', 'asc']
				],
				include: [{
					model: db.Roles,
					attributes: [],
					where: [
						{
							rolName: 'doktor'
						}
					]
				},
				{
					model: db.Hospitals,
					attributes: [],
					where: {
						id: hospitalId
					}
				}
				]
			});
			if (doctorHospital.length <= 0) {
				return {
					type: false,
					message: language[lang].error.doctor_hospital
				};
			}
			const dateResult = await db.Appointments.findAll({

				where: {
					userId: req.body.userId,
					doctor: req.body.doctor,
					[Op.or]: [
						{ entryDate: { [Op.between]: [eDate, releaseDate] } },
						{ releaseDate: { [Op.between]: [eDate, releaseDate] } }
					]
				}
			});
			if (dateResult.length > 0) {
				return {
					type: false,
					message: language[lang].error.appointment_not_created
				};
			}
			const [createdResult, created] = await db.Appointments.findOrCreate({
				where: {
					entryDate: req.body.entryDate,
					doctor: doctor
				},
				defaults: {
					userId: req.body.userId,
					doctor: req.body.doctor,
					hospitalId: req.body.hospitalId,
					entryDate: eDate,
					releaseDate: releaseDate
				}
			});
			if (created) {
				return {
					type: true,
					message: (language[lang].crud.created).replace('{#table}', language[lang].tables.appointment),
					data: createdResult
				};
			}
			else {
				return {
					type: false,
					message: (language[lang].error.already_exists)
				};
			}

		}
		catch (error) {
			return {
				type: false,
				message: error.message
			};
		}

	}
	static async getAll(req) {
		const lang = req.headers.lang;
		const getResult = await db.Appointments.findAll({
			where: { isRemoved: false },
			attributes: [
				'id',
				// eslint-disable-next-line max-len
				[db.Sequelize.fn('concat', db.Sequelize.col('user.name'), ' ', db.Sequelize.col('user.surName')), 'user_full_name'],
				// eslint-disable-next-line max-len
				[db.Sequelize.fn('concat', db.Sequelize.col('appDoctor.name'), ' ', db.Sequelize.col('appDoctor.surName')), 'doctor_full_name'],
				[db.Sequelize.col('Hospital.hospitalName'), 'hospital_name'],
				'entryDate',
				'releaseDate'
			],
			order: [
				['id', 'asc']
			],
			include: [
				{
					as: 'user',
					model: db.Users,
					attributes: []
				},
				{
					as: 'appDoctor',
					model: db.Users,
					attributes: []
				},
				{
					model: db.Hospitals,
					attributes: []
				}
			]
		});
		return {
			type: true,
			message: language[lang].crud.succes,
			data: getResult
		};

	}
	static async get(req) {
		try {
			const lang = req.headers.lang;
			const appointmentid = req.params.id;
			if (!appointmentid) {
				return {
					type: false,
					message: (language[lang].error.cannot_null).replace('{}', 'id')
				};
			}
			else {
				const getResult = await db.Appointments.findOne({

					where: {
						isRemoved: false,
						id: appointmentid
					},
					attributes: [
						'id',
						// eslint-disable-next-line max-len
						[db.Sequelize.fn('concat', db.Sequelize.col('user.name'), ' ', db.Sequelize.col('user.surName')), 'user_full_name'],
						// eslint-disable-next-line max-len
						[db.Sequelize.fn('concat', db.Sequelize.col('appDoctor.name'), ' ', db.Sequelize.col('appDoctor.surName')), 'doctor_full_name'],
						[db.Sequelize.col('Hospital.hospitalName'), 'hospital_name'],
						'entryDate',
						'releaseDate'
					],
					order: [
						['id', 'asc']
					],
					include: [
						{
							as: 'user',
							model: db.Users,
							attributes: []
						},
						{
							as: 'appDoctor',
							model: db.Users,
							attributes: []
						},
						{
							model: db.Hospitals,
							attributes: []
						}
					]
				});
				if (!getResult) {
					return {
						type: false,
						// eslint-disable-next-line max-len
						message: (language[lang].error.not_found).replace('{}', language[lang].tables.appointment)
					};
				}
				return {
					type: true,
					message: language[lang].crud.succes,
					data: getResult
				};
			}
		}
		catch (error) {
			return {
				type: false,
				message: error.message
			};
		}
	}

	static async update(req) {
		try {
			const entryDate = moment(req.body.entryDate);
			const eDate = entryDate.format('YYYY-MM-DD HH:mm:ss');
			const releaseDate = entryDate.add(15, 'm').format('YYYY-MM-DD HH:mm:ss');
			const lang = req.headers.lang;

			const updateResult = await db.Appointments.findOne({
				where: {
					isRemoved: false,
					id: req.body.id
				}
			});
			const appointments = await db.Appointments.findAll({
				where: {
					doctor: req.body.doctor,
					entryDate: req.body.entryDate
				}
			});
			if (appointments.length > 0) {
				return {
					type: false,
					message: language[lang].error.appointment_notC
				};
			}
			const doctor = req.body.doctor;
			const hospitalId = req.body.hospitalId;

			const doctorResult = await db.Users.findAll({
				where: [
					{
						isRemoved: false,
						id: doctor
					}
				],
				include: [{
					model: db.Roles,
					attributes: [],
					where: [
						{
							rolName: 'doktor'
						}
					]
				}
				]
			});
			if (doctorResult.length <= 0) {
				return {
					type: false,
					message: (language[lang].error.not_found).replace('{}', 'doktor')
				};
			}
			const doctorHospital = await db.Users.findAll({
				where: [
					{
						isRemoved: false,
						id: doctor
					}
				],
				order: [
					['id', 'asc']
				],
				include: [{
					model: db.Roles,
					attributes: [],
					where: [
						{
							rolName: 'doktor'
						}
					]
				},
				{
					model: db.Hospitals,
					attributes: [],
					where: {
						id: hospitalId
					}
				}
				]
			});
			if (doctorHospital.length <= 0) {
				return {
					type: false,
					message: language[lang].error.doctor_hospital
				};
			}
			const dateResult = await db.Appointments.findAll({
				where: {
					userId: req.body.userId,
					doctor: req.body.doctor,
					[Op.or]: [
						{ entryDate: { [Op.between]: [eDate, releaseDate] } },
						{ releaseDate: { [Op.between]: [eDate, releaseDate] } }
					]
				}
			});
			if (dateResult.length > 0) {
				return {
					type: false,
					message: (language[lang].appointment_not_created.already_exists)
				};
			}
			if (!updateResult) {
				return {
					type: false,
					message: (language[lang].error.not_found).replace('{}', language[lang].tables.appointment)
				};
			}
			else {
				updateResult.set({
					userId: req.body.userId,
					doctor: req.body.doctor,
					hospitalId: req.body.hospitalId,
					entryDate: req.body.entryDate,
					releaseDate: releaseDate
				});
				await updateResult.save();
				return {
					type: true,
					message: (language[lang].crud.updated).replace('{#table}', language[lang].tables.appointment),
					data: updateResult
				};
			}
		}
		catch (error) {
			return {
				type: false,
				message: error.message
			};
		}
	}

	static async delete(req) {
		try {
			const lang = req.headers.lang;
			const id = req.params.id;
			const deleteResult = await db.Appointments.findOne({
				where: {
					isRemoved: false,
					id: id
				}
			});
			if (!deleteResult) {
				return {
					type: false,
					message: (language[lang].error.not_found).replace('{}', 'id')
				};
			}
			await deleteResult.set({
				isRemoved: true
			});
			await deleteResult.save();
			return {
				type: true,
				message: (language[lang].crud.deleted).replace('{#table}', language[lang].tables.appointment)
			};

		}
		catch (error) {
			return {
				type: false,
				message: error.message
			};
		}
	}

}

export default AppointmentService;