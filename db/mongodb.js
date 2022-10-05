const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/SDC');

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [Object],
  styles: [Object]
});

const Product = mongoose.model('product', productSchema);

const styleSchema = new mongoose.Schema({
  id: Number,
  productId: Number,
  name: String,
  sale_price: String,
  original_price: String,
  default_style: Boolean,
  skus: [Object],
  photos: [Object]
})

const Style = mongoose.model('style', styleSchema);

const cartSchema = new mongoose.Schema({
  sku_id: Number,
  count: Number
})

const Cart = mongoose.model('cart', cartSchema);

// const skuSchema = new mongoose.Schema({
//   id: String,
//   styleId: Number,
//   size: String,
//   quantity: Number
// })

// const Sku = mongoose.model('sku', skuSchema);

// const featureSchema = new mongoose.Schema({
//   id: Number,
//   product_id: Number,
//   feature: String,
//   value: String
// });

// const Feature = mongoose.model('feature', featureSchema);

// const photoSchema = new mongoose.Schema({
//   id: Number,
//   styleId: Number,
//   url: String,
//   thumbnail_url: String
// });

// const Photo = mongoose.model('photo', photoSchema);

module.exports.Product = Product;
module.exports.Style = Style;
module.exports.Cart = Cart;
// module.exports.Sku = Sku;
// module.exports.Feature = Feature;
// module.exports.Photo = Photo;