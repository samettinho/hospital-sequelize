import AuthorisationService from '../Service/AuthorisationService';
import AuthorisationValidation from '../src/validations/AuthorisationValidation';

class AuthorisationController {

	/**
	 * @typedef Authorisation
	 * @property {string} authorisationStatement.required
	 * 
	 */
	/**
	 * @swagger
	 * @typedef Authorisation
	 * @route POST /authorisations
	 * @group Authorisations - Post operation about authorisation
	 * @summary endpoint for adding a authorisation
	 * @param {Authorisations.model} Authorisations.body.required
	 * @returns {object} 200 - An array of  authorisation info
	 * @returns {Errors} 500 - Internal server error
	 */
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
	/**
	 * @route GET /authorisations
	 * @group Authorisations
	 * @summary get all authorisation
	 * @returns {object} 200 - An array of  authorisation info
	 * @returns {Errors} 500 - Internal server error
	 */
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
	/**
	 * @route GET /authorisation/{id}
	 * @group Authorisations
	 * @summary get  Authorisation
	 * @param {number} id.path.required - ID
	 * @returns {object} 200 - An array of  Authorisation info
	 * @returns {Errors} 500 - Internal server error
	 */
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
	/**
	 * @typedef Authorisation
	 * @property {number} id.required
	 * @property {string} authorisationStatement.required
	 * 
	 */
	/**
	 * @swagger
	 * @typedef Authorisation
	 * @route PUT /authorisation
	 * @group Authorisations - PUT operation about authorisation
	 * @summary endpoint for updated a authorisation
	 * @param {Authorisations.model} Authorisations.body.required
	 * @returns {object} 200 - An array of  authorisation info
	 * @returns {Errors} 500 - Internal server error
	 */
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
	/**
	 * @swagger
	 * @route DELETE /authorisation/{id}
	 * @group Authorisations - Delete operation about a authorisation
	 * @summary Delete a authorisation from database
	 * @param {number} id.path.required - ID  
	 * @returns {object} 200 - An array of  authorisation info
	 * @returns {Errors} 500 - Internal server error
	 */
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