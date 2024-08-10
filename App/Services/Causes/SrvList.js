'use strict';
const RAR = require('../../../common/Foundation');
module.exports = {
    getCausesList: async function () {
        try {
            let List = await RAR.Cause.findAll();
console.log(JSON.stringify(List, null, 2)); // For better readability

            
            let result = {
                statusCode: 200,
                result: List,
                message: "Getting Causes list successfully"
            };
            return result;
        } catch (error) {
            console.log("Error In Get All Causes List!! " + error.message);
            return {
                statusCode: 400,
                message: "Error while getting Causes list"
            };
        }
    },

    getCausesByName: async function (name) {
        try {
            let List = await RAR.Cause.findAll({ where: { name } });
            let result = {
                statusCode: 200,
                result: List,
                message: "Get single Cause successfully"
            };
            return result;
        } catch (error) {
            console.log("Error In Get Causes By Name!! " + error.message);
            return {
                statusCode: 400,
                message: "Error while getting the Cause by name"
            };
        }
    },

    addCauses: async function (data) {
        try {
            let addCauses = await RAR.Cause.create(data);
            let result = {
                statusCode: 200,
                result: null,
                message: "New Cause added successfully"
            };
            return result;
        } catch (error) {
            console.log("Error In Add New Cause!! " + error.message);
            return {
                statusCode: 400,
                message: "Error while adding new Cause",
                result: null
            };
        }
    },

    editCauses: async function (id, data) {
        try {
            let [affectedRows] = await RAR.Cause.update(data, { where: { id } });
            if (affectedRows) {
                let result = {
                    statusCode: 200,
                    result: null,
                    message: 'Cause updated successfully'
                };
                return result;
            } else {
                let result = {
                    statusCode: 400,
                    message: "Error while updating the Cause"
                };
                return result;
            }
        } catch (error) {
            console.log("Error In Update Cause!! " + error.message);
            return {
                statusCode: 400,
                message: 'Error while updating the Cause',
                result: null
            };
        }
    },

    getSingleCauses: async function (id) {
        try {
            let cause = await RAR.Cause.findByPk(id);
            let result = {
                statusCode: 200,
                result: cause,
                message: "Single Cause fetched successfully"
            };
            return result;
        } catch (error) {
            console.log("Error In Get Single Cause!! " + error.message);
            return {
                statusCode: 400,
                message: "Error while fetching single Cause"
            };
        }
    },

    deleteCauses: async function (id) {
        try {
            let affectedRows = await RAR.Cause.destroy({ where: { id } });
            let result = {
                statusCode: 200,
                result: null,
                message: "Cause deleted successfully"
            };
            if (!affectedRows) {
                result.statusCode = 400;
                result.message = "Error while deleting the Cause";
            }
            return result;
        } catch (error) {
            console.log("Error while deleting Cause!! " + error.message);
            return {
                statusCode: 400,
                message: "Error while deleting Cause",
                result: null
            };
        }
    }
};