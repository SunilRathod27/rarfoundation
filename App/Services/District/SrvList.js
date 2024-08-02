'use strict';
const { object } = require('joi');
const RAR = require('../../../common/Foundation');
module.exports = {

   
    getDistrictList : async function (stateName) {
    try {
        const districts = await RAR.Mongoose.model('District').aggregate([
            {
                $lookup: {
                    from: 'State', // The name of the State collection
                    localField: 'state',
                    foreignField: '_id',
                    as: 'stateDetails'
                }
            },
            {
                $unwind: '$stateDetails'
            },
            {
                $match: {
                    'stateDetails.name': stateName
                }
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    // Add other fields you want to include in the result
                }
            }
        ]);

        if (districts.length === 0) {
            return {
                statusCode: 404,
                message: "Districts not found for the given state name"
            };
        }

        return {
            statusCode: 200,
            result: districts,
            message: "District list retrieved successfully"
        };
    } catch (error) {
        console.error("Error retrieving districts list: ", error.message);
        return {
            statusCode: 400,
            message: "Error while retrieving district list"
        };
    }
        },

    getDistrictByName: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('District').find({ "name": data }).lean();
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Get single District successfully"
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get All District Name List!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while get the single District record"

                };
                resolve(obj);

            }
        })
    },
    addDistrict: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let addDistrict = await RAR.Mongoose.model('District').create(data);
                let result = {
                    statusCode: 200,
                    result: null,
                    message: "New District added sucessfully",
                }
                resolve(result);
            } catch (error) {
                console.log(" Error In Add New District!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error while add new District",
                    result: null
                };
                resolve(obj);

            }

        })
    },
    editDistrict: async function (id, data) {
        return new Promise(async function (resolve, reject) {
            try {

                let editDistrict = await RAR.Mongoose.model('District').findByIdAndUpdate({ '_id': id }, data);
                if (editDistrict) {
                    let result = {
                        statusCode: 200,
                        result: null,
                        message: 'District upadated successfully',
                    }

                    resolve(result);
                } else {
                    let result = {
                        statusCode: 400,
                        message: "Error while update the District",
                    }

                    resolve(result);
                }


            } catch (error) {
                console.log("Error In Update District!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: 'Error while update the District',
                    result: null
                };
                resolve(obj);

            }







        })
    },
    getSingleDistrict: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let List = await RAR.Mongoose.model('District').findById(data);
                let result = {
                    statusCode: 200,
                    result: List,
                    message: "Single District "
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get Single District !! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error While Single District "

                };
                resolve(obj);

            }
        })
    },

    deleteDistrict: async function () {
        return new Promise(async function (resolve, reject) {

            try {

                let deleteDistrict = await RAR.Mongoose.model('District').deleteOne();

                let result = {
                    statusCode: 200,
                    result: null,
                    message: "District Deleted",
                }
                resolve(result);

            } catch (error) {
                console.log("Error while Delete District " + error.message);
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