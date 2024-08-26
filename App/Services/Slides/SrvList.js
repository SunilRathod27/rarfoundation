'use strict';
const { object } = require('joi');
const RAR = require('../../../common/Foundation');
module.exports = {

	getSlidesList: async function () {
		try {
			let List = await RAR.Slides.findAll({
				order: [['createdAt', 'DESC']]
			});
			let result = {
				statusCode: 200,
				result: List,
				message: "Getting Slides list successfully"
			};
			return result;
		} catch (error) {
			console.log("Error In Get All Slides List!! " + error.message);
			let obj = {
				statusCode: 400,
				message: "Error while fetching Slides list"
			};
			return obj;
		}
	},

	getSlidesByName: async function (data) {
		try {
			let List = await RAR.Slides.findAll({ where: { name: data } });
			let result = {
				statusCode: 200,
				result: List,
				message: "Get single Slides successfully"
			};
			return result;
		} catch (error) {
			console.log("Error In Get All Slides By Name!! " + error.message);
			let obj = {
				statusCode: 400,
				message: "Error while fetching Slides by name"
			};
			return obj;
		}
	},

	addSlides: async function (data) {
		try {
			let addSlides = await RAR.Slides.create(data);
			let result = {
				statusCode: 200,
				result: addSlides,
				message: "New Slides added successfully"
			};
			return result;
		} catch (error) {
			console.log("Error In Add New Slides!! " + error.message);
			let obj = {
				statusCode: 400,
				message: "Error while adding new Slides"
			};
			return obj;
		}
	},

	editSlides: async function (id, data) {
		try {
			let [affectedRows] = await RAR.Slides.update(data, { where: { id: id } });
			if (affectedRows > 0) {
				let result = {
					statusCode: 200,
					result: null,
					message: 'Slides updated successfully'
				};
				return result;
			} else {
				let result = {
					statusCode: 400,
					message: "Error while updating Slides"
				};
				return result;
			}
		} catch (error) {
			console.log("Error In Update Slides!! " + error.message);
			let obj = {
				statusCode: 400,
				message: 'Error while updating Slides'
			};
			return obj;
		}
	},

	getSingleSlides: async function (id) {
		try {
			let slide = await RAR.Slides.findByPk(id);
			let result = {
				statusCode: 200,
				result: slide,
				message: "Single Slide fetched successfully"
			};
			return result;
		} catch (error) {
			console.log("Error In Get Single Slides!! " + error.message);
			let obj = {
				statusCode: 400,
				message: "Error while fetching single Slide"
			};
			return obj;
		}
	},

	deleteSlides: async function (id) {
		try {
			let deletedCount = await RAR.Slides.destroy({ where: { id: id } });
			if (deletedCount > 0) {
				let result = {
					statusCode: 200,
					result: null,
					message: "Slides deleted successfully"
				};
				return result;
			} else {
				let result = {
					statusCode: 400,
					message: "Error while deleting Slides"
				};
				return result;
			}
		} catch (error) {
			console.log("Error while deleting Slides " + error.message);
			let obj = {
				statusCode: 400,
				message: 'Error while deleting Slides'
			};
			return obj;
		}
	}
};