/* eslint-disable array-bracket-spacing */
import db from '../src/models';

class RoleService {

	static async create(req) {
		try {
			const [createdRecord, created] = await db.Role.findOrCreate({
				where: { rolName: req.body.rolName },
				defaults: req.body
			});
			if (created) {
				return {
					type: true,
					data: createdRecord
				};
			}
			else {
				return {
					type: false,
					message: 'Role not added.'
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
	static async getAll() {
		const getResult = await db.Role.findAll({
			order: [
				['id', 'asc']
			]
		});
		return {
			type: true,
			data: getResult
		};

	}
	static async get(req) {
		try {
			const roleid = req.params.id;
			if (roleid === undefined) {
				return {
					type: false,
					message: 'id cannot null'
				};
			}
			else {
				const getResult = await db.Role.findOne({
					where: {
						id: roleid
					}
				});
				return {
					type: true,
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
		const updateResult = await db.Role.findOne({
			where: {
				id: req.body.id
			}
		});
		if (updateResult === null) {
			return {
				type: false,
				message: 'role not found'
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
				message: 'role updated'
			};
		}
	}
	static async delete(req) {
		const id = Number(req.params.id);
		db.Role.destroy({
			where: { id }
		});
		return {
			message: 'role is deleted'
		};
	}

}

export default RoleService;