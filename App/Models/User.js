'use strict';
const RAR = require('../../common/Foundation');
const Schema = RAR.Mongoose.Schema;
RAR.User = {
    serialNumber: {
        type: String,
        unique: true,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      surname: {
        type: String,
        required: true,
      },
      birthday: {
        type: Date,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      state: {
        type: RAR.Mongoose.Schema.Types.ObjectId,
        ref: 'State',
        required: true,
      },
      district: {
        type: RAR.Mongoose.Schema.Types.ObjectId,
        ref: 'District',
        required: true,
      },
      city: {
        type: RAR.Mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required: true,
      },
      whatsapp: {
        type: String,
        required: true,
      },
      idProof: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: true,
      },
      bloodGroup: {
        type: RAR.Mongoose.Schema.Types.ObjectId,
        ref: 'BloodGroup',
        required: true,
      },
      designation: {
        type: String,
        required: true,
      },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
};
const User = new Schema(RAR.User, { collection: 'User' });
RAR.Mongoose.model('User', User);