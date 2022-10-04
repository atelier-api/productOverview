require("dotenv").config();

const db = require(`../models/${process.env.DATABASE}.js`);


exports.getProducts = (req, res) => {
  // get array of products with general info
};

exports.getProduct = (req, res) => {
  // get one product info according to id, with no styles
  db.getProduct(req.params.product_id);
};

exports.getProductStyle = (req, res) => {
  // get one product styles with product_id
};

exports.getRelated = (req, res) => {
  // get array of related products id
};

exports.getCart = (req, res) => {
  //
};

exports.postCart = (req, res) => {
  // add sku and count to cart
};