import express from 'express';
import RoleController from '../Controller/RoleController';

const app = express();
app.get('/:id', RoleController.get);
app.delete('/:id', RoleController.delete);
app.get('', RoleController.getAll);
app.post('', RoleController.create);
app.put('', RoleController.update);

/*
 * app.post('/roleAdd', RoleController.create);
 * app.post('', RoleController.get);
 * app.put('/roleUpdate', RoleController.update);
 * app.delete('/roleDelete', RoleController.delete);
 */

module.exports = app;