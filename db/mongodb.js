const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/SDC');

const finalProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [{feature: String, value: String}],
  styles: [{
    style_id: Number,
    name: String,
    original_price: String,
    sale_price: String,
    default: Boolean,
    photos: [{thumbnail_url: String, url: String}],
    skus: [{size: String, quantity: Number}]
  }]
});

const FinalProduct = mongoose.model('finalProduct', finalProductSchema);

const productSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String
});

const Product = mongoose.model('product', productSchema);

const styleSchema = new mongoose.Schema({
  _id: Number,
  productId: Number,
  name: String,
  sale_price: String,
  original_price: String,
  default_style: Boolean
})

const Style = mongoose.model('style', styleSchema);

const skuSchema = new mongoose.Schema({
  _id: Number,
  styleId: Number,
  size: String,
  quantity: Number
})

const Sku = mongoose.model('sku', skuSchema);

const featureSchema = new mongoose.Schema({
  _id: Number,
  product_id: Number,
  feature: String,
  value: String
});

const Feature = mongoose.model('feature', featureSchema);

const photoSchema = new mongoose.Schema({
  _id: Number,
  styleId: Number,
  url: String,
  thumbnail_url: String
});

const Photo = mongoose.model('photo', photoSchema);

module.exports.FinalProduct = FinalProduct;
module.exports.Product = Product;
module.exports.Style = Style;
module.exports.Sku = Sku;
module.exports.Feature = Feature;
module.exports.Photo = Photo;