/* eslint-disable array-bracket-spacing */
import db from '../src/models';
import language from '../src/language';

class HospitalService {

	static async create(req) {

		try {
			const lang = req.headers.lang;

			const [createdRecord, created] = await db.Hospitals.findOrCreate({
				where: { hospitalName: req.body.hospitalName },
				defaults: req.body
			});
			if (created) {
				return {
					type: true,
					message: (language[lang].crud.created).replace('{#table}', language[lang].tables.hospital),
					data: createdRecord
				};
			}
			else {
				return {
					type: false,
					message: (language[lang].error.already_exists)
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

	static async getAll(req) {
		const lang = req.headers.lang;
		const getResult = await db.Hospitals.findAll({
			where: { isRemoved: false },
			order: [
				['id', 'asc']
			],
			include: [
				{
					as: 'doctors',
					model: db.Users,
					attributes: [
						'id',
						'name',
						'surName'
					],
					where: { isRemoved: false },
					required: false
				}
			]
		});
		return {
			type: true,
			message: language[lang].crud.succes,
			data: getResult
		};

	}
	static async get(req) {
		try {
			const lang = req.headers.lang;
			const hospitalId = req.params.id;
			if (!hospitalId) {
				return {
					type: false,
					message: (language[lang].error.connot_null).replace('{}', 'id')
				};
			}
			else {
				const getResult = await db.Hospitals.findOne({
					where: {
						isRemoved: false,
						id: hospitalId
					},
					include: [
						{
							as: 'doctors',
							model: db.Users,
							attributes: [
								'id',
								'name',
								'surName'
							],
							where: { isRemoved: false },
							required: false
						}
					]
				});
				if (!getResult) {
					return {
						type: false,
						message: (language[lang].error.not_found).replace('{}', language[lang].tables.hospital)
					};
				}
				return {
					type: true,
					message: language[lang].crud.succes,
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
			const lang = req.headers.lang;
			const updateResult = await db.Hospitals.findOne({
				where: {
					isRemoved: false,
					id: req.body.id
				}
			});
			if (!updateResult) {
				return {
					type: false,
					message: (language[lang].error.not_found).replace('{}', language[lang].tables.role)
				};
			}
			else {
				updateResult.set({
					hospitalName: req.body.hospitalName
				});
				await updateResult.save();
				return {
					type: true,
					message: (language[lang].crud.updated).replace('{#table}', language[lang].tables.hospital),
					data: updateResult
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
			const lang = req.headers.lang;
			const id = req.params.id;
			const deleteResult = await db.Hospitals.findOne({
				where: {
					isRemoved: false,
					id: id
				}
			});
			if (!deleteResult) {
				return {
					type: false,
					message: (language[lang].error.not_found).replace('{}', 'id')
				};
			}
			await deleteResult.set({
				isRemoved: true
			});
			await deleteResult.save();
			return {
				type: true,
				message: (language[lang].crud.deleted).replace('{#table}', language[lang].tables.hospital)
			};

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