'use strict';
const RAR = require('../../common/Foundation');

const Schema = RAR.Mongoose.Schema;
RAR.SlidesSchema = {
  image: { type: String, required: true },
  title: { type: String, default: '' },
  subtitle: { type: String,default: '' },
  content: { type: String, default: '' },
};
const SlidesSchema = new Schema(RAR.SlidesSchema, { collection: 'Slides' });
RAR.Mongoose.model('Slides', SlidesSchema);