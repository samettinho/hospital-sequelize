import express from 'express';
import AuthorisationController from '../Controller/AuthorisationController';

const app = express();

app.get('/:id', AuthorisationController.get);
app.delete('/:id', AuthorisationController.delete);
app.get('', AuthorisationController.getAll);
app.post('', AuthorisationController.create);
app.put('', AuthorisationController.update);

module.exports = app;