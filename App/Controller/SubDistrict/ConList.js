'use strict';
const RAR = require('../../../common/Foundation');


module.exports = {



	getSubDistrictList: async function (req, res) {
		try {
			const { district } = req.query;
			let List = await RAR.App.Services.SubDistrict.SrvList.getSubDistrictList(district);
			if (List.statusCode == 200) {
				let resObj = {
					result: List.result
				}
				let obj = {
					statusCode: 200,
					message: "Getting SubDistrict list successfully",
					result: resObj
				};
				res.send(obj);

			} else {
				let obj = {
					statusCode: 400,
					message: "Error while get SubDistrict  list !",
					result: List.message
				};

				res.send(obj);
			}
		} catch (error) {
			console.log(" Error while get SubDistrict  list " + error.message);
			let obj = {
				statusCode: 400,
				message: " Error while get SubDistrict  list ",
				result: null
			};
			res.send(obj);
		}
	},
	addSubDistrict: async function (req, res) {
		try {
			let addSubDistrict = await RAR.App.Services.SubDistrict.SrvList.addSubDistrict(req.body);
			res.send(addSubDistrict);
		} catch (error) {
			let obj = {
				statusCode: 400,
				message: "Erro while add new SubDistrict",
				result: null
			};
			res.send(obj);
		}
	},



	editSubDistrict: async function (req, res) {
		try {
			let editSubDistrict = await RAR.App.Services.SubDistrict.SrvList.editSubDistrict(req.params.id, req.body);

			res.send(editSubDistrict);
		} catch (error) {
			console.log("Error While Update SubDistrict Con!! " + error.message);
			let obj = {
				statusCode: 400,

				message: "Error While Update SubDistrict",
				result: null
			};
			res.send(obj);
		}

	},

	deleteSubDistrict: async function (req, res) {
		try {
			let deleteSubDistrict = await RAR.App.Services.SubDistrict.SrvList.deleteSubDistrict(req.params.id, req.body);

			res.send(deleteSubDistrict);
		} catch (error) {
			console.log("Error While Delete SubDistrict Con!! " + error.message);
			let obj = {
				statusCode: 400,

				message: "Error While Delete SubDistrict",
				result: null
			};
			res.send(obj);
		}

	},



}