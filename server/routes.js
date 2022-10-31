const express = require('express');
const controller = require('./controllers/controllers');
// const authentication = require('./middleware/authentication');

const app = express();

app.use(express.json());

app.get('/products', (req, res) => {
  controller.getProducts(req, res);
});

app.get('/products/:product_id', (req, res) => {
  controller.getProduct(req, res);
});

app.get('/products/:product_id/styles', (req, res) => {
  controller.getProductStyle(req, res);
});

app.get('/products/:product_id/related', (req, res) => {
  controller.getRelated(req, res);
});

app.get('/loaderio-6bbc01a82c29c9ab1c28a38fadda9da0', (req, res) => {
  res.send('loaderio-6bbc01a82c29c9ab1c28a38fadda9da0');
})

module.exports = app;