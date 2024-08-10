'use strict';

module.exports = {

    getBloodGroupList: async function () {
        try {
            let list = await RAR.BloodGroup.findAll();
            return {
                statusCode: 200,
                result: list,
                message: "Getting BloodGroup list successfully"
            };
        } catch (error) {
            console.log("Error In Get All BloodGroup List!! " + error.message);
            return {
                statusCode: 400,
                message: "Error while getting BloodGroup list"
            };
        }
    },

    getBloodGroupByName: async function (name) {
        try {
            let list = await RAR.BloodGroup.findAll({ where: { name } });
            return {
                statusCode: 200,
                result: list,
                message: "Get single BloodGroup successfully"
            };
        } catch (error) {
            console.log("Error In Get BloodGroup By Name!! " + error.message);
            return {
                statusCode: 400,
                message: "Error while getting the single BloodGroup record"
            };
        }
    },

    addBloodGroup: async function (data) {
        try {
            let addBloodGroup = await RAR.BloodGroup.create(data);
            return {
                statusCode: 200,
                result: addBloodGroup,
                message: "New BloodGroup added successfully",
            };
        } catch (error) {
            console.log("Error In Add New BloodGroup!! " + error.message);
            return {
                statusCode: 400,
                message: "Error while adding new BloodGroup",
                result: null
            };
        }
    },

    editBloodGroup: async function (id, data) {
        try {
            let [updated] = await RAR.BloodGroup.update(data, { where: { id } });
            if (updated) {
                return {
                    statusCode: 200,
                    result: null,
                    message: 'BloodGroup updated successfully',
                };
            } else {
                return {
                    statusCode: 400,
                    message: "Error while updating the BloodGroup",
                };
            }
        } catch (error) {
            console.log("Error In Update BloodGroup!! " + error.message);
            return {
                statusCode: 400,
                message: 'Error while updating the BloodGroup',
                result: null
            };
        }
    },

    getSingleBloodGroup: async function (id) {
        try {
            let bloodGroup = await RAR.BloodGroup.findByPk(id);
            return {
                statusCode: 200,
                result: bloodGroup,
                message: "Single BloodGroup retrieved successfully"
            };
        } catch (error) {
            console.log("Error In Get Single BloodGroup!! " + error.message);
            return {
                statusCode: 400,
                message: "Error while retrieving the single BloodGroup"
            };
        }
    },

    deleteBloodGroup: async function (id) {
        try {
            let deleted = await RAR.BloodGroup.destroy({ where: { id } });
            if (deleted) {
                return {
                    statusCode: 200,
                    result: null,
                    message: "BloodGroup Deleted",
                };
            } else {
                return {
                    statusCode: 400,
                    message: "Error while deleting the BloodGroup",
                    result: null,
                };
            }
        } catch (error) {
            console.log("Error while deleting BloodGroup " + error.message);
            return {
                statusCode: 400,
                message: "Error while deleting BloodGroup",
                result: null,
            };
        }
    },
};
