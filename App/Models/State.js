'use strict';
const RAR = require('../../common/Foundation');

const Schema = RAR.Mongoose.Schema;
RAR.StateSchema = {
    name: {
        type: String,
        required: true,
        unique: true,
      },
      status: {
        type: String,
        required: true,
        enum: ['active', 'inactive'], // You can define your own set of valid statuses
        default: 'active', // Default value for status
    },
};
const StateSchema = new Schema(RAR.StateSchema, { collection: 'State' });
RAR.Mongoose.model('State', StateSchema);