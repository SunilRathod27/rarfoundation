'use strict';
const RAR = require('../../common/Foundation');

const Schema = RAR.Mongoose.Schema;
RAR.Citychema = {
  name: {
    type: String,
    required: true,
  },
  district: {
    type: RAR.Mongoose.Schema.Types.ObjectId,
    ref: 'District',
    required: true,
  },
};
const Citychema = new Schema(RAR.Citychema, { collection: 'City' });
RAR.Mongoose.model('City', Citychema);