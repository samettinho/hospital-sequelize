import UserService from '../Service/UserService';
import UserValidation from '../src/validations/UserValidation';

class UserController {

	static async create(req, res) {
		try {
			const validation = await UserValidation.createValidation(req.body);
			if (!validation.type) {
				return res.json({
					type: false,
					message: validation.message
				});
			}

			const result = await UserService.create(req);
			if (!result.type) {
				return res.json({
					type: false,
					message: result.message
				});
			}
			return res.json({
				type: true,
				message: result.message,
				data: result.data
			});
		}
		catch (error) {
			return res.json({
				type: false,
				message: error.message
			});
		}
	}
	static async getAll(req, res) {
		const result = await UserService.getAll(req);
		if (!result.type) {
			return res.json({
				type: result.type,
				message: result.message
			});
		}
		return res.json({
			type: result.type,
			message: result.message,
			data: result.data
		});
	}
	static async get(req, res) {
		const result = await UserService.get(req);
		if (!result.type) {
			return res.json({
				type: result.type,
				message: result.message
			});
		}
		return res.json({
			type: result.type,
			message: result.message,
			data: result.data
		});
	}

	static async update(req, res) {
		const validation = await UserValidation.createValidation(req.body);
		if (!validation.type) {
			return res.json({
				type: false,
				message: validation.message
			});
		}
		const result = await UserService.update(req);
		if (!result.type) {
			return res.json({
				type: result.type,
				message: result.message
			});
		}
		return res.json({
			type: true,
			message: result.message,
			data: result.data
		});
	}

	static async delete(req, res) {
		const result = await UserService.delete(req);
		if (!result.type) {
			return res.json({
				type: result.type,
				message: result.message
			});
		}
		return res.json({
			type: result.type,
			message: result.message
		});
	}

}
export default UserController;