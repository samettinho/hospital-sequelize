import express from 'express';
import AppointmentController from '../Controller/AppointmentController';

const app=express();

app.post('/appointmentCreate', AppointmentController.create);
app.post('/appointments', AppointmentController.get);
app.put('/appointmentUpdate', AppointmentController.update);
app.delete('/appointmentDelete', AppointmentController.delete);

module.exports=app;