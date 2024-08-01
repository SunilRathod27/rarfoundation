'use strict';
const { object } = require('joi');
const RAR = require('../../../common/Foundation');
module.exports = {

    getBloodGroupList: async function () {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('BloodGroup').find().lean()
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Getting BloodGroup list succesfully"
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get All BloodGroup List!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while BloodGroup list"

                };
                resolve(obj);

            }
        })
    },

    getBloodGroupByName: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('BloodGroup').find({ "name": data }).lean();
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Get single BloodGroup successfully"
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get All BloodGroup Name List!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while get the single BloodGroup record"

                };
                resolve(obj);

            }
        })
    },
    addBloodGroup: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let addBloodGroup = await RAR.Mongoose.model('BloodGroup').create(data);
                let result = {
                    statusCode: 200,
                    result: null,
                    message: "New BloodGroup added sucessfully",
                }
                resolve(result);
            } catch (error) {
                console.log(" Error In Add New BloodGroup!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while add new BloodGroup",
                    result: null
                };
                resolve(obj);

            }

        })
    },
    editBloodGroup: async function (id, data) {
        return new Promise(async function (resolve, reject) {
            try {

                let editBloodGroup = await RAR.Mongoose.model('BloodGroup').findByIdAndUpdate({ '_id': id }, data);
                if (editBloodGroup) {
                    let result = {
                        statusCode: 200,
                        result: null,
                        message: 'BloodGroup upadated successfully',
                    }

                    resolve(result);
                } else {
                    let result = {
                        statusCode: 400,
                        message: "Error while update the BloodGroup",
                    }

                    resolve(result);
                }


            } catch (error) {
                console.log("Error In Update BloodGroup!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: 'Error while update the BloodGroup',
                    result: null
                };
                resolve(obj);

            }







        })
    },
    getSingleBloodGroup: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('BloodGroup').findById(data);
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Single BloodGroup "
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get Single BloodGroup !! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error While Single BloodGroup "

                };
                resolve(obj);

            }
        })
    },

    deleteBloodGroup: async function () {
        return new Promise(async function (resolve, reject) {

            try {

                let deleteBloodGroup = await RAR.Mongoose.model('BloodGroup').deleteOne();

                let result = {
                    statusCode: 200,
                    result: null,
                    message: "BloodGroup Deleted",
                }
                resolve(result);

            } catch (error) {
                console.log("Error while Delete BloodGroup " + error.message);
                let obj = {
                    statusCode: 400,
                    message: 111,
                    result: null,
                };
                resolve(obj);

            }

        })
    },



}