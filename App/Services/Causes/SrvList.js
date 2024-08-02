'use strict';
const { object } = require('joi');
const RAR = require('../../../common/Foundation');
module.exports = {

    getCausesList: async function () {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('Causes').find().lean()
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Getting Causes list succesfully"
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get All Causes List!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while Causes list"

                };
                resolve(obj);

            }
        })
    },

    getCausesByName: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('Causes').find({ "name": data }).lean();
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Get single Causes successfully"
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get All Causes Name List!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while get the single Causes record"

                };
                resolve(obj);

            }
        })
    },
    addCauses: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let addCauses = await RAR.Mongoose.model('Causes').create(data);
                let result = {
                    statusCode: 200,
                    result: null,
                    message: "New Causes added sucessfully",
                }
                resolve(result);
            } catch (error) {
                console.log(" Error In Add New Causes!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while add new Causes",
                    result: null
                };
                resolve(obj);

            }

        })
    },
    editCauses: async function (id, data) {
        return new Promise(async function (resolve, reject) {
            try {

                let editCauses = await RAR.Mongoose.model('Causes').findByIdAndUpdate({ '_id': id }, data);
                if (editCauses) {
                    let result = {
                        statusCode: 200,
                        result: null,
                        message: 'Causes upadated successfully',
                    }

                    resolve(result);
                } else {
                    let result = {
                        statusCode: 400,
                        message: "Error while update the Causes",
                    }

                    resolve(result);
                }


            } catch (error) {
                console.log("Error In Update Causes!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: 'Error while update the Causes',
                    result: null
                };
                resolve(obj);

            }







        })
    },
    getSingleCauses: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('Causes').findById(data);
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Single Causes "
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get Single Causes !! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error While Single Causes "

                };
                resolve(obj);

            }
        })
    },

    deleteCauses: async function () {
        return new Promise(async function (resolve, reject) {

            try {

                let deleteCauses = await RAR.Mongoose.model('Causes').deleteOne();

                let result = {
                    statusCode: 200,
                    result: null,
                    message: "Causes Deleted",
                }
                resolve(result);

            } catch (error) {
                console.log("Error while Delete Causes " + error.message);
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