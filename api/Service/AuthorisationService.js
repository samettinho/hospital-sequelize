/* eslint-disable array-bracket-spacing */
import db from '../src/models';

class AuthorisationService {

	static async create(req) {
		try {
			const newAuthorisation = await db.Authorisation.create({
				authorisationStatement: req.body.authorisationStatement
			});
			if (newAuthorisation.authorisationStatement === null) {
				return {
					type: false,
					message: 'Authorisation cannot null'
				};
			}
			else {
				return {
					type: true,
					data: newAuthorisation
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

	static async get(req) {
		const authorisationId = req.body.id;
		if (authorisationId === undefined) {
			const getResult = await db.Authorisation.findAll({
				order: [
					['id', 'asc']
				]
			});
			return getResult;
		}
		else {
			const getResult = await db.Authorisation.findOne({
				where: {
					id: authorisationId
				}
			});
			return getResult;
		}
	}

	static async update(req) {
		try {
			const updateResult = await db.Authorisation.findOne({
				where: {
					id: req.body.id
				}
			});
			if (updateResult === null) {
				console.log('if-->', updateResult);
				return {
					type: false,
					message: 'authorisation not found'
				};
			}
			else {
				updateResult.set({
					authorisationStatement: req.body.authorisationStatement
				});
				await updateResult.save();
				console.log('updateResult---->', updateResult);
				return updateResult;
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
		const id = Number(req.body.id);
		db.Authorisation.destroy({
			where: { id }
		});
		return {
			message: 'authorisation is deleted'
		};
	}

}

export default AuthorisationService;