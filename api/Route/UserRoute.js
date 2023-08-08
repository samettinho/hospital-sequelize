import express  from 'express';
import UserController from '../Controller/UserController';

const app=express();

app.post('/users', UserController.get);
app.post('/userAdd', UserController.create);
app.put('/userUpdate', UserController.update);
app.delete('/userDelete', UserController.delete);

module.exports=app;