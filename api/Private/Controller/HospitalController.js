import HospitalService from '../Service/HospitalService';
import HospitalValidation from '../../src/validations/HospitalValidation';

/**
 * @typedef HospitalCreate
 * @property {string} hospitalName.required
 */
/**
 * @typedef HospitalPut
 * @property {number} id.required 
 * @property {string} hospitalName.required
 */
class HospitalController {

	/**
	 * @swagger
	 * @route POST /hospital
	 * @group Hospitals - Post operation about hospitals
	 * @summary endpoint for adding a hospitals
	 * @param {HospitalCreate.model} body.body.required
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
	 * @route GET /hospital
	 * @group Hospitals
	 * @summary get all hospitals
	 * @returns {object} 200 - An array of  hospitals info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async getAll(req, res) {
		try {
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
		catch (error) {
			return res.json({
				type: false,
				message: error.message
			});
		}

	}
	/**
	 * @route GET /hospital/{id}
	 * @group Hospitals
	 * @summary get  hospitals
	 * @param {number} id.path.required - ID
	 * @returns {object} 200 - An array of  hospitals info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async get(req, res) {
		try {
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
		catch (error) {
			return res.json({
				type: false,
				message: error.message
			});
		}

	}
	/**
	 * @swagger
	 * @typedef HospitalPut
	 * @route PUT /hospital
	 * @group Hospitals - Post operation about hospitals
	 * @summary endpoint for updated a hospitals
	 * @param {HospitalPut.model} body.body.required
	 * @returns {object} 200 - An array of  hospitals info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async update(req, res) {
		try {
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
		catch (error) {
			return res.json({
				type: false,
				message: error.message
			});
		}

	}
	/**
	 * @swagger
	 * @route DELETE /hospital/{id}
	 * @group Hospitals - Delete operation about a hospitals
	 * @summary Delete a hospitals from database
	 * @param {number} id.path.required - ID  
	 * @returns {object} 200 - An array of  hospitals info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async delete(req, res) {
		try {
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
		catch (error) {
			return res.json({
				type: false,
				message: error.message
			});
		}

	}

}

export default HospitalController;