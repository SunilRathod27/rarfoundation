'use strict';

module.exports = {

	getHelpList: async function () {
		try {
			let list = await RAR.Help.findAll();
			return {
				statusCode: 200,
				result: list,
				message: "Getting Help list successfully"
			};
		} catch (error) {
			console.log("Error In Get All Help List!! " + error.message);
			return {
				statusCode: 400,
				message: "Error while getting Help list"
			};
		}
	},

	getHelpByName: async function (name) {
		try {
			let list = await RAR.Help.findAll({ where: { name } });
			return {
				statusCode: 200,
				result: list,
				message: "Get single Help successfully"
			};
		} catch (error) {
			console.log("Error In Get Help By Name!! " + error.message);
			return {
				statusCode: 400,
				message: "Error while getting the single Help record"
			};
		}
	},

	addHelp: async function (data) {
		try {
			let addHelp = await RAR.Help.create(data);
			return {
				statusCode: 200,
				result: addHelp,
				message: "New Help added successfully",
			};
		} catch (error) {
			console.log("Error In Add New Help!! " + error.message);
			return {
				statusCode: 400,
				message: "Error while adding new Help",
				result: null
			};
		}
	},

	editHelp: async function (id, data) {
		try {
			let [updated] = await RAR.Help.update(data, { where: { id } });
			if (updated) {
				return {
					statusCode: 200,
					result: null,
					message: 'Help updated successfully',
				};
			} else {
				return {
					statusCode: 400,
					message: "Error while updating the Help",
				};
			}
		} catch (error) {
			console.log("Error In Update Help!! " + error.message);
			return {
				statusCode: 400,
				message: 'Error while updating the Help',
				result: null
			};
		}
	},

	getSingleHelp: async function (id) {
		try {
			let Help = await RAR.Help.findByPk(id);
			return {
				statusCode: 200,
				result: Help,
				message: "Single Help retrieved successfully"
			};
		} catch (error) {
			console.log("Error In Get Single Help!! " + error.message);
			return {
				statusCode: 400,
				message: "Error while retrieving the single Help"
			};
		}
	},

	deleteHelp: async function (id) {
		try {
			let deleted = await RAR.Help.destroy({ where: { id } });
			if (deleted) {
				return {
					statusCode: 200,
					result: null,
					message: "Help Deleted",
				};
			} else {
				return {
					statusCode: 400,
					message: "Error while deleting the Help",
					result: null,
				};
			}
		} catch (error) {
			console.log("Error while deleting Help " + error.message);
			return {
				statusCode: 400,
				message: "Error while deleting Help",
				result: null,
			};
		}
	},
};
