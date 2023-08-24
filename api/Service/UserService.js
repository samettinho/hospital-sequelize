/* eslint-disable array-bracket-spacing */

import db from '../src/models';
import language from '../src/language';

class UserService {

	static async create(req) {

		try {
			const lang = req.headers.lang;
			const {
				tc,
				name,
				surName,
				phone,
				email,
				roleId
			} = req.body;

			const createUser = await db.Users.create({
				tc: tc,
				name: name,
				surName: surName,
				phone: phone,
				email: email,
				UsersRoles: {
					roleId: roleId
				}
			}, {
				include: [
					{
						model: db.UsersRoles
					}
				]
			});
			return {
				type: true,
				message: (language[lang].crud.created).replace('{#table}', language[lang].tables.user),
				data: createUser
			};

		}
		catch (error) {
			return {
				type: false,
				message: error.message
			};
		}
	}
	static async getDoctor(req) {
		try {
			const lang = req.headers.lang;
			const getResult = await db.Users.findAll({

				attributes: [
					'id',
					'name',
					'surName',
					[db.Sequelize.col('Roles.rolName'), 'role_name'],
					[db.Sequelize.col('Hospitals.hospitalName'), 'hospital_name']
				],
				order: [
					['id', 'asc']
				],
				include: [{
					model: db.Role,
					attributes: [],
					where: [
						{
							rolName: 'doktor'
						}
					]
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
		catch (error) {
			return {
				type: false,
				message: error.message
			};
		}

	}
	static async getAll(req) {
		try {
			const lang = req.headers.lang;
			const getResult = await db.Users.findAll({
				attributes: [
					'id',
					'name',
					'surName',
					'phone',
					'email',
					[db.Sequelize.col('Roles.rolName'), 'role_name']
				],
				order: [
					['id', 'asc']
				],
				include: [
					{
						model: db.Role,
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
		catch (error) {
			return {
				type: false,
				message: error.message
			};
		}

	}
	static async get(req) {
		try {
			const lang = req.headers.lang;
			const userid = req.params.id;
			if (userid === undefined) {
				return {
					type: false,
					message: (language[lang].error.cannot_null).replace('{}', 'id')
				};
			}
			else {
				const getResult = await db.Users.findOne({
					where: {
						id: userid
					}
				});
				if (getResult === null) {
					return {
						type: false,
						message: (language[lang].error.not_found).replace('{}', language[lang].tables.user)
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
			const updateResult = await db.Users.findOne({
				where: {
					id: req.body.id
				}
			});
			const updateTc = await db.Users.findOne({
				where: {
					tc: req.body.tc
				}
			});
			if (updateTc !== null) {
				return {
					type: false,
					message: (language[lang].error.already_exists)
				};
			}
			if (updateResult === null) {
				return {
					type: false,
					message: (language[lang].error.not_found).replace('{}', language[lang].tables.user)
				};
			}
			else {
				updateResult.set({
					tc: req.body.tc,
					name: req.body.name,
					surName: req.body.surName,
					phone: req.body.phone,
					email: req.body.email
				});
				await updateResult.save();
				return {
					type: true,
					message: (language[lang].crud.updated).replace('{#table}', language[lang].tables.user),
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
			const deleteResult = await db.Users.findOne({
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
			const userAppointment = await db.Appointments.findAll({
				where: {
					userId: id
				}
			});
			if (userAppointment.length > 0) {
				return {
					type: false,
					message: language[lang].error.userDelete
				};
			}
			await db.Users.destroy({
				where: { id }
			});
			return {
				type: true,
				message: (language[lang].crud.deleted).replace('{#table}', language[lang].tables.user)
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

export default UserService;