import AppointmentService from '../Service/AppointmentService';
import AppointmentValidation from '../src/validations/AppointmentValidation';

class AppointmentController {

	static async create(req, res) {
		try {
			const validation = await AppointmentValidation.createValidation(req.body);
			if (!validation.type) {
				return res.json({
					type: false,
					message: validation.message
				});
			}
			const result = await AppointmentService.create(req);
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
		const result = await AppointmentService.getAll(req);
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
		const result = await AppointmentService.get(req);
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
		const validation = await AppointmentValidation.createValidation(req.body);
		if (!validation.type) {
			return res.json({
				type: false,
				message: validation.message
			});
		}
		const result = await AppointmentService.update(req);
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
		const result = await AppointmentService.delete(req);
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

export default AppointmentController;