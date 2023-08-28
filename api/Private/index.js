import express from 'express';
import fs from 'fs';
import language from '../src/language';

const app = express();

app.use((req, res, next) => {
  if (req.session.isLogged !== true) {
    const lang = req.headers.lang;
    return res.json({
      type: false,
      message: (language[lang].error.login)
    });
  }
  next();
});

fs.readdir('./api/Private/Route', (err, files) => {
  if (err) throw err;

  for (let file of files) {
    const routeName = file.slice(0, file.length - 9);
    const routeNameLower = routeName.toLowerCase();
    let routeFile = require(`./Route/${routeName}Router`);
    app.use(`/${routeNameLower}`, routeFile);
  }
});

module.exports = app;