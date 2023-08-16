import AppointmentService from '../Service/AppointmentService';
import AppointmentValidation from '../src/validations/AppointmentValidation';

class AppointmentController {

	/**
	 * @typedef Appointments
	 * @property {number} userId.required
	 * @property {number} doctor.required
	 * @property {number} hospitalId.required
	 * @property {string} entryDate.required
	 */
	/**
	 * @swagger
	 * @typedef Appointments
	 * @route POST /appointments
	 * @group Appointments - Post operation about Appointments
	 * @summary endpoint for adding a roles
	 * @param {Appointments.model} Appointments.body.required
	 * @returns {object} 200 - An array of  Appointments info
	 * @returns {Errors} 500 - Internal server error
	 */
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
				message: result.message
			});
		}
		catch (error) {
			return res.json({
				type: false,
				message: error.message
			});
		}
	}
	/**
	 * @route GET /appointments
	 * @group Appointments
	 * @summary get all appointments
	 * @returns {object} 200 - An array of  appointments info
	 * @returns {Errors} 500 - Internal server error
	 */
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
	/**
	 * @route GET /appointments/{id}
	 * @group Appointments
	 * @summary get  Appointments
	 * @param {number} id.path.required - ID
	 * @returns {object} 200 - An array of  Appointments info
	 * @returns {Errors} 500 - Internal server error
	 */
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
	/**
	 * @typedef Appointments
	 * @property {number} id.required
	 * @property {number} userId.required
	 * @property {number} doctor.required
	 * @property {number} hospitalId.required
	 * @property {string} entryDate.required
	 */
	/**
	 * @swagger
	 * @typedef Appointments
	 * @route PUT /appointments
	 * @group Appointments - Post operation about Appointments
	 * @summary endpoint for adding a roles
	 * @param {Appointments.model} Appointments.body.required
	 * @returns {object} 200 - An array of  Appointments info
	 * @returns {Errors} 500 - Internal server error
	 */
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
	/**
	 * @swagger
	 * @route DELETE /appointments/{id}
	 * @group Appointments - Delete operation about a Appointments
	 * @summary Delete a Appointments from database
	 * @param {number} id.path.required - ID  
	 * @returns {object} 200 - An array of  Appointments info
	 * @returns {Errors} 500 - Internal server error
	 */
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