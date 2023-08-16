import RoleService from '../Service/RoleService';
import RoleValidation from '../src/validations/RoleValidation';

class RoleController {

	/**
	 * @typedef Roles
	 * @property {string} rolName.required
	 * 
	 */
	/**
	 * @swagger
	 * @typedef Roles
	 * @route POST /roles
	 * @group Roles - Post operation about roles
	 * @summary endpoint for adding a roles
	 * @param {Roles.model} Roles.body.required
	 * @returns {object} 200 - An array of  roles info
	 * @returns {Errors} 500 - Internal server error
	 */
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
	 * @route GET /roles
	 * @group Roles
	 * @summary get all roles
	 * @returns {object} 200 - An array of  roles info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async getAll(req, res) {
		const result = await RoleService.getAll(req);
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
	 * @route GET /roles/{id}
	 * @group Roles
	 * @summary get  Roles
	 * @param {number} id.path.required - ID
	 * @returns {object} 200 - An array of  Roles info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async get(req, res) {
		const result = await RoleService.get(req);
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
	 * @typedef Roles
	 * @property {number} id.required
	 * @property {string} rolName.required
	 * 
	 */
	/**
	 * @swagger
	 * @typedef Roles
	 * @route PUT /roles
	 * @group Roles - Post operation about roles
	 * @summary endpoint for updated a roles
	 * @param {Roles.model} Roles.body.required
	 * @returns {object} 200 - An array of  roles info
	 * @returns {Errors} 500 - Internal server error
	 */
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
	 * @route DELETE /roles/{id}
	 * @group Roles - Delete operation about a roles
	 * @summary Delete a roles from database
	 * @param {number} id.path.required - ID  
	 * @returns {object} 200 - An array of  roles info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async delete(req, res) {
		const result = await RoleService.delete(req);
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

export default RoleController;