// @flow weak

'use strict';

const express   = require('express');
const path      = require('path');

const app       = express();
const DOCS_PATH = '../../docs/';

app.use(express.static(path.join(__dirname, DOCS_PATH)));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, DOCS_PATH, 'index.html')));
/* eslint-disable no-console */
app.set('port', 8083);
app.set('ipAdress', 'localhost');

// $FlowIgnore
// launch server:
app.listen(
  app.get('port'),
  app.get('ipAdress'),
  () => console.log(`Production server (minimalist) 🏃 (running) on ${app.get('ipAdress')}:${app.get('port')}`)
);
/* eslint-enable no-console */
