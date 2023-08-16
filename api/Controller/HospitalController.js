import HospitalService from '../Service/HospitalService';
import HospitalValidation from '../src/validations/HospitalValidation';

class HospitalController {

	/**
	 * @typedef Hospitals
	 * @property {string} hospitalName.required
	 * 
	 */
	/**
	 * @swagger
	 * @typedef Hospitals
	 * @route POST /hospitals
	 * @group Hospitals - Post operation about hospitals
	 * @summary endpoint for adding a hospitals
	 * @param {Hospitals.model} Hospitals.body.required
	 * @returns {object} 200 - An array of  hospitals info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async create(req, res) {
		try {
			const validation = await HospitalValidation.createValidation(req.body);
			if (!validation.type) {
				return res.json({
					type: false,
					message: validation.message
				});
			}
			const result = await HospitalService.create(req);
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
	 * @route GET /hospitals
	 * @group Hospitals
	 * @summary get all hospitals
	 * @returns {object} 200 - An array of  hospitals info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async getAll(req, res) {
		const result = await HospitalService.getAll(req);
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
	 * @route GET /hospitals/{id}
	 * @group Hospitals
	 * @summary get  hospitals
	 * @param {number} id.path.required - ID
	 * @returns {object} 200 - An array of  hospitals info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async get(req, res) {
		const result = await HospitalService.get(req);
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
	 * @typedef Hospitals
	 * @property {number} id.required 
	 * @property {string} hospitalName.required
	 * 
	 */
	/**
	 * @swagger
	 * @typedef Hospitals
	 * @route PUT /hospitals
	 * @group Hospitals - Post operation about hospitals
	 * @summary endpoint for updated a hospitals
	 * @param {Hospitals.model} Hospitals.body.required
	 * @returns {object} 200 - An array of  hospitals info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async update(req, res) {
		const validation = await HospitalValidation.createValidation(req.body);
		if (!validation.type) {
			return res.json({
				type: false,
				message: validation.message
			});
		}
		const result = await HospitalService.update(req);
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
	 * @swagger
	 * @route DELETE /hospitals/{id}
	 * @group Hospitals - Delete operation about a hospitals
	 * @summary Delete a hospitals from database
	 * @param {number} id.path.required - ID  
	 * @returns {object} 200 - An array of  hospitals info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async delete(req, res) {
		const result = await HospitalService.delete(req);
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

export default HospitalController;