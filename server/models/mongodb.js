const { Product, Style } = require('../../db/mongodb.js');

exports.getProduct = (id) => {
  Product.findOne({id: id}).select('-_id id name slogan description category default_price features')
    .then(product => {
      console.log(product);
    })
    .catch(err => {
      console.log(err);
    })
};

exports.getStyle = (id) => {

}