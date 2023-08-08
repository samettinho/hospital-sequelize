import express from 'express';
import AuthorisationController from '../Controller/AuthorisationController';

const  app=express();

app.post('/authorisationAdd', AuthorisationController.create);
app.post('/authorisations', AuthorisationController.get);
app.put('/authorisationUpdate', AuthorisationController.update);
app.delete('/authorisationDelete', AuthorisationController.delete);

module.exports=app;