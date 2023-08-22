import express from 'express';
import UserController from '../Controller/UserController';

const app = express();

app.get('/', UserController.getDoctor);

module.exports = app;