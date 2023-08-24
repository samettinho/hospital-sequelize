import express from 'express';
import fs from 'fs';
import path from 'path';
const app = express();

const routes_directory = path.resolve(__dirname);
fs.readdirSync(routes_directory)
  .filter(file => (
    file !== 'index.js' &&
    file.slice(-3) === '.js'
  ))
  .forEach(routeFile => {
    try {
      const routeName = routeFile.slice(0, -9);
      app.use(`/${routeName.toLowerCase()}`, require(routes_directory + '\\' + routeFile));
    }
    catch (error) {
      console.log(`Encountered Error initializing routes from ${routeFile}`);
      console.log(error);
    }
  });

export default app;