'use strict';

module.exports = {

    getDesignationList: async function () {
        try {
            let list = await RAR.Designation.findAll();
            return {
                statusCode: 200,
                result: list,
                message: "Getting Designation list successfully"
            };
        } catch (error) {
            console.log("Error In Get All Designation List!! " + error.message);
            return {
                statusCode: 400,
                message: "Error while getting Designation list"
            };
        }
    },

    getDesignationByName: async function (name) {
        try {
            let list = await RAR.Designation.findAll({ where: { name } });
            return {
                statusCode: 200,
                result: list,
                message: "Get single Designation successfully"
            };
        } catch (error) {
            console.log("Error In Get Designation By Name!! " + error.message);
            return {
                statusCode: 400,
                message: "Error while getting the single Designation record"
            };
        }
    },

    addDesignation: async function (data) {
        try {
            let addDesignation = await RAR.Designation.create(data);
            return {
                statusCode: 200,
                result: addDesignation,
                message: "New Designation added successfully",
            };
        } catch (error) {
            console.log("Error In Add New Designation!! " + error.message);
            return {
                statusCode: 400,
                message: "Error while adding new Designation",
                result: null
            };
        }
    },

    editDesignation: async function (id, data) {
        try {
            let [updated] = await RAR.Designation.update(data, { where: { id } });
            if (updated) {
                return {
                    statusCode: 200,
                    result: null,
                    message: 'Designation updated successfully',
                };
            } else {
                return {
                    statusCode: 400,
                    message: "Error while updating the Designation",
                };
            }
        } catch (error) {
            console.log("Error In Update Designation!! " + error.message);
            return {
                statusCode: 400,
                message: 'Error while updating the Designation',
                result: null
            };
        }
    },

    getSingleDesignation: async function (id) {
        try {
            let Designation = await RAR.Designation.findByPk(id);
            return {
                statusCode: 200,
                result: Designation,
                message: "Single Designation retrieved successfully"
            };
        } catch (error) {
            console.log("Error In Get Single Designation!! " + error.message);
            return {
                statusCode: 400,
                message: "Error while retrieving the single Designation"
            };
        }
    },

    deleteDesignation: async function (id) {
        try {
            let deleted = await RAR.Designation.destroy({ where: { id } });
            if (deleted) {
                return {
                    statusCode: 200,
                    result: null,
                    message: "Designation Deleted",
                };
            } else {
                return {
                    statusCode: 400,
                    message: "Error while deleting the Designation",
                    result: null,
                };
            }
        } catch (error) {
            console.log("Error while deleting Designation " + error.message);
            return {
                statusCode: 400,
                message: "Error while deleting Designation",
                result: null,
            };
        }
    },
};
