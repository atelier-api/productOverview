const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/SDC');

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [{ type: mongoose.Schema.Types.ObjectId, ref: 'features'}]
  styles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'styles'}]
});

const Product = mongoose.model('product', productSchema);

const styleSchema = new mongoose.Schema({
  id: Number,
  productId: Number,
  name: String,
  sale_price: String,
  original_price: String,
  default_style: Boolean,
  photos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'photos'}],
  skus: [{ type: mongoose.Schema.Types.ObjectId, ref: 'skus'}]
})

const Style = mongoose.model('style', styleSchema);

const skuSchema = new mongoose.Schema({
  id: Number,
  styleId: Number,
  size: String,
  quantity: Number
})

const Sku = mongoose.model('sku', skuSchema);

const featureSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  feature: String,
  value: String
});

const Feature = mongoose.model('feature', featureSchema);

const photoSchema = new mongoose.Schema({
  id: Number,
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