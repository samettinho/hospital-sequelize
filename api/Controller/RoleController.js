import RoleService from '../Service/RoleService';
import RoleValidation from '../src/validations/RoleValidation';
/**
 * @typedef RoleCreate
 * @property {string} rolName.required
 */
/**
 * @typedef RolePut
 * @property {number} id.required
 * @property {string} rolName.required
 */
class RoleController {

	/**
	 * @swagger
	 * @route POST /role
	 * @group Roles - Post operation about roles
	 * @summary endpoint for adding a roles
	 * @param {RoleCreate.model} body.body.required
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
	 * @route GET /role
	 * @group Roles
	 * @summary get all roles
	 * @returns {object} 200 - An array of  roles info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async getAll(req, res) {
		try {
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
		catch (error) {
			return res.json({
				type: false,
				message: error.message
			});
		}

	}
	/**
	 * @route GET /role/{id}
	 * @group Roles
	 * @summary get  Roles
	 * @param {number} id.path.required - ID
	 * @returns {object} 200 - An array of  Roles info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async get(req, res) {
		try {
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
		catch (error) {
			return res.json({
				type: false,
				message: error.message
			});
		}

	}

	/**
	 * @swagger
	 * @typedef RolePut
	 * @route PUT /role
	 * @group Roles - Post operation about roles
	 * @summary endpoint for updated a roles
	 * @param {RolePut.model} Roles.body.required
	 * @returns {object} 200 - An array of  roles info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async update(req, res) {
		try {
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
		catch (error) {
			return res.json({
				type: false,
				message: error.message
			});
		}

	}
	/**
	 * @swagger
	 * @route DELETE /role/{id}
	 * @group Roles - Delete operation about a roles
	 * @summary Delete a roles from database
	 * @param {number} id.path.required - ID  
	 * @returns {object} 200 - An array of  roles info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async delete(req, res) {
		try {
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
		catch (error) {
			return res.json({
				type: false,
				message: error.message
			});
		}

	}

}

export default RoleController;