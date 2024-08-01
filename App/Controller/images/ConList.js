'use strict';
const RAR = require('../../../common/Foundation');


module.exports = {



    

    uploadImage: async function (req, res) {
        try {
            let uploadImage = await RAR.App.Services.images.SrvList.uploadImage(req.file);
            res.send(uploadImage);
        } catch (error) {
            let obj = {
                statusCode: 400,
                message: "Error while create the new coupon",
                result: null
            };
            res.send(obj);
        }
    },

    publishimages: async function (req, res) {
        try {
            let publishimages = await RAR.App.Services.images.SrvList.publishimages(req.params.id, req.body);

            res.send(publishimages);
        } catch (error) {
            console.log("Error While Publish images Con!! " + error.message);
            let obj = {
                statusCode: 400,
                message: "Error while update the coupon status",
                result: null
            };
            res.send(obj);
        }

    },


    editimages: async function (req, res) {
        try {
            let result = null;
            let singleimages = await RAR.App.Services.images.SrvList.getSingleimages(req.params.id);
            if (singleimages.statusCode == 400) {
                error = true;
            } else {

                result = singleimages.result;
            }
            if (result) {
                let editimages = await RAR.App.Services.images.SrvList.editimages(req.params.id, req.body);
                res.send(editimages);

            }
            else {
                let obj = {
                    statusCode: 400,
                    message: "Error while update the coupon status  !",
                    result: editimages.message
                };
                res.send(obj);
            }

        } catch (error) {
            console.log("Error While Publish images Con!! " + error.message);
            let obj = {
                statusCode: 400,

                message: "Error while update the coupon status",
                result: null
            };
            res.send(obj);
        }

    },


    endOffer: async function (req, res) {
        try {
            let endOffer = await RAR.App.Services.images.SrvList.endOffer(req.params.id, req.body);

            res.send(endOffer);

        } catch (error) {
            console.log("Error While End Offer Con!! " + error.message);
            let obj = {
                statusCode: 400,

                message: "Error while update the coupon status",
                result: null
            };
            res.send(obj);
        }

    },



}