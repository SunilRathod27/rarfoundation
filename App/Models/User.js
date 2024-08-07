'use strict';
const RAR = require('../../common/Foundation');
const Schema = RAR.Mongoose.Schema;
RAR.User = {
    registrationId: {
      type: String,
      unique: true,
      default: '',
    },
    activationId: {
      type: String,
      unique: true,
     default:''
  },
      name: {
        type: String,
        required: true,
      },
      fathername: {
        type: String,
        required: true,
      },
      surname: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        unique: true, 
        required: true, 
        trim: true, 
        lowercase: true, 
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please fill a valid email address.']
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
      whatsapp: {
        type: String,
        required: true,
      },
      idProof: {
        type: Buffer,
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
      status: {
        type: String,
        enum: ['active', 'inactive'], 
        default: 'inactive',
        required: true,
      },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
};
const User = new Schema(RAR.User, { collection: 'User' });
RAR.Mongoose.model('User', User);