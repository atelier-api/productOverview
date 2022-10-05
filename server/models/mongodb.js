const { Product, Style, Cart } = require('../../db/mongodb.js');

exports.getProducts = (page, count) => {

}

exports.getProduct = (id) => {
  return Product.findOne({id}).select('-_id id name slogan description category default_price features');
};

exports.getStyle = (id) => {
  return Product.findOne({id}).select('-_id id styles')
    .then(product => {
      if (product === null) {
        return null;
      }
      let { id, styles } = JSON.parse(JSON.stringify(product));
      let result = {};
      result.product_id = id;
      result.results = styles.sort((a, b) => a.id - b.id).map(style => {
        let { id, name, sale_price, original_price, default_style, photos, skus } = style;
        let newSku = {};
        skus.sort((a, b) => a.id - b.id).forEach(sku => {
          let { id, size, quantity } = sku;
          newSku[id] = { size, quantity };
        });
        let transform = {
          "style_id": id,
          name,
          "original_price": original_price.toString(),
          "sale_price": sale_price === 'null' ? '0' : sale_price.toString(),
          "default?": default_style ? true : false,
          photos,
          "skus": newSku
        }
        return transform;
      });
      return result;
    });
};

exports.getRelated = (id) => {
  return Product.findOne({id}).select('-_id related')
    .then(product => {
      if (product === null) {
        return null;
      }
      let result = [];
      let { related } = JSON.parse(JSON.stringify(product));
      related.forEach(item => {
        result.push(item.related_product_id);
      })
      return result;
    });
}

exports.getCart = () => {
  return Cart.find().select('-_id sku_id count');
}

exports.postCart = (sku_id) => {
  return Cart.findOne({sku_id})
          .then(result => {
            if (result === null) {
              return Cart.create({ sku_id, "count": 1});
            } else {
              if (result.count === undefined) {
                result.count = 1;
              }
              result.count += 1;
              return result.save();
            }
          });

}