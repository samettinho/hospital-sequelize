import express from 'express';
import UserController from '../Controller/UserController';

const app = express();

app.get('/:id', UserController.get);
app.delete('/:id', UserController.delete);
app.get('', UserController.getAll);
app.get('/doctors', UserController.getDoctor);
app.post('', UserController.create);
app.put('', UserController.update);

module.exports = app;