/* eslint-disable array-bracket-spacing */

import db from '../src/models';
import language from '../src/language';

class UserService {

	static async create(req) {

		try {
			const lang = req.headers.lang;

			const [createdRecord, created] = await db.User.findOrCreate({
				where: { tc: req.body.tc },
				defaults: req.body
			});
			if (created) {
				return {
					type: true,
					message: (language[lang].crud.created).replace('{#table}', language[lang].tables.user),
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
		try {
			const lang = req.headers.lang;
			const userType = req.query.type;

			const getResult = await db.User.findAll({
				order: [
					['id', 'asc']
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
				const getResult = await db.User.findOne({
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
			const updateResult = await db.User.findOne({
				where: {
					id: req.body.id
				}
			});
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
			const deleteResult = await db.User.findOne({
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
			db.User.destroy({
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