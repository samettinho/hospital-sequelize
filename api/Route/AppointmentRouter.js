import express from 'express';
import AppointmentController from '../Controller/AppointmentController';

const app = express();

app.post('/appointments', AppointmentController.create);
app.get('/appointments', AppointmentController.get);
app.put('/appointments', AppointmentController.update);
app.delete('/appointments', AppointmentController.delete);

module.exports = app;