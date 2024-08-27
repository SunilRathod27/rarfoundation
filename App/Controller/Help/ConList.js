'use strict';
const RAR = require('../../../common/Foundation');


module.exports = {
	getHelpList: async function (req, res) {
		try {
			let List = await RAR.App.Services.Help.SrvList.getHelpList();
			if (List.statusCode == 200) {
				let resObj = {
					result: List.result
				}
				let obj = {
					statusCode: 200,
					message: "Getting Help list successfully",
					result: resObj
				};
				res.send(obj);

			} else {
				let obj = {
					statusCode: 400,
					message: "Error while get Help  list !",
					result: List.message
				};

				res.send(obj);
			}
		} catch (error) {
			console.log(" Error while get Help  list " + error.message);
			let obj = {
				statusCode: 400,
				message: " Error while get Help  list ",
				result: null
			};
			res.send(obj);
		}
	},
	addHelp: async function (req, res) {
		try {
			let addHelp = await RAR.App.Services.Help.SrvList.addHelp(req.body);
			res.send(addHelp);
		} catch (error) {
			let obj = {
				statusCode: 400,
				message: "Erro while add new Help",
				result: null
			};
			res.send(obj);
		}
	},
	editHelp: async function (req, res) {
		try {
			let editHelp = await RAR.App.Services.Help.SrvList.editHelp(req.params.id, req.body);

			res.send(editHelp);
		} catch (error) {
			console.log("Error While Update Help Con!! " + error.message);
			let obj = {
				statusCode: 400,

				message: "Error While Update Help",
				result: null
			};
			res.send(obj);
		}

	},
	deleteHelp: async function (req, res) {
		try {
			let deleteHelp = await RAR.App.Services.Help.SrvList.deleteHelp(req.params.id, req.body);

			res.send(deleteHelp);
		} catch (error) {
			console.log("Error While Delete Help Con!! " + error.message);
			let obj = {
				statusCode: 400,

				message: "Error While Delete Help",
				result: null
			};
			res.send(obj);
		}

	},
	resolveProblem: async function (req, res) {
		try {


		} catch (error) {
			console.error('Error resolving problem:', error.message);
		}
	}


}