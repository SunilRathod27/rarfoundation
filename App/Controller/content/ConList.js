'use strict';
const RAR = require('../../../common/Foundation');


module.exports = {



    getcontentList: async function (req, res) {
        try {
            let List = await RAR.App.Services.content.SrvList.getcontentList();
            if (List.statusCode == 200) {
                let resObj = {
                    result: List.result
                }
                let obj = {
                    statusCode: 200,
                    message: "Getting content list successfully",
                    result: resObj
                };
                res.send(obj);

            } else {
                let obj = {
                    statusCode: 400,
                    message: "Error while get content  list !",
                    result: List.message
                };

                res.send(obj);
            }
        } catch (error) {
            console.log(" Error while get content  list " + error.message);
            let obj = {
                statusCode: 400,
                message: " Error while get content  list ",
                result: null
            };
            res.send(obj);
        }
    },
    addcontent: async function (req, res) {
        try {
            let addcontent = await RAR.App.Services.content.SrvList.addcontent(req.body);
            res.send(addcontent);
        } catch (error) {
            let obj = {
                statusCode: 400,
                message: "Erro while add new content",
                result: null
            };
            res.send(obj);
        }
    },



    editcontent: async function (req, res) {
        try {
            let editcontent = await RAR.App.Services.content.SrvList.editcontent(req.params.id, req.body);

            res.send(editcontent);
        } catch (error) {
            console.log("Error While Update content Con!! " + error.message);
            let obj = {
                statusCode: 400,

                message: "Error While Update content",
                result: null
            };
            res.send(obj);
        }

    },

    deletecontent: async function (req, res) {
        try {
            let deletecontent = await RAR.App.Services.content.SrvList.deletecontent(req.params.id, req.body);

            res.send(deletecontent);
        } catch (error) {
            console.log("Error While Delete content Con!! " + error.message);
            let obj = {
                statusCode: 400,

                message: "Error While Delete content",
                result: null
            };
            res.send(obj);
        }

    },

    

}