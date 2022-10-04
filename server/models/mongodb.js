const { Product, Style } = require('../../db/mongodb.js');

exports.getProduct = (id) => {
  return Product.findOne({id}).select('-_id id name slogan description category default_price features');
};

exports.getStyle = (id) => {

};

exports.getRelated = (id) => {
  return Product.findOne({id}).select('-_id related')
    .then(product => {
      let result = [];
      let { related } = JSON.parse(JSON.stringify(product));
      related.forEach(item => {
        result.push(item.related_product_id);
      })
      return result;
    });
}