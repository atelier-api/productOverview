require("dotenv").config();

const db = require(`../models/${process.env.DATABASE}.js`);


exports.getProducts = (req, res) => {
  // get array of products with general info
  if (req.query.page === undefined) {
    req.query.page = "1";
  }
  if (req.query.count === undefined) {
    req.query.count = "5";
  }
  let page = parseInt(req.query.page);
  let count = parseInt(req.query.count);
  if (isNaN(page) || isNaN(count) || page < 1 || count < 1) {
    res.status(400).send('invalid params');
    return;
  }
  db.getProducts(page, count)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

exports.getProduct = (req, res) => {
  // get one product info according to id, with no styles
  let productId = parseInt(req.params.product_id);
  if (isNaN(productId)) {
    res.status(400).send("invalid product_id");
    return;
  }
  db.getProduct(productId)
    .then(result => {
      if (result === null) {
        res.status(404).send("can't find product with product_id");
        return;
      }
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

exports.getProductStyle = (req, res) => {
  // get one product styles with product_id
  let productId = parseInt(req.params.product_id);
  if (isNaN(productId)) {
    res.status(400).send("invalid product_id");
    return;
  }
  db.getStyle(productId)
    .then(result => {
      if (result === null) {
        res.status(404).send("can't find style with product_id");
        return;
      }
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};

exports.getRelated = (req, res) => {
  // get array of related products id
  let productId = parseInt(req.params.product_id);
  if (isNaN(productId)) {
    res.status(400).send("invalid product_id");
    return;
  }
  db.getRelated(productId)
    .then(result => {
      if (result === null) {
        res.status(404).send("can't find related with product_id");
        return;
      }
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
