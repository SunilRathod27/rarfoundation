'use strict';
const RAR = require('../../../common/Foundation');


module.exports = {



    getCityList: async function (req, res) {
        try {
            let List = await RAR.App.Services.City.SrvList.getCityList();
            if (List.statusCode == 200) {
                let resObj = {
                    result: List.result
                }
                let obj = {
                    statusCode: 200,
                    message: "Getting City list successfully",
                    result: resObj
                };
                res.send(obj);

            } else {
                let obj = {
                    statusCode: 400,
                    message: "Error while get City  list !",
                    result: List.message
                };

                res.send(obj);
            }
        } catch (error) {
            console.log(" Error while get City  list " + error.message);
            let obj = {
                statusCode: 400,
                message: " Error while get City  list ",
                result: null
            };
            res.send(obj);
        }
    },
    addCity: async function (req, res) {
        try {
            let addCity = await RAR.App.Services.City.SrvList.addCity(req.body);
            res.send(addCity);
        } catch (error) {
            let obj = {
                statusCode: 400,
                message: "Erro while add new City",
                result: null
            };
            res.send(obj);
        }
    },



    editCity: async function (req, res) {
        try {
            let editCity = await RAR.App.Services.City.SrvList.editCity(req.params.id, req.body);

            res.send(editCity);
        } catch (error) {
            console.log("Error While Update City Con!! " + error.message);
            let obj = {
                statusCode: 400,

                message: "Error While Update City",
                result: null
            };
            res.send(obj);
        }

    },

    deleteCity: async function (req, res) {
        try {
            let deleteCity = await RAR.App.Services.City.SrvList.deleteCity(req.params.id, req.body);

            res.send(deleteCity);
        } catch (error) {
            console.log("Error While Delete City Con!! " + error.message);
            let obj = {
                statusCode: 400,

                message: "Error While Delete City",
                result: null
            };
            res.send(obj);
        }

    },

    

}