import { URL as _URL } from 'url';
import * as path from 'path';
const isDevelopment = require('electron-is-dev');

//  localhost:3000 for React
const devBasePath = 'http://localhost:3000/';
//  Has to match the file structure in your /build directory
const prodBasePath = path.join(__dirname, '..', '..', '..', 'index.html');

export const constructAppPath = (route: string = ''): string => {
  const basePath = isDevelopment ? devBasePath : prodBasePath;

  const appPath = new _URL(basePath);

  //  Add hash route to base url if provided
  if (route) appPath.hash = route.startsWith('/') ? route : `/${route}`;

  //  Return the constructed url
  return appPath.href;
};

module.exports = {
  constructAppPath
};
