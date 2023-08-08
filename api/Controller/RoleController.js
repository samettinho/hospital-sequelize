import RoleService from '../Service/RoleService';

class RoleController{

	static async create(req, res){
		try {
			const result=await RoleService.create(req);
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
	static async get(req, res){
		const result=await RoleService.get(req);
		if (!result.type) {
			return res.json(result.message);
		}
		return res.json(result.data);
	}

	static async update(req, res){
		const result=await RoleService.update(req);
		if (!result.type) {
			return res.json(result.message);
		}
		return res.json(result);
	}

	static async delete(req, res){
		const result=await RoleService.delete(req);
		if (!result.type) {
			return res.json(result.message);
		}
		return res.json(result);
	}

}

export default RoleController;