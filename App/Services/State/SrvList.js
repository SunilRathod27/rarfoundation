'use strict';
const { object } = require('joi');
const RAR = require('../../../common/Foundation');
module.exports = {

    getStateList: async function () {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('State').find().lean()
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Getting State list succesfully"
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get All State List!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while State list"

                };
                resolve(obj);

            }
        })
    },

    getStateByName: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('State').find({ "name": data }).lean();
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Get single State successfully"
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get All State Name List!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while get the single State record"

                };
                resolve(obj);

            }
        })
    },
    addState: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let addState = await RAR.Mongoose.model('State').create(data);
                let result = {
                    statusCode: 200,
                    result: null,
                    message: "New State added sucessfully",
                }
                resolve(result);
            } catch (error) {
                console.log(" Error In Add New State!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while add new State",
                    result: null
                };
                resolve(obj);

            }

        })
    },
    editState: async function (id, data) {
        return new Promise(async function (resolve, reject) {
            try {

                let editState = await RAR.Mongoose.model('State').findByIdAndUpdate({ '_id': id }, data);
                if (editState) {
                    let result = {
                        statusCode: 200,
                        result: null,
                        message: 'State upadated successfully',
                    }

                    resolve(result);
                } else {
                    let result = {
                        statusCode: 400,
                        message: "Error while update the State",
                    }

                    resolve(result);
                }


            } catch (error) {
                console.log("Error In Update State!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: 'Error while update the State',
                    result: null
                };
                resolve(obj);

            }







        })
    },
    getSingleState: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('State').findById(data);
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Single State "
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get Single State !! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error While Single State "

                };
                resolve(obj);

            }
        })
    },

    deleteState: async function () {
        return new Promise(async function (resolve, reject) {

            try {

                let deleteState = await RAR.Mongoose.model('State').deleteOne();

                let result = {
                    statusCode: 200,
                    result: null,
                    message: "State Deleted",
                }
                resolve(result);

            } catch (error) {
                console.log("Error while Delete State " + error.message);
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