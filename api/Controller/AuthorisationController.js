import AuthorisationService from '../Service/AuthorisationService';
import AuthorisationValidation from '../src/validations/AuthorisationValidation';

class AuthorisationController {

	static async create(req, res) {
		try {
			const validation = await AuthorisationValidation.createValidation(req.body);
			if (!validation.type) {
				return res.json({
					type: false,
					message: validation.message
				});
			}
			const result = await AuthorisationService.create(req);
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
		const result = await AuthorisationService.getAll(req);
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
	static async get(req, res) {
		const result = await AuthorisationService.get(req);
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

	static async update(req, res) {
		const validation = await AuthorisationValidation.createValidation(req.body);
		if (!validation.type) {
			return res.json({
				type: false,
				message: validation.message
			});
		}
		const result = await AuthorisationService.update(req);
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
	static async delete(req, res) {
		const result = await AuthorisationService.delete(req);
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

}
export default AuthorisationController;