import AppointmentService from '../Service/AppointmentService';
import AppointmentValidation from '../../src/validations/AppointmentValidation';
/**
 * @typedef AppointmentCreate
 * @property {number} userId.required
 * @property {number} doctor.required
 * @property {number} hospitalId.required
 * @property {string} entryDate.required
 */
/**
 * @typedef AppointmentsUpdate
 * @property {number} id.required
 * @property {number} userId.required
 * @property {number} doctor.required
 * @property {number} hospitalId.required
 * @property {string} entryDate.required
 */
class AppointmentController {

	/**
	 * @swagger
	 * @route POST /appointment
	 * @group Appointments - Post operation about Appointments
	 * @summary endpoint for adding a roles
	 * @param {AppointmentCreate.model} body.body.required
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
	/**
	 * @route GET /appointment
	 * @group Appointments
	 * @summary get all appointments
	 * @returns {object} 200 - An array of  appointments info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async getAll(req, res) {
		try {
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
		catch (error) {
			return res.json({
				type: false,
				message: error.message
			});
		}

	}
	/**
	 * @route GET /appointment/{id}
	 * @group Appointments
	 * @summary get  Appointments
	 * @param {number} id.path.required - ID
	 * @returns {object} 200 - An array of  Appointments info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async get(req, res) {
		try {
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
		catch (error) {
			return res.json({
				type: false,
				message: error.message
			});
		}

	}

	/**
	 * @swagger
	 * @route PUT /appointment
	 * @group Appointments - Post operation about Appointments
	 * @summary endpoint for adding a roles
	 * @param {AppointmentsUpdate.model} Appointments.body.required
	 * @returns {object} 200 - An array of  Appointments info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async update(req, res) {
		try {
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
		catch (error) {
			return res.json({
				type: false,
				message: error.message
			});
		}

	}
	/**
	 * @swagger
	 * @route DELETE /appointment/{id}
	 * @group Appointments - Delete operation about a Appointments
	 * @summary Delete a Appointments from database
	 * @param {number} id.path.required - ID  
	 * @returns {object} 200 - An array of  Appointments info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async delete(req, res) {
		try {
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
		catch (error) {
			return res.json({
				type: false,
				message: error.message
			});
		}

	}

}

export default AppointmentController;