import UserService from '../Service/UserService';
import UserValidation from '../src/validations/UserValidation';
/**
 * @typedef UserCreate
 * @property {string} tc.required
 * @property {string} name.required
 * @property {string} surName.required
 * @property {string} phone.required
 * @property {string} email.required 
 */
/**
 * @typedef UserPut
 * @property {number} id.required
 * @property {string} tc.required
 * @property {string} name.required
 * @property {string} surName.required
 * @property {string} phone.required
 * @property {string} email.required
 */
class UserController {

	/**
	 * @swagger
	 * @route POST /user
	 * @group Users - Post operation about users
	 * @summary endpoint for adding a Users
	 * @param {UserCreate.model} body.body.required
	 * @returns {object} 200 - An array of  users info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async create(req, res) {
		try {
			const validation = await UserValidation.createValidation(req.body);
			if (!validation.type) {
				return res.json({
					type: false,
					message: validation.message
				});
			}

			const result = await UserService.create(req);
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
	 * @route GET /doctor
	 * @group Users
	 * @summary get all doctors
	 * @returns {object} 200 - An array of  users info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async getDoctor(req, res) {
		try {
			const result = await UserService.getDoctor(req);
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
	 * @route GET /user
	 * @group Users
	 * @summary get all users
	 * @returns {object} 200 - An array of  users info
	 * @returns {Errors} 500 - Internal server error
	 */

	static async getAll(req, res) {
		try {
			const result = await UserService.getAll(req);
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
	 * @route GET /user/{id}
	 * @group Users
	 * @summary get  user
	 * @param {number} id.path.required - ID
	 * @returns {object} 200 - An array of  users info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async get(req, res) {
		try {
			const result = await UserService.get(req);
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
	 * @route PUT /user
	 * @group Users - Put operation about users
	 * @summary endpoint for adding a Users
	 * @param {UserPut.model} Users.body.required
	 * @returns {object} 200 - An array of  users info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async update(req, res) {
		try {
			const validation = await UserValidation.createValidation(req.body);
			if (!validation.type) {
				return res.json({
					type: false,
					message: validation.message
				});
			}
			const result = await UserService.update(req);
			if (!result.type) {
				return res.json({
					type: result.type,
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
	 * @route DELETE /user/{id}
	 * @group Users - Delete operation about a users
	 * @summary Delete a user from database
	 * @param {number} id.path.required - ID  
	 * @returns {object} 200 - An array of  users info
	 * @returns {Errors} 500 - Internal server error
	 */
	static async delete(req, res) {
		try {
			const result = await UserService.delete(req);
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
export default UserController;