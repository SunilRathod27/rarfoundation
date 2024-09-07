'use strict';

module.exports = {

	getInquiriesList: async function () {
		try {
			let list = await RAR.Inquiries.findAll();
			return {
				statusCode: 200,
				result: list,
				message: "Getting Inquiries list successfully"
			};
		} catch (error) {
			console.log("Error In Get All Inquiries List!! " + error.message);
			return {
				statusCode: 400,
				message: "Error while getting Inquiries list"
			};
		}
	},

	getInquiriesByName: async function (name) {
		try {
			let list = await RAR.Inquiries.findAll({ where: { name } });
			return {
				statusCode: 200,
				result: list,
				message: "Get single Inquiries successfully"
			};
		} catch (error) {
			console.log("Error In Get Inquiries By Name!! " + error.message);
			return {
				statusCode: 400,
				message: "Error while getting the single Inquiries record"
			};
		}
	},

	addInquiries: async function (data) {
		try {
			let addInquiries = await RAR.Inquiries.create(data);
			return {
				statusCode: 200,
				result: addInquiries,
				message: "તમારી સમસ્યા નોંધાઈ ગઈ છે. RAR Foundation ટૂંક સમયમાં તમારો સંપર્ક કરશે",
			};
		} catch (error) {
			console.log("Error In Add New Inquiries!! " + error.message);
			return {
				statusCode: 400,
				message: "Error while adding new Inquiries",
				result: null
			};
		}
	},

	editInquiries: async function (id, data) {
		try {
			let [updated] = await RAR.Inquiries.update(data, { where: { id } });
			if (updated) {
				return {
					statusCode: 200,
					result: null,
					message: 'Inquiries updated successfully',
				};
			} else {
				return {
					statusCode: 400,
					message: "Error while updating the Inquiries",
				};
			}
		} catch (error) {
			console.log("Error In Update Inquiries!! " + error.message);
			return {
				statusCode: 400,
				message: 'Error while updating the Inquiries',
				result: null
			};
		}
	},

	getSingleInquiries: async function (id) {
		try {
			let Inquiries = await RAR.Inquiries.findByPk(id);
			return {
				statusCode: 200,
				result: Inquiries,
				message: "Single Inquiries retrieved successfully"
			};
		} catch (error) {
			console.log("Error In Get Single Inquiries!! " + error.message);
			return {
				statusCode: 400,
				message: "Error while retrieving the single Inquiries"
			};
		}
	},

	deleteInquiries: async function (id) {
		try {
			let deleted = await RAR.Inquiries.destroy({ where: { id } });
			if (deleted) {
				return {
					statusCode: 200,
					result: null,
					message: "Inquiries Deleted",
				};
			} else {
				return {
					statusCode: 400,
					message: "Error while deleting the Inquiries",
					result: null,
				};
			}
		} catch (error) {
			console.log("Error while deleting Inquiries " + error.message);
			return {
				statusCode: 400,
				message: "Error while deleting Inquiries",
				result: null,
			};
		}
	},
};
