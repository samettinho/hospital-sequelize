import express from 'express';
import RoleController from '../Controller/RoleController';  

const app=express();

app.post('/roleAdd', RoleController.create);
app.post('/roles', RoleController.get);
app.put('/roleUpdate', RoleController.update);
app.delete('/roleDelete', RoleController.delete);

module.exports=app;