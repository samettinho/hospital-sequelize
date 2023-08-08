/* eslint-disable array-bracket-spacing */

import db from '../src/models';

class AppointmentService {

	static async create(req) {
		try {
			const entryDate = req.body.entryDate;
			const releaseDate = req.body.releaseDate;
			console.log('entry date--->', entryDate);
			console.log('release date--->', releaseDate);
			const [createdRecord, created] = await db.Appointments.findOrCreate({
				where: {
					entryDate: entryDate,
					releaseDate: releaseDate
				},
				defaults: req.body
			});
			if (created) {
				return {
					type: true,
					data: createdRecord
				};
			}
			else {
				return {
					type: false,
					message: 'appointment could not be created.'
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

	static async get(req){
		try {
			const appointmentid=req.body.id;
			if (appointmentid===undefined) {
				const getResult= await db.Appointments.findAll({
					order: [
						[ 'id', 'asc' ]
					]
				});
				return {
					type: true,
					data: getResult
				};
			}
			else {
				const getResult=await db.Appointments.findOne({
					where: {
						id: appointmentid
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

	static async update(req){
		try {
			const updateResult=await db.Appointments.findOne({
				where: {
					id: req.body.id
				}
			});
			if (updateResult===null) {
				return {
					type: false,
					message: 'Appointment not found'
				};
			}
			else {
				updateResult.set({
					userId: req.body.userId,
					doctor: req.body.doctor,
					hospitalId: req.body.hospitalId,
					entryDate: req.body.entryDate,
					releaseDate: req.body.releaseDate
				});
				await updateResult.save();
				return {
					type: true,
					message: 'Appointment  updated'
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
    
	static async delete(req){
		try {
			const id=req.body.id;
			if (id===undefined) {
				return {
					type: false,
					message: 'id cannot be null'
				};
			}
			else {
				db.Appointments.destroy({
					where: {id}
				});
				return {
					type: true,
					message: 'appointment is deleted'
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

export default AppointmentService;