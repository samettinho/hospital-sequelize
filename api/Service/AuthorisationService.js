/* eslint-disable array-bracket-spacing */
import db from '../src/models';
import language from '../src/language';

class AuthorisationService {

	static async create(req) {

		try {
			const lang = req.headers.lang;

			const [createdRecord, created] = await db.Authorisation.findOrCreate({
				where: { authorisationStatement: req.body.authorisationStatement },
				defaults: req.body
			});
			if (created) {
				return {
					type: true,
					message: (language[lang].crud.created).replace('{#table}', language[lang].tables.authorisation),
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
		const getResult = await db.Authorisation.findAll({
			order: [
				['id', 'asc']
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
			const authorisationId = req.params.id;
			if (authorisationId === undefined) {
				return {
					type: false,
					message: (language[lang].error.connot_null).replace('{}', 'id')
				};
			}
			else {
				const getResult = await db.Authorisation.findOne({
					where: {
						id: authorisationId
					}
				});
				if (getResult === null) {
					return {
						type: false,
						message: (language[lang].error.not_found).replace('{}', language[lang].tables.authorisation)
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
			const updateResult = await db.Authorisation.findOne({
				where: {
					id: req.body.id
				}
			});
			if (updateResult === null) {
				return {
					type: false,
					message: (language[lang].error.not_found).replace('{}', language[lang].tables.authorisation)
				};
			}
			else {
				updateResult.set({
					authorisationStatement: req.body.authorisationStatement
				});
				await updateResult.save();
				return {
					type: true,
					message: (language[lang].crud.updated).replace('{#table}', language[lang].tables.authorisation),
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
			const deleteResult = await db.Authorisation.findOne({
				where: {
					id: id
				}
			});
			if (deleteResult === null) {
				return {
					type: false,
					message: (language[lang].error.not_found).replace('{}', 'id')
				};
			}

			db.Authorisation.destroy({
				where: { id }
			});
			return {
				type: true,
				message: (language[lang].crud.deleted).replace('{#table}', language[lang].tables.authorisation)
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

export default AuthorisationService;