'use strict';
const RAR = require('../../common/Foundation');

const Schema = RAR.Mongoose.Schema;
RAR.BloodGroupSchema = {
    name: {
        type: String,
        required: true,
        unique: true,
      },
};
const BloodGroupSchema = new Schema(RAR.BloodGroupSchema, { collection: 'BloodGroup' });
RAR.Mongoose.model('BloodGroup', BloodGroupSchema);