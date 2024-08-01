'use strict';
const RAR = require('../../../common/Foundation');


module.exports = {



    getDistrictList: async function (req, res) {
        try {
            let List = await RAR.App.Services.District.SrvList.getDistrictList();
            if (List.statusCode == 200) {
                let resObj = {
                    result: List.result
                }
                let obj = {
                    statusCode: 200,
                    message: "Getting District list successfully",
                    result: resObj
                };
                res.send(obj);

            } else {
                let obj = {
                    statusCode: 400,
                    message: "Error while get District  list !",
                    result: List.message
                };

                res.send(obj);
            }
        } catch (error) {
            console.log(" Error while get District  list " + error.message);
            let obj = {
                statusCode: 400,
                message: " Error while get District  list ",
                result: null
            };
            res.send(obj);
        }
    },
    addDistrict: async function (req, res) {
        try {
            let addDistrict = await RAR.App.Services.District.SrvList.addDistrict(req.body);
            res.send(addDistrict);
        } catch (error) {
            let obj = {
                statusCode: 400,
                message: "Erro while add new District",
                result: null
            };
            res.send(obj);
        }
    },



    editDistrict: async function (req, res) {
        try {
            let editDistrict = await RAR.App.Services.District.SrvList.editDistrict(req.params.id, req.body);

            res.send(editDistrict);
        } catch (error) {
            console.log("Error While Update District Con!! " + error.message);
            let obj = {
                statusCode: 400,

                message: "Error While Update District",
                result: null
            };
            res.send(obj);
        }

    },

    deleteDistrict: async function (req, res) {
        try {
            let deleteDistrict = await RAR.App.Services.District.SrvList.deleteDistrict(req.params.id, req.body);

            res.send(deleteDistrict);
        } catch (error) {
            console.log("Error While Delete District Con!! " + error.message);
            let obj = {
                statusCode: 400,

                message: "Error While Delete District",
                result: null
            };
            res.send(obj);
        }

    },

    

}