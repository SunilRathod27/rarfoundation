'use strict';
const RAR = require('../../../common/Foundation');


module.exports = {
   getDesignationList: async function (req, res) {
        try {
            let List = await RAR.App.Services.Designation.SrvList.getDesignationList();
            if (List.statusCode == 200) {
                let resObj = {
                    result: List.result
                }
                let obj = {
                    statusCode: 200,
                    message: "Getting Designation list successfully",
                    result: resObj
                };
                res.send(obj);

            } else {
                let obj = {
                    statusCode: 400,
                    message: "Error while get Designation  list !",
                    result: List.message
                };

                res.send(obj);
            }
        } catch (error) {
            console.log(" Error while get Designation  list " + error.message);
            let obj = {
                statusCode: 400,
                message: " Error while get Designation  list ",
                result: null
            };
            res.send(obj);
        }
    },
    addDesignation: async function (req, res) {
        try {
            let addDesignation = await RAR.App.Services.Designation.SrvList.addDesignation(req.body);
            res.send(addDesignation);
        } catch (error) {
            let obj = {
                statusCode: 400,
                message: "Erro while add new Designation",
                result: null
            };
            res.send(obj);
        }
    },
    editDesignation: async function (req, res) {
        try {
            let editDesignation = await RAR.App.Services.Designation.SrvList.editDesignation(req.params.id, req.body);

            res.send(editDesignation);
        } catch (error) {
            console.log("Error While Update Designation Con!! " + error.message);
            let obj = {
                statusCode: 400,

                message: "Error While Update Designation",
                result: null
            };
            res.send(obj);
        }

    },
    deleteDesignation: async function (req, res) {
        try {
            let deleteDesignation = await RAR.App.Services.Designation.SrvList.deleteDesignation(req.params.id, req.body);

            res.send(deleteDesignation);
        } catch (error) {
            console.log("Error While Delete Designation Con!! " + error.message);
            let obj = {
                statusCode: 400,

                message: "Error While Delete Designation",
                result: null
            };
            res.send(obj);
        }

    },
    uploadDesignation: async function (req, res) {
        try {

            if (req.files) {

                let { name } = req.files.fileData;
                let ext = name.split(".")[1];
                let error = false;
                let message = "";
                let result = null;
                if (ext == "csv") {
                    let uploadFileInServer = await RAR.App.Controller.Designation.ConList.uploadFileInServer(req.files.fileData);
                    if (uploadFileInServer.statusCode == 400) {
                        error = true;
                        message = uploadFileInServer.message;
                    } else {
                        let readFileFromServer = await RAR.App.Controller.Designation.ConList.readFileFromServer(uploadFileInServer.fileName);
                        // console.log("readFileFromServer" , readFileFromServer.result);
                        if (readFileFromServer.statusCode == 400) {
                            error = true;
                            message = readFileFromServer.message;

                        } else {
                            let writeResponceFile = await RAR.App.Controller.Designation.ConList.writeResponceFile(readFileFromServer.result, uploadFileInServer.fileName);
                            // console.log("writeResponceFile" , writeResponceFile);
                            if (writeResponceFile.statusCode == 400) {
                                error = true;
                                message = writeResponceFile.message
                            } else {
                                result = uploadFileInServer.fileName;
                            }
                        }
                    }
                } else { error = true; message = "Please upload csv file"; }

                let obj = {
                    statusCode: error == true ? 400 : 200,
                    message: message,
                    result: result
                }
                res.send(obj)

            } else { res.send({ statusCode: 400, message: "Error while upload file", result: null }) }
        } catch (error) {
            console.log(" Error while Upload File" + error.message);
            let obj = {
                statusCode: 400,
                result: null,
                message: " Error while upload file" + error.message

            };
            res.send(obj);
        }


    },

    uploadFileInServer: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let date = new Date();
                let fileName = 'ProductMaster' + date.getFullYear() + '_' + date.getMonth() + '_' + date.getDate() + '_' + date.getHours() + '_' + date.getMinutes() + '_' + date.getSeconds() + '.csv';


                data.mv('./public/' + fileName, async function (error) {
                    if (error) {
                        let obj = { statusCode: 400, message: error.message, result: null };
                        resolve(obj);
                    } else {
                        resolve({
                            statusCode: 200,
                            fileName: fileName
                        })
                    }
                });
            } catch (error) {
                console.log("Error while upload file in server", error.message);
                let obj = {
                    statusCode: 400,
                    result: null,
                    message: "Error while upload file in server" + error.message

                };
                resolve(obj);
            }

        })
    },

    readFileFromServer: async function (fileName) {

        return new Promise(async function (resolve, reject) {

            try {
                let csvDataArray = await RAR.Csv().fromFile('./public/' + fileName);

                for (let i = 0; i < csvDataArray.length; i++) {
                    let error = false;
                    let message = "";

                    if (csvDataArray[i].operation == "A") {
                        csvDataArray[i].categoryName = csvDataArray[i].category;
                        csvDataArray[i].brandName = csvDataArray[i].brand;

                        let categoryParent = await RAR.App.Services.productMaster.SrvList.getCategoryByParent(csvDataArray[i].category);

                        if (categoryParent.result == null) {

                            csvDataArray[i].category = null;
                            error = true;
                            message = "category parent not found";

                        } else {
                            csvDataArray[i].category = categoryParent.result._id;
                            let brandName = await RAR.App.Services.productMaster.SrvList.getBrandByName(csvDataArray[i].brand);

                            if (brandName.result == null) {
                                csvDataArray[i].brand = null;
                                error = true;
                                message = "Brand name not found";
                            } else {
                                csvDataArray[i].brand = brandName.result._id;

                                let isProductExist = await RAR.App.Services.productMaster.SrvList.getProductByName(csvDataArray[i].name);

                                if (isProductExist.result == null) {
                                    let List = await RAR.App.Services.productMaster.SrvList.productCreate(csvDataArray[i]);

                                    if (List.statusCode == 400) {

                                        error = true;
                                        message = "Error while add new product";
                                    }
                                } else {
                                    error = true;
                                    message = "product is already exsist";
                                }

                            }

                        }
                    }


                    csvDataArray[i].status = error == true ? 'fail' : 'success';
                    csvDataArray[i].message = message;
                };

                resolve({
                    statusCode: 200,
                    result: csvDataArray,
                    message: ""
                });

            } catch (error) {
                console.log("Error While Read File From Server!! ", error.message);
                let obj = {
                    statusCode: 400,
                    result: null,
                    message: "Error while read file from server!! " + error.message
                };
                resolve(obj);
            }

        })

    },

    writeResponceFile: async function (csvFileData, fileName) {
        return new Promise(async function (resolve, reject) {

            try {
                let fileData = []
                fileData.push(['operation', 'name', 'category', 'brand', 'sku', 'price', 'depositePrice', 'discount', 'stock', 'isPublished', 'images', 'shortDesc', 'fullDesc', 'availableColors', 'isArchived', 'status', 'message']);

                for (let i = 0; i < csvFileData.length; i++) {
                    fileData.push([
                        csvFileData[i].operation,
                        csvFileData[i].name,
                        csvFileData[i].categoryName,
                        csvFileData[i].brandName,
                        csvFileData[i].sku,
                        csvFileData[i].price,
                        csvFileData[i].depositePrice,
                        csvFileData[i].discount,
                        csvFileData[i].stock,
                        csvFileData[i].isPublished,
                        csvFileData[i].images,
                        csvFileData[i].shortDesc,
                        csvFileData[i].fullDesc,
                        csvFileData[i].availableColors,
                        csvFileData[i].isArchived,
                        csvFileData[i].status,
                        csvFileData[i].message,


                    ]);
                }


                let ws = RAR.Xlsx.utils.aoa_to_sheet(fileData);
                let wb = RAR.Xlsx.utils.book_new();
                RAR.Xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
                RAR.Xlsx.writeFile(wb, './public/' + fileName);

                let obj = {
                    statusCode: 200,
                    message: "",
                    result: fileName
                };
                resolve(obj);

            } catch (error) {
                console.log("Error While Write Response File In Server!! ", error.message);
                let obj = {
                    statusCode: 400,
                    result: null,
                    message: "Error while write response file in server!! " + error.message,

                };
                resolve(obj);
            }

        })
    },

}