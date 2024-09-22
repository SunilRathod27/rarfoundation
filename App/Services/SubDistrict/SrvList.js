'use strict';

const RAR = require('../../../common/Foundation');
module.exports = {

	getSubDistrictList: async function (districtName) {
		try {
			const subdistricts = await RAR.SubDistrict.findAll({
				where: {
					district: districtName // Adjust this field according to your schema
				}
			});

			if (subdistricts.length === 0) {
				return {
					statusCode: 404,
					message: "SubDistrict not found for the given state name"
				};
			}

			return {
				statusCode: 200,
				result: subdistricts,
				message: "SubDistrict list retrieved successfully"
			};
		} catch (error) {
			console.error("Error retrieving subdistricts list: ", error.message);
			return {
				statusCode: 400,
				message: "Error while retrieving district list"
			};
		}
	},

	getDistrictByName: async function (data) {
		try {
			const district = await RAR.SubDistrict.findOne({
				where: { name: data }
			});

			if (district) {
				return {
					statusCode: 200,
					result: district,
					message: "Get single SubDistrict successfully"
				};
			} else {
				return {
					statusCode: 404,
					message: "SubDistrict not found"
				};
			}
		} catch (error) {
			console.log("Error In Get SubDistrict By Name!! " + error.message);
			return {
				statusCode: 400,
				message: "Error while getting the single SubDistrict record"
			};
		}
	},

	addSubDistrict: async function (data) {
		try {
			const newDistrict = await RAR.SubDistrict.create(data);
			return {
				statusCode: 200,
				result: newDistrict,
				message: "New SubDistrict added successfully",
			};
		} catch (error) {
			console.log("Error In Add New SubDistrict!! " + error.message);
			return {
				statusCode: 400,
				message: "Error while adding new SubDistrict",
				result: null
			};
		}
	},

	editSubDistrict: async function (id, data) {
		try {
			const [updated] = await RAR.SubDistrict.update(data, {
				where: { id: id }
			});

			if (updated) {
				return {
					statusCode: 200,
					message: 'SubDistrict updated successfully',
				};
			} else {
				return {
					statusCode: 400,
					message: "Error while updating the SubDistrict",
				};
			}
		} catch (error) {
			console.log("Error In Update SubDistrict!! " + error.message);
			return {
				statusCode: 400,
				message: 'Error while updating the SubDistrict',
				result: null
			};
		}
	},

	getSingleDistrict: async function (id) {
		try {
			const district = await RAR.SubDistrict.findByPk(id);

			if (district) {
				return {
					statusCode: 200,
					result: district,
					message: "Single SubDistrict"
				};
			} else {
				return {
					statusCode: 404,
					message: "SubDistrict not found"
				};
			}
		} catch (error) {
			console.log("Error In Get Single SubDistrict!! " + error.message);
			return {
				statusCode: 400,
				message: "Error While Fetching Single SubDistrict"
			};
		}
	},

	deleteSubDistrict: async function (id) {
		try {
			const deleted = await RAR.SubDistrict.destroy({
				where: { id: id }
			});

			if (deleted) {
				return {
					statusCode: 200,
					message: "SubDistrict Deleted",
				};
			} else {
				return {
					statusCode: 404,
					message: "SubDistrict not found"
				};
			}
		} catch (error) {
			console.log("Error while Deleting SubDistrict " + error.message);
			return {
				statusCode: 400,
				message: "Error while deleting SubDistrict",
				result: null,
			};
		}
	}
};