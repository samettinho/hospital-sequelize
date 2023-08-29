import express from 'express';
import AuthorisationController from '../Controller/AuthorisationController';
import AuthrisationEnum from '../../src/enum/AuthorisationEnum';
import permChecker from '../../Helpers/AuthorisationHelper';

const app = express();

app.get('/:id', permChecker(AuthrisationEnum.AUTHORISATION_LIST), AuthorisationController.get);
app.delete('/:id', permChecker(AuthrisationEnum.AUTHORISATION_DELETE), AuthorisationController.delete);
app.get('', permChecker(AuthrisationEnum.AUTHORISATION_LIST), AuthorisationController.getAll);
app.post('', permChecker(AuthrisationEnum.AUTHORISATION_ADD), AuthorisationController.create);
app.put('', permChecker(AuthrisationEnum.AUTHORISATION_UPDATE), AuthorisationController.update);

module.exports = app;