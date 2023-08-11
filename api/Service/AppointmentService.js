/* eslint-disable array-bracket-spacing */

import db from '../src/models';
import language from '../src/language';

class AppointmentService {

	static async create(req) {
		try {
			const lang = req.headers.lang;
			const entryDate = req.body.entryDate;
			const releaseDate = req.body.releaseDate;
			const [createdRecord, created] = await db.Appointments.findOrCreate({
				where: {
					entryDate: entryDate,
					releaseDate: releaseDate
				},
				defaults: req.body
			});
			if (created) {
				return {
					type: true,
					message: (language[lang].crud.created).replace('{#table}', language[lang].tables.appointment),
					data: createdRecord
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
			attributes: [
				// eslint-disable-next-line max-len
				[db.Sequelize.fn('concat', db.Sequelize.col('user.name'), ' ', db.Sequelize.col('user.surName')), 'user_full_name'],
				// eslint-disable-next-line max-len
				[db.Sequelize.fn('concat', db.Sequelize.col('appDoctor.name'), ' ', db.Sequelize.col('user.surName')), 'doctor_full_name'],
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
					model: db.User,
					attributes: []
				},
				{
					as: 'appDoctor',
					model: db.User,
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
			const appointmentid = req.body.id;
			if (appointmentid === undefined) {
				return {
					type: false,
					message: (language[lang].error.connot_null).replace('{}', 'id')
				};
			}
			else {
				const getResult = await db.Appointments.findOne({
					where: {
						id: appointmentid
					}
				});
				if (getResult === null) {
					return {
						type: false,
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
			const lang = req.headers.lang;
			const updateResult = await db.Appointments.findOne({
				where: {
					id: req.body.id
				}
			});
			if (updateResult === null) {
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
					releaseDate: req.body.releaseDate
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
					id: id
				}
			});
			if (deleteResult === null) {
				return {
					type: false,
					message: (language[lang].error.not_found).replace('{}', 'id')
				};
			}

			db.Appointments.destroy({
				where: { id }
			});
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