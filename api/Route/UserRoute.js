import express from 'express';
import UserController from '../Controller/UserController';

const app = express();

app.get('/users/:id', UserController.get);
app.delete('/users/:id', UserController.delete);
app.get('/users', UserController.getAll);
app.get('/doctors', UserController.getDoctor);
app.post('/users', UserController.create);
app.put('/users', UserController.update);

module.exports = app;