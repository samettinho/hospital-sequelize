import express from 'express';
import RoleController from '../Controller/RoleController';
import AuthrisationEnum from '../../src/enum/AuthorisationEnum';
import permChecker from '../../Helpers/AuthorisationHelper';

const app = express();
app.get('/:id', permChecker(AuthrisationEnum.ROLE_LIST), RoleController.get);
app.delete('/:id', permChecker(AuthrisationEnum.ROLE_DELETE), RoleController.delete);
app.get('', permChecker(AuthrisationEnum.ROLE_LIST), RoleController.getAll);
app.post('', permChecker(AuthrisationEnum.ROLE_ADD), RoleController.create);
app.put('', permChecker(AuthrisationEnum.ROLE_UPDATE), RoleController.update);

/*
 * app.post('/roleAdd', RoleController.create);
 * app.post('', RoleController.get);
 * app.put('/roleUpdate', RoleController.update);
 * app.delete('/roleDelete', RoleController.delete);
 */

module.exports = app;
