/* eslint-disable array-bracket-spacing */
import db from '../../src/models';
import language from '../../src/language';

class RoleService {

	static async create(req) {
		try {
			const lang = req.headers.lang;
			const [createdRecord, created] = await db.Roles.findOrCreate({
				where: { rolName: req.body.rolName },
				defaults: req.body
			});
			if (created) {
				return {
					type: true,
					message: (language[lang].crud.created).replace('{#table}', language[lang].tables.role),
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
		const getResult = await db.Roles.findAll({
			where: { isRemoved: false },
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
	static async get(req) {
		const lang = req.headers.lang;
		try {
			const roleid = req.params.id;
			if (!roleid) {
				return {
					type: false,
					message: (language[lang].error.connot_null).replace('{}', 'id')
				};
			}
			else {
				const getResult = await db.Roles.findOne({
					where: {
						isRemoved: false,
						id: roleid
					}
				});
				if (!getResult) {
					return {
						type: false,
						message: (language[lang].error.not_found).replace('{}', language[lang].tables.role)
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
			const updateResult = await db.Roles.findOne({
				where: {
					isRemoved: false,
					id: req.body.id
				}
			});
			if (!updateResult) {
				return {
					type: false,
					message: (language[lang].error.not_found).replace('{}', language[lang].tables.role)
				};
			}
			else {
				updateResult.set({
					id: req.body.id,
					rolName: req.body.rolName
				});
				await updateResult.save();
				return {
					type: true,
					message: (language[lang].crud.updated).replace('{#table}', language[lang].tables.role),
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
			const deleteResult = await db.Roles.findOne({
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
				message: (language[lang].crud.deleted).replace('{#table}', language[lang].tables.role)
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

export default RoleService;