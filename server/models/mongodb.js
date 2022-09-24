import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [{feature: String, value: String}],
  styles: [{
    style_id: Number,
    name: String,
    original_price: String,
    sale_price: String,
    default?: Boolean,
    photos: [{thumbnail_url: String, url: String}],
    skus: Object
  }]
});

const product = mongoose.model('product', productSchema);
