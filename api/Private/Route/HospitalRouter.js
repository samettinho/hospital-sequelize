import express from 'express';
import HospitalController from '../Controller/HospitalController';
import AuthrisationEnum from '../../src/enum/AuthorisationEnum';
import permChecker from '../../Helpers/AuthorisationHelper';

const app = express();

app.get('/:id', permChecker(AuthrisationEnum.HOSPITAL_LIST), HospitalController.get);
app.delete('/:id', permChecker(AuthrisationEnum.HOSPITAL_DELETE), HospitalController.delete);
app.get('', permChecker(AuthrisationEnum.HOSPITAL_LIST), HospitalController.getAll);
app.post('', permChecker(AuthrisationEnum.HOSPITAL_ADD), HospitalController.create);
app.put('', permChecker(AuthrisationEnum.HOSPITAL_UPDATE), HospitalController.update);

module.exports = app;
