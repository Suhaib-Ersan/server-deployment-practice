'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./handlers/404.js')
const errorHandler = require('./handlers/500.js')

app.get('/', (req, res) => {
  res.status(200).send('working fine');
});

app.get('/data', (req, res) => {
  let data = {
    name: 'raz',
    age: 210,
    time: new Date().toString(),
  }
  res.status(200).send(data);
})

app.get('/badAccess', (req, res, next) => {
  next('bad access point');
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => console.log(`server started on ${port}`))
}

module.exports = {
  start,
  app
}