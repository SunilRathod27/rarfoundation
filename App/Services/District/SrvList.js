'use strict';

const RAR = require('../../../common/Foundation');
module.exports = {

    getDistrictList: async function (stateName) {
        try {
            const districts = await RAR.District.findAll({
                where: {
                    state: stateName // Adjust this field according to your schema
                }
            });

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
        try {
            const district = await RAR.District.findOne({
                where: { name: data }
            });

            if (district) {
                return {
                    statusCode: 200,
                    result: district,
                    message: "Get single District successfully"
                };
            } else {
                return {
                    statusCode: 404,
                    message: "District not found"
                };
            }
        } catch (error) {
            console.log("Error In Get District By Name!! " + error.message);
            return {
                statusCode: 400,
                message: "Error while getting the single District record"
            };
        }
    },

    addDistrict: async function (data) {
        try {
            const newDistrict = await RAR.District.create(data);
            return {
                statusCode: 200,
                result: newDistrict,
                message: "New District added successfully",
            };
        } catch (error) {
            console.log("Error In Add New District!! " + error.message);
            return {
                statusCode: 400,
                message: "Error while adding new District",
                result: null
            };
        }
    },

    editDistrict: async function (id, data) {
        try {
            const [updated] = await RAR.District.update(data, {
                where: { id: id }
            });

            if (updated) {
                return {
                    statusCode: 200,
                    message: 'District updated successfully',
                };
            } else {
                return {
                    statusCode: 400,
                    message: "Error while updating the District",
                };
            }
        } catch (error) {
            console.log("Error In Update District!! " + error.message);
            return {
                statusCode: 400,
                message: 'Error while updating the District',
                result: null
            };
        }
    },

    getSingleDistrict: async function (id) {
        try {
            const district = await RAR.District.findByPk(id);

            if (district) {
                return {
                    statusCode: 200,
                    result: district,
                    message: "Single District"
                };
            } else {
                return {
                    statusCode: 404,
                    message: "District not found"
                };
            }
        } catch (error) {
            console.log("Error In Get Single District!! " + error.message);
            return {
                statusCode: 400,
                message: "Error While Fetching Single District"
            };
        }
    },

    deleteDistrict: async function (id) {
        try {
            const deleted = await RAR.District.destroy({
                where: { id: id }
            });

            if (deleted) {
                return {
                    statusCode: 200,
                    message: "District Deleted",
                };
            } else {
                return {
                    statusCode: 404,
                    message: "District not found"
                };
            }
        } catch (error) {
            console.log("Error while Deleting District " + error.message);
            return {
                statusCode: 400,
                message: "Error while deleting District",
                result: null,
            };
        }
    }
};