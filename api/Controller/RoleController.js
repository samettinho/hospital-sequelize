import RoleService from '../Service/RoleService';
import RoleValidation from '../src/validations/RoleValidation';

class RoleController {

	static async create(req, res) {
		try {
			const validation = await RoleValidation.createValidation(req.body);
			if (!validation.type) {
				return res.json({
					type: false,
					message: validation.message
				});
			}
			const result = await RoleService.create(req);
			if (!result.type) {
				return res.json({
					type: false,
					message: result.message
				});
			}
			return res.json(result);
		}
		catch (error) {
			return res.json({
				type: false,
				message: error.message
			});
		}
	}
	static async getAll(req, res) {
		const result = await RoleService.getAll(req);
		if (!result.type) {
			return res.json(result.message);
		}
		return res.json(result.data);
	}

	static async get(req, res) {
		const result = await RoleService.get(req);
		if (!result.type) {
			return res.json(result.message);
		}
		return res.json(result.data);
	}

	static async update(req, res) {
		const validation = await RoleValidation.createValidation(req.body);
		if (!validation.type) {
			return res.json({
				type: false,
				message: validation.message
			});
		}
		const result = await RoleService.update(req);
		if (!result.type) {
			return res.json(result.message);
		}
		return res.json(result);
	}

	static async delete(req, res) {
		const result = await RoleService.delete(req);
		if (!result.type) {
			return res.json(result.message);
		}
		return res.json(result);
	}

}

export default RoleController;