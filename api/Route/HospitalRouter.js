import express  from 'express';
import HospitalController from '../Controller/HospitalController';

const app=express();

app.post('/hospitalAdd', HospitalController.create);
app.post('/hospitals', HospitalController.get);
app.put('/hospitalUpdate', HospitalController.update);
app.delete('/hospitalDelete', HospitalController.delete);

module.exports=app;