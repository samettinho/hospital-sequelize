import express from 'express';
import AppointmentController from '../Controller/AppointmentController';
import AuthrisationEnum from '../../src/enum/AuthorisationEnum';
import permChecker from '../../Helpers/AuthorisationHelper';

const app = express();
app.get('/one', permChecker(AuthrisationEnum.APPOINTMENT_LIST), AppointmentController.get);
app.delete('/:id', permChecker(AuthrisationEnum.APPOINTMENTS_DELETE), AppointmentController.delete);
app.get('/', permChecker(AuthrisationEnum.APPOINTMENTS_LIST), AppointmentController.getAll);
app.post('/', permChecker(AuthrisationEnum.APPOINTMENTS_CREATE), AppointmentController.create);
app.put('/', permChecker(AuthrisationEnum.APPOINTMENT_UPDATE), AppointmentController.update);

module.exports = app;
