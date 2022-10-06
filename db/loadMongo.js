const { MongoClient } = require('mongodb');

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */
const createIndexs = async () => {
  const client = await MongoClient.connect(
    'mongodb://localhost/27017',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  const products = client.db('SDC').collection('products');
  const styles = client.db('SDC').collection('styles');
  const skus = client.db('SDC').collection('skus');
  const photos = client.db('SDC').collection('photos');
  const features = client.db('SDC').collection('features');
  skus.createIndex({ 'styleId': 1});
  photos.createIndex({ 'styleId': 1});
  features.createIndex({ 'product_id': 1});
  styles.createIndex({ 'productId': 1});
  products.createIndex({ 'id': 1}, {unique: true});
}


const loadStyles = async () => {
  console.log('start loading styles');
  const agg = [
    {
      '$lookup': {
        'from': 'features',
        'localField': 'id',
        'foreignField': 'product_id',
        'as': 'features'
      }
    }, {
      '$lookup': {
        'from': 'styles',
        'localField': 'id',
        'foreignField': 'productId',
        'as': 'styles'
      }
    }, {
      '$unset': [
        'features._id', 'features.id', 'features.product_id', 'styles._id', 'styles.productId'
      ]
    }, {
      '$out': 'products'
    }
  ];
  const client = await MongoClient.connect(
    'mongodb://localhost/27017',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  const coll = client.db('SDC').collection('products');
  const cursor = coll.aggregate(agg);
  const result = await cursor.toArray();
  await client.close();
  console.log('complete loading styles');
};

const loadProducts = async () => {
  console.log('start loading products');
  const agg = [
    {
      '$lookup': {
        'from': 'photos',
        'localField': 'id',
        'foreignField': 'styleId',
        'as': 'photos'
      }
    }, {
      '$lookup': {
        'from': 'skus',
        'localField': 'id',
        'foreignField': 'styleId',
        'as': 'skus'
      }
    }, {
      '$unset': [
        'photos._id', 'photos.id', 'photos.styleId', 'skus._id', 'skus.styleId'
      ]
    }, {
      '$out': 'styles'
    }
  ];
  const client = await MongoClient.connect(
    'mongodb://localhost/27017',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  const coll = client.db('SDC').collection('styles');
  const cursor = coll.aggregate(agg);
  const result = await cursor.toArray();
  await client.close();
  console.log('complete loading products');
}

createIndexs()
  .then(async () => {
    return await loadStyles();
  })
  .then(async () => {
    return await loadProducts();
  });

