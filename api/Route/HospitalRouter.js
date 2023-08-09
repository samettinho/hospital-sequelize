import express from 'express';
import HospitalController from '../Controller/HospitalController';

const app = express();

app.get('/hospitals/:id', HospitalController.get);
app.delete('/hospitals/:id', HospitalController.delete);
app.get('/hospitals', HospitalController.getAll);
app.post('/hospitals', HospitalController.create);
app.put('/hospitals', HospitalController.update);

/*
 * app.post('/hospitalAdd', HospitalController.create);
 * app.post('/hospitals', HospitalController.get);
 * app.put('/hospitalUpdate', HospitalController.update);
 * app.delete('/hospitalDelete', HospitalController.delete);
 */

module.exports = app;