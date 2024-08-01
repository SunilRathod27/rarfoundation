'use strict';
const RAR = require('../../common/Foundation');

const Schema = RAR.Mongoose.Schema;
RAR.ContentSchema = {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now }
};
const ContentSchema = new Schema(RAR.ContentSchema, { collection: 'Content' });
RAR.Mongoose.model('Content', ContentSchema);