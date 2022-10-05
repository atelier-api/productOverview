require("dotenv").config();

const db = require(`../models/${process.env.DATABASE}.js`);


exports.getProducts = (req, res) => {
  // get array of products with general info
  if (req.params.page === undefined) {
    req.params.page = "1";
  }
  if (req.params.count === undefined) {
    req.params.count = "5";
  }
  let page = parseInt(req.params.page);
  let count = parseInt(req.params.count);
  if (isNaN(page) || isNaN(count)) {
    res.status(400).send('invalid params');
    return;
  }
  db.getProducts(req.params.page, req.params.count)
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

exports.getCart = (req, res) => {
  // get all cart skus and quantities
  db.getCart()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

exports.postCart = (req, res) => {
  // increment count in cart for sku_id
  if (req.body.sku_id === undefined) {
    res.status(400).send("missing sku_id");
    return;
  }
  let skuId = parseInt(req.body.sku_id);
  if (isNaN(skuId)) {
    res.status(400).send("invalid sku_id");
    return;
  }
  db.postCart(req.body.sku_id)
    .then(() => {
      res.status(201).send('CREATED');
    })
    .catch(err => {
      res.status(500).send(err);
    });
};