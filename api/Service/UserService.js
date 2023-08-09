/* eslint-disable array-bracket-spacing */
import db from '../src/models';

class UserService {

	static async create(req) {
		try {
			const [createdRecord, created] = await db.User.findOrCreate({
				where: { tc: req.body.tc },
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
					message: 'Record not added. A record with the same unique key already exists.'
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
		const getResult = await db.User.findAll({
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
			const userid = req.params.id;
			if (userid === undefined) {
				return {
					type: false,
					message: 'id cannot null'
				};
			}
			else {
				const getResult = await db.User.findOne({
					where: {
						id: userid
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
		try {
			const updateResult = await db.User.findOne({
				where: {
					id: req.body.id
				}
			});
			if (updateResult === null) {
				return {
					type: false,
					message: 'user not found'
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
					message: 'user updated'
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
			const id = req.params.id;
			if (id === undefined) {
				return {
					type: false,
					message: 'id cannot be null'
				};
			}
			else {
				db.User.destroy({
					where: { id }
				});
				return {
					type: true,
					message: 'user is deleted'
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

}

export default UserService;