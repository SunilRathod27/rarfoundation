'use strict';
const RAR = require('../../../common/Foundation');

module.exports = {

    getStateList: async function () {
        try {
            let List = await RAR.State.findAll({ where: { status: 'active' } });
            let result = {
                statusCode: 200,
                result: List,
                message: "Getting State list successfully"
            };
            return result;
        } catch (error) {
            console.log("Error In Get All State List!! " + error.message);
            let obj = {
                statusCode: 400,
                message: "Error while fetching State list"
            };
            return obj;
        }
    },

    getStateByName: async function (data) {
        try {
            let List = await RAR.State.findAll({ where: { name: data } });
            let result = {
                statusCode: 200,
                result: List,
                message: "Get single State successfully"
            };
            return result;
        } catch (error) {
            console.log("Error In Get All State Name List!! " + error.message);
            let obj = {
                statusCode: 400,
                message: "Error while getting the single State record"
            };
            return obj;
        }
    },

    addState: async function (data) {
        try {
            let addState = await RAR.State.create(data);
            let result = {
                statusCode: 200,
                result: addState,
                message: "New State added successfully"
            };
            return result;
        } catch (error) {
            console.log("Error In Add New State!! " + error.message);
            let obj = {
                statusCode: 400,
                message: "Error while adding new State",
                result: null
            };
            return obj;
        }
    },

    editState: async function (id, data) {
        try {
            let [affectedRows] = await RAR.State.update(data, { where: { id: id } });
            if (affectedRows > 0) {
                let result = {
                    statusCode: 200,
                    result: null,
                    message: 'State updated successfully'
                };
                return result;
            } else {
                let result = {
                    statusCode: 400,
                    message: "Error while updating the State"
                };
                return result;
            }
        } catch (error) {
            console.log("Error In Update State!! " + error.message);
            let obj = {
                statusCode: 400,
                message: 'Error while updating the State',
                result: null
            };
            return obj;
        }
    },

    getSingleState: async function (data) {
        try {
            let state = await RAR.State.findByPk(data);
            let result = {
                statusCode: 200,
                result: state,
                message: "Single State fetched successfully"
            };
            return result;
        } catch (error) {
            console.log("Error In Get Single State!! " + error.message);
            let obj = {
                statusCode: 400,
                message: "Error while fetching Single State"
            };
            return obj;
        }
    },

    deleteState: async function (id) {
        try {
            let affectedRows = await RAR.State.destroy({ where: { id: id } });
            if (affectedRows > 0) {
                let result = {
                    statusCode: 200,
                    result: null,
                    message: "State deleted successfully"
                };
                return result;
            } else {
                let result = {
                    statusCode: 400,
                    message: "Error while deleting the State"
                };
                return result;
            }
        } catch (error) {
            console.log("Error while Delete State!! " + error.message);
            let obj = {
                statusCode: 400,
                message: 'Error while deleting the State',
                result: null
            };
            return obj;
        }
    }
};
