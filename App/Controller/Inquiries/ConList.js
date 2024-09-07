'use strict';
const RAR = require('../../../common/Foundation');


module.exports = {
	getInquiriesList: async function (req, res) {
		try {
			let List = await RAR.App.Services.Inquiries.SrvList.getInquiriesList();
			if (List.statusCode == 200) {
				let resObj = {
					result: List.result
				}
				let obj = {
					statusCode: 200,
					message: "Getting Inquiries list successfully",
					result: resObj
				};
				res.send(obj);

			} else {
				let obj = {
					statusCode: 400,
					message: "Error while get Inquiries  list !",
					result: List.message
				};

				res.send(obj);
			}
		} catch (error) {
			console.log(" Error while get Inquiries  list " + error.message);
			let obj = {
				statusCode: 400,
				message: " Error while get Inquiries  list ",
				result: null
			};
			res.send(obj);
		}
	},
	addInquiries: async function (req, res) {
		try {
			let addInquiries = await RAR.App.Services.Inquiries.SrvList.addInquiries(req.body);
			res.send(addInquiries);
		} catch (error) {
			let obj = {
				statusCode: 400,
				message: "Erro while add new Inquiries",
				result: null
			};
			res.send(obj);
		}
	},
	editInquiries: async function (req, res) {
		try {
			let editInquiries = await RAR.App.Services.Inquiries.SrvList.editInquiries(req.params.id, req.body);

			res.send(editInquiries);
		} catch (error) {
			console.log("Error While Update Inquiries Con!! " + error.message);
			let obj = {
				statusCode: 400,

				message: "Error While Update Inquiries",
				result: null
			};
			res.send(obj);
		}

	},
	deleteInquiries: async function (req, res) {
		try {
			let deleteInquiries = await RAR.App.Services.Inquiries.SrvList.deleteInquiries(req.params.id, req.body);

			res.send(deleteInquiries);
		} catch (error) {
			console.log("Error While Delete Inquiries Con!! " + error.message);
			let obj = {
				statusCode: 400,

				message: "Error While Delete Inquiries",
				result: null
			};
			res.send(obj);
		}

	},



}