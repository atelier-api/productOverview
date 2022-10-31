const mongoose = require('mongoose');
require("dotenv").config();

const ip = process.env.DBIP || "127.0.0.1";
const port = process.env.DBPORT || "27017";
const userName = process.env.DBUN || 'username';
const password = process.env.DBPWD || 'somepassword';
const database = process.env.DBDB || 'SDC';

mongoose.connect(`mongodb://${userName}:${password}@${ip}:${port}/${database}`)
  .then(result => {
    console.log('connect success');
  })
  .catch(err => {
    console.log('connect failed with err');
  });

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
