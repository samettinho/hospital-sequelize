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
	static async get(req) {
		const roleid = req.body.id;
		console.log(roleid);
		if (roleid === undefined) {
			const getResult = await db.Role.findAll({
				order: [
					['id', 'asc']
				]
			});
			return getResult;
		}
		else {
			const getResult = await db.Role.findOne({
				where: {
					id: roleid
				}
			});
			return getResult;
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
			return updateResult;
		}
	}
	static async delete(req) {
		const id = Number(req.body.id);
		db.Role.destroy({
			where: { id }
		});
		return {
			message: 'role is deleted'
		};
	}

}

export default RoleService;