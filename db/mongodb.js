const mongoose = require('mongoose');
require("dotenv").config();

const ip = process.env.DBIP || "127.0.0.1";
const port = process.env.DBPORT || "27017";

mongoose.connect(`mongodb://${ip}:${port}/SDC`);

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
