const csv = require('csv-parser');
const fs = require('fs');
const { Product, Style, Sku, Feature, Photo } = require('./mongodb.js');


let loadStyle = async () => {
  console.log("started");
  for await (const style of Style.find()) {
    // console.log('gets here');
    // console.log(style.productId);
    let product = await Product.findById(style.productId);
    console.log(`name: ${product.name}, id: ${product._id}`);
    console.log(`style name: ${style.name}, productId: ${style.productId}`);
  }
}

loadStyle();
