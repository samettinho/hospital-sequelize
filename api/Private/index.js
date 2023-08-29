import express from 'express';
import fs from 'fs';
import authenticate from '../Helpers/AuthenticateHelpers';
const app = express();

app.use(authenticate);

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