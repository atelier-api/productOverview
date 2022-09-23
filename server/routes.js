const express = require('express');

const controller = require('./controllers/controllers');
const authentication = require('./middleware/authentication');

const app = express();

app.use(express.json());

app.get('/products', (req, res) => {
  res.status(200).send('array of related products id');
});

module.exports = app;