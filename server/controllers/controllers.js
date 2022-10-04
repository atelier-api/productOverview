require("dotenv").config();

const db = require(`../models/${process.env.DATABASE}.js`);


exports.getProducts = (req, res) => {
  // get array of products with general info
};

exports.getProduct = (req, res) => {
  // get one product info according to id, with no styles
  db.getProduct(req.params.product_id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.getProductStyle = (req, res) => {
  // get one product styles with product_id
};

exports.getRelated = (req, res) => {
  // get array of related products id
  db.getRelated(req.params.product_id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.getCart = (req, res) => {
  //
};

exports.postCart = (req, res) => {
  // add sku and count to cart
};