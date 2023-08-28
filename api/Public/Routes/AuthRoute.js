import express from 'express';

import AuthController from '../Controllers/AuthController';

const app = express();

app.post('/register', AuthController.register);
app.post('/login', AuthController.login);
app.get('/logout', AuthController.logout);

module.exports = app;
