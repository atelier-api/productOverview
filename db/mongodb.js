const mongoose = require('mongoose');
require("dotenv").config();


mongoose.connect(`mongodb://${process.env.DBIP}:${process.env.DBPORT}/SDC`);

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

module.exports.Product = Product;
