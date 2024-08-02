'use strict';
const RAR = require('../../../common/Foundation');


module.exports = {



    getCausesList: async function (req, res) {
        try {
            let List = await RAR.App.Services.Causes.SrvList.getCausesList();
            if (List.statusCode == 200) {
                let resObj = {
                    result: List.result
                }
                let obj = {
                    statusCode: 200,
                    message: "Getting Causes list successfully",
                    result: resObj
                };
                res.send(obj);

            } else {
                let obj = {
                    statusCode: 400,
                    message: "Error while get Causes  list !",
                    result: List.message
                };

                res.send(obj);
            }
        } catch (error) {
            console.log(" Error while get Causes  list " + error.message);
            let obj = {
                statusCode: 400,
                message: " Error while get Causes  list ",
                result: null
            };
            res.send(obj);
        }
    },
    addCauses: async function (req, res) {
        try {
            let addCauses = await RAR.App.Services.Causes.SrvList.addCauses(req.body);
            res.send(addCauses);
        } catch (error) {
            let obj = {
                statusCode: 400,
                message: "Erro while add new Causes",
                result: null
            };
            res.send(obj);
        }
    },



    editCauses: async function (req, res) {
        try {
            let editCauses = await RAR.App.Services.Causes.SrvList.editCauses(req.params.id, req.body);

            res.send(editCauses);
        } catch (error) {
            console.log("Error While Update Causes Con!! " + error.message);
            let obj = {
                statusCode: 400,

                message: "Error While Update Causes",
                result: null
            };
            res.send(obj);
        }

    },

    deleteCauses: async function (req, res) {
        try {
            let deleteCauses = await RAR.App.Services.Causes.SrvList.deleteCauses(req.params.id, req.body);

            res.send(deleteCauses);
        } catch (error) {
            console.log("Error While Delete Causes Con!! " + error.message);
            let obj = {
                statusCode: 400,

                message: "Error While Delete Causes",
                result: null
            };
            res.send(obj);
        }

    },

    

}