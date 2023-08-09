/* eslint-disable array-bracket-spacing */
import db from '../src/models';

class HospitalService {

	static async create(req) {
		try {
			const newHospital = await db.Hospitals.create({
				hospitalName: req.body.hospitalName
			});
			if (newHospital.hospitalName === null) {
				return {
					type: false,
					message: 'hospital name cannot null'
				};
			}
			else {
				return {
					type: true,
					message: 'created'
				};
			}
		}
		catch (error) {
			return {
				type: false,
				message: error.message
			};
		}
	}

	static async getAll() {
		const getResult = await db.Hospitals.findAll({
			order: [
				['id', 'asc']
			]
		});
		return {
			type: true,
			data: getResult
		};

	}
	static async get(req) {
		try {
			const hospitalId = req.params.id;
			if (hospitalId === undefined) {
				return {
					type: false,
					message: 'id cannot null'
				};
			}
			else {
				const getResult = await db.Hospitals.findOne({
					where: {
						id: hospitalId
					}
				});
				return {
					type: true,
					data: getResult
				};
			}
		}
		catch (error) {
			return {
				type: false,
				message: error.message
			};
		}
	}

	static async update(req) {
		try {
			const updateResult = await db.Hospitals.findOne({
				where: {
					id: req.body.id
				}
			});
			if (updateResult === null) {
				return {
					type: false,
					message: 'hospital not found'
				};
			}
			else {
				updateResult.set({
					hospitalName: req.body.hospitalName
				});
				await updateResult.save();
				return {
					type: true,
					message: 'hospital name updated'
				};
			}
		}
		catch (error) {
			return {
				type: false,
				message: error.message
			};
		}
	}

	static async delete(req) {
		try {
			const id = req.params.id;
			if (id === undefined) {
				return {
					type: false,
					message: 'id cannot be null'
				};
			}
			else {
				db.Hospitals.destroy({
					where: { id }
				});
				return {
					type: true,
					message: 'role is deleted'
				};
			}
		}
		catch (error) {
			return {
				type: false,
				message: error.message
			};
		}
	}

}

export default HospitalService;