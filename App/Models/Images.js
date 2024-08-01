'use strict';
const RAR = require('../../common/Foundation');

const Schema = RAR.Mongoose.Schema;
RAR.ImageSchema = {
    filename: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: Number, required: true },
    date: { type: Date, default: Date.now },
};
const ImageSchema = new Schema(RAR.ImageSchema, { collection: 'Images' });
RAR.Mongoose.model('Images', ImageSchema);