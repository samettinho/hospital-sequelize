import HospitalService from '../Service/HospitalService';
import HospitalValidation from '../src/validations/HospitalValidation';

class HospitalController {

	static async create(req, res) {
		try {
			const validation = await HospitalValidation.createValidation(req.body);
			if (!validation.type) {
				return {
					type: false,
					message: validation.message
				};
			}
			const result = await HospitalService.create(req);
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
		const result = await HospitalService.getAll(req);
		if (!result.type) {
			return res.json(result.message);
		}
		return res.json(result.data);
	}
	static async get(req, res) {
		const result = await HospitalService.get(req);
		if (!result.type) {
			return res.json(result.message);
		}
		return res.json(result.data);
	}

	static async update(req, res) {
		const validation = await HospitalValidation.createValidation(req.body);
		if (!validation.type) {
			return {
				type: false,
				message: validation.message
			};
		}
		const result = await HospitalService.update(req);
		if (!result.type) {
			return res.json(result.message);
		}
		return res.json(result);
	}

	static async delete(req, res) {
		const result = await HospitalService.delete(req);
		if (!result.type) {
			return res.json(result.message);
		}
		return res.json(result);
	}

}

export default HospitalController;