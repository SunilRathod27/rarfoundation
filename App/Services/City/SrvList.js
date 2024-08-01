'use strict';
const { object } = require('joi');
const RAR = require('../../../common/Foundation');
module.exports = {

    getCityList: async function () {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('City').find().lean()
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Getting City list succesfully"
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get All City List!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while City list"

                };
                resolve(obj);

            }
        })
    },

    getCityByName: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('City').find({ "name": data }).lean();
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Get single City successfully"
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get All City Name List!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while get the single City record"

                };
                resolve(obj);

            }
        })
    },
    addCity: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let addCity = await RAR.Mongoose.model('City').create(data);
                let result = {
                    statusCode: 200,
                    result: null,
                    message: "New City added sucessfully",
                }
                resolve(result);
            } catch (error) {
                console.log(" Error In Add New City!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while add new City",
                    result: null
                };
                resolve(obj);

            }

        })
    },
    editCity: async function (id, data) {
        return new Promise(async function (resolve, reject) {
            try {

                let editCity = await RAR.Mongoose.model('City').findByIdAndUpdate({ '_id': id }, data);
                if (editCity) {
                    let result = {
                        statusCode: 200,
                        result: null,
                        message: 'City upadated successfully',
                    }

                    resolve(result);
                } else {
                    let result = {
                        statusCode: 400,
                        message: "Error while update the City",
                    }

                    resolve(result);
                }


            } catch (error) {
                console.log("Error In Update City!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: 'Error while update the City',
                    result: null
                };
                resolve(obj);

            }







        })
    },
    getSingleCity: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('City').findById(data);
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Single City "
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get Single City !! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error While Single City "

                };
                resolve(obj);

            }
        })
    },

    deleteCity: async function () {
        return new Promise(async function (resolve, reject) {

            try {

                let deleteCity = await RAR.Mongoose.model('City').deleteOne();

                let result = {
                    statusCode: 200,
                    result: null,
                    message: "City Deleted",
                }
                resolve(result);

            } catch (error) {
                console.log("Error while Delete City " + error.message);
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