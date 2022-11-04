const express = require('express');
const controller = require('./controllers/controllers');
// const authentication = require('./middleware/authentication');
require("dotenv").config();

const loaderioString = process.env.LOADERSTRING;

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

app.get(`/${loaderioString}`, (req, res) => {
  res.send(loaderioString);
})

module.exports = app;