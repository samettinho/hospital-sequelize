import express from 'express';
import RoleController from '../Controller/RoleController';

const app = express();
app.get('/roles/:id', RoleController.get);
app.delete('/roles/:id', RoleController.delete);
app.get('/roles', RoleController.getAll);
app.post('/roles', RoleController.create);
app.put('/roles', RoleController.update);

/*
 * app.post('/roleAdd', RoleController.create);
 * app.post('/roles', RoleController.get);
 * app.put('/roleUpdate', RoleController.update);
 * app.delete('/roleDelete', RoleController.delete);
 */

module.exports = app;