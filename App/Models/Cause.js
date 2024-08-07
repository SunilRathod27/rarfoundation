'use strict';
const RAR = require('../../common/Foundation');

const Schema = RAR.Mongoose.Schema;
RAR.CauseSchema = {
    title: { type: String , default: ''},
    link: { type: String , default: ''},
    image: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now }
};
const CauseSchema = new Schema(RAR.CauseSchema, { collection: 'Causes' });
RAR.Mongoose.model('Causes', CauseSchema);