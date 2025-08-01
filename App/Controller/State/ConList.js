'use strict';
const RAR = require('../../../common/Foundation');


module.exports = {



    getStateList: async function (req, res) {
        try {
            let List = await RAR.App.Services.State.SrvList.getStateList();
            if (List.statusCode == 200) {
                let resObj = {
                    result: List.result
                }
                let obj = {
                    statusCode: 200,
                    message: "Getting State list successfully",
                    result: resObj
                };
                res.send(obj);

            } else {
                let obj = {
                    statusCode: 400,
                    message: "Error while get State  list !",
                    result: List.message
                };

                res.send(obj);
            }
        } catch (error) {
            console.log(" Error while get State  list " + error.message);
            let obj = {
                statusCode: 400,
                message: " Error while get State  list ",
                result: null
            };
            res.send(obj);
        }
    },
    addState: async function (req, res) {
        try {
            let addState = await RAR.App.Services.State.SrvList.addState(req.body);
            res.send(addState);
        } catch (error) {
            let obj = {
                statusCode: 400,
                message: "Erro while add new State",
                result: null
            };
            res.send(obj);
        }
    },



    editState: async function (req, res) {
        try {
            let editState = await RAR.App.Services.State.SrvList.editState(req.params.id, req.body);

            res.send(editState);
        } catch (error) {
            console.log("Error While Update State Con!! " + error.message);
            let obj = {
                statusCode: 400,

                message: "Error While Update State",
                result: null
            };
            res.send(obj);
        }

    },

    deleteState: async function (req, res) {
        try {
            let deleteState = await RAR.App.Services.State.SrvList.deleteState(req.params.id, req.body);

            res.send(deleteState);
        } catch (error) {
            console.log("Error While Delete State Con!! " + error.message);
            let obj = {
                statusCode: 400,

                message: "Error While Delete State",
                result: null
            };
            res.send(obj);
        }

    },

    

}