import express from 'express';
import AppointmentController from '../Controller/AppointmentController';

const app = express();
app.get('/appointments/:id', AppointmentController.get);
app.delete('/appointments/:id', AppointmentController.delete);
app.get('/appointments', AppointmentController.getAll);
app.post('/appointments', AppointmentController.create);
app.put('/appointments', AppointmentController.update);

module.exports = app;