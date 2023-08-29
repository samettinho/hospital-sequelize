import express from 'express';
import UserController from '../Controller/UserController';
import AuthrisationEnum from '../../src/enum/AuthorisationEnum';
import permChecker from '../../Helpers/AuthorisationHelper';

const app = express();

app.get('/', permChecker(AuthrisationEnum.DOCTOR_LIST), UserController.getDoctor);

module.exports = app;