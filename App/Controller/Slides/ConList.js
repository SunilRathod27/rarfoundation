'use strict';
const RAR = require('../../../common/Foundation');


module.exports = {



    getSlidesList: async function (req, res) {
        try {
            let List = await RAR.App.Services.Slides.SrvList.getSlidesList();
            if (List.statusCode == 200) {
                let resObj = {
                    result: List.result
                }
                let obj = {
                    statusCode: 200,
                    message: "Getting Slides list successfully",
                    result: resObj
                };
                res.send(obj);

            } else {
                let obj = {
                    statusCode: 400,
                    message: "Error while get Slides  list !",
                    result: List.message
                };

                res.send(obj);
            }
        } catch (error) {
            console.log(" Error while get Slides  list " + error.message);
            let obj = {
                statusCode: 400,
                message: " Error while get Slides  list ",
                result: null
            };
            res.send(obj);
        }
    },
    addSlides: async function (req, res) {
        try {
            let addSlides = await RAR.App.Services.Slides.SrvList.addSlides(req.body);
            res.send(addSlides);
        } catch (error) {
            let obj = {
                statusCode: 400,
                message: "Erro while add new Slides",
                result: null
            };
            res.send(obj);
        }
    },



    editSlides: async function (req, res) {
        try {
            let editSlides = await RAR.App.Services.Slides.SrvList.editSlides(req.params.id, req.body);

            res.send(editSlides);
        } catch (error) {
            console.log("Error While Update Slides Con!! " + error.message);
            let obj = {
                statusCode: 400,

                message: "Error While Update Slides",
                result: null
            };
            res.send(obj);
        }

    },

    deleteSlides: async function (req, res) {
        try {
            let deleteSlides = await RAR.App.Services.Slides.SrvList.deleteSlides(req.params.id, req.body);

            res.send(deleteSlides);
        } catch (error) {
            console.log("Error While Delete Slides Con!! " + error.message);
            let obj = {
                statusCode: 400,

                message: "Error While Delete Slides",
                result: null
            };
            res.send(obj);
        }

    },

    

}