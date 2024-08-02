'use strict';
const { object } = require('joi');
const RAR = require('../../../common/Foundation');
module.exports = {

    getSlidesList: async function () {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('Slides').find().lean()
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Getting Slides list succesfully"
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get All Slides List!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while Slides list"

                };
                resolve(obj);

            }
        })
    },

    getSlidesByName: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('Slides').find({ "name": data }).lean();
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Get single Slides successfully"
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get All Slides Name List!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while get the single Slides record"

                };
                resolve(obj);

            }
        })
    },
    addSlides: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let addSlides = await RAR.Mongoose.model('Slides').create(data);
                let result = {
                    statusCode: 200,
                    result: null,
                    message: "New Slides added sucessfully",
                }
                resolve(result);
            } catch (error) {
                console.log(" Error In Add New Slides!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while add new Slides",
                    result: null
                };
                resolve(obj);

            }

        })
    },
    editSlides: async function (id, data) {
        return new Promise(async function (resolve, reject) {
            try {

                let editSlides = await RAR.Mongoose.model('Slides').findByIdAndUpdate({ '_id': id }, data);
                if (editSlides) {
                    let result = {
                        statusCode: 200,
                        result: null,
                        message: 'Slides upadated successfully',
                    }

                    resolve(result);
                } else {
                    let result = {
                        statusCode: 400,
                        message: "Error while update the Slides",
                    }

                    resolve(result);
                }


            } catch (error) {
                console.log("Error In Update Slides!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: 'Error while update the Slides',
                    result: null
                };
                resolve(obj);

            }







        })
    },
    getSingleSlides: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('Slides').findById(data);
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Single Slides "
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get Single Slides !! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error While Single Slides "

                };
                resolve(obj);

            }
        })
    },

    deleteSlides: async function () {
        return new Promise(async function (resolve, reject) {

            try {

                let deleteSlides = await RAR.Mongoose.model('Slides').deleteOne();

                let result = {
                    statusCode: 200,
                    result: null,
                    message: "Slides Deleted",
                }
                resolve(result);

            } catch (error) {
                console.log("Error while Delete Slides " + error.message);
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