import AuthorisationService from '../Service/AuthorisationService';

class AuthorisationController {

	static async create(req, res) {
		try {
			const result = await AuthorisationService.create(req);
			if (!result.type) {
				return res.json({
					type: false,
					message: result.message
				});
			}
			return res.json(result);
		}
		catch (error) {
			return {
				type: false,
				message: error.message
			};
		}
	}
	static async get(req, res) {
		const result = await AuthorisationService.get(req);
		return res.json(result);
	}
	static async update(req, res) {
		const result = await AuthorisationService.update(req);
		if (!result.type) {
			return res.json(result);
		}
		else {
			return res.json(result.message);
		}
	}
	static async delete(req, res) {
		const result = await AuthorisationService.delete(req);
		return res.json(result);
	}

}
export default AuthorisationController;