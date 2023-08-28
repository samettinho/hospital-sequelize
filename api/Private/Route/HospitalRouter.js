import express from 'express';
import HospitalController from '../Controller/HospitalController';

const app = express();

app.get('/:id', HospitalController.get);
app.delete('/:id', HospitalController.delete);
app.get('', HospitalController.getAll);
app.post('', HospitalController.create);
app.put('', HospitalController.update);

module.exports = app;
