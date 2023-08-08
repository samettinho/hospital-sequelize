import express from 'express';
import RoleRouter from './api/Route/RoleRouter.js';
import HospitalRouter from './api/Route/HospitalRouter.js';
import AuthorisationRouter from './api/Route/AuthorisationRouter.js';
import UserRoute from './api/Route/UserRoute.js';
import AppointmentRouter from './api/Route/AppointmentRouter.js';

const app=express();
app.use(express.json());

app.use('/', UserRoute);
app.use('/', RoleRouter);
app.use('/', AuthorisationRouter);
app.use('/', HospitalRouter);
app.use('/', AppointmentRouter);

app.listen(3000, ()=>{
	console.log('server is open');
});