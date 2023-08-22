import express from 'express';
import AppointmentController from '../Controller/AppointmentController';

const app = express();
app.get('/:id', AppointmentController.get);
app.delete('/:id', AppointmentController.delete);
app.get('', AppointmentController.getAll);
app.post('', AppointmentController.create);
app.put('', AppointmentController.update);

module.exports = app;