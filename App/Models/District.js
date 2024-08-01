'use strict';
const RAR = require('../../common/Foundation');

const Schema = RAR.Mongoose.Schema;
RAR.Districtchema = {
  name: {
    type: String,
    required: true,
  },
  state: {
    type: RAR.Mongoose.Schema.Types.ObjectId,
    ref: 'State',
    required: true,
  },
};
const Districtchema = new Schema(RAR.Districtchema, { collection: 'District' });
RAR.Mongoose.model('District', Districtchema);