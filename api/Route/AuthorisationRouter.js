import express from 'express';
import AuthorisationController from '../Controller/AuthorisationController';

const app = express();

app.get('/authorisations/:id', AuthorisationController.get);
app.delete('/authorisations/:id', AuthorisationController.delete);
app.get('/authorisations', AuthorisationController.getAll);
app.post('/authorisations', AuthorisationController.create);
app.put('/authorisations', AuthorisationController.update);

module.exports = app;