const RAR = require('../common/Foundation');



var Bcrypt = require('bcryptjs');
var uuid = require('uuid');
var Jwt = require('jsonwebtoken');
var fs = require('fs');
var path = require("path");
const express = require('express');
var bodyParser = require('body-parser')
var Joi = require('joi');

require('dotenv').config()
var ip = require('ip');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var fileupload = require("express-fileupload");
var Csv = require('csvtojson');
var Xlsx = require('xlsx');
const cors = require('cors');




RAR.Router = express.Router();
RAR.App = express();
RAR.FS = fs;


RAR.Mailer = nodemailer;
RAR.Csv = Csv;
RAR.Xlsx = Xlsx;


// Middleware
RAR.Bcrypt = Bcrypt;
RAR.Joi = Joi;
RAR.UUID = uuid;
RAR.Jwt = Jwt;


/** For Database Operation */
RAR.Mongoose = mongoose;

/** Swagger */
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../Swagger/swagger.json');

RAR.App.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

RAR.App.use(bodyParser.urlencoded({ extended: false }))
RAR.App.use(bodyParser.json())
RAR.App.use(fileupload())
RAR.App.use(express.static(path.resolve('./public')));
RAR.App.use(cors({
    origin: 'http://192.168.252.29:5000', // Replace with the URL of your frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If you need to allow cookies or other credentials
  }));
  

const port = process.env.PORT || 3000
let date = new Date();
let dateTime = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' Time ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

// App Sub Folder Registartion
RAR.FS.readdirSync(path.join(__dirname, '../', './App')).forEach(function (dir) {

    RAR.App[dir] = {};
    if (dir != 'Routes') {
        RAR.FS.readdirSync(path.join(__dirname, '../', './App', dir)).filter(function (subDir) {
            return subDir

        }).forEach((subDir) => {

            if (RAR.FS.lstatSync(path.join(__dirname, '../', './App', dir + '/' + subDir)).isFile()) {

                RAR.App[dir][subDir.split('.')[0]] = require(path.join(__dirname, '../', './App', dir + '/' + subDir));
            } else {

                RAR.App[dir][subDir] = {}
                RAR.FS.readdirSync(path.join(__dirname, '../', './App', dir + '/' + subDir)).filter(function (file) { return file }).forEach(function (subDirFile) {

                    let filePath = dir + '/' + subDir + '/' + subDirFile;

                    RAR.App[dir][subDir][subDirFile.split('.')[0]] = require(path.join(__dirname, '../', './App', filePath));
                })
            }
        })
    }

})

// Routes Registartion
RAR.FS.readdirSync(path.join(__dirname, '../', './App/Routes')).filter(function (dir) {
    return dir
}).forEach(function (dir) {

    RAR.FS.readdirSync(path.join(__dirname, '../', './App/Routes', dir)).filter(function (file) { return file }).forEach(function (file) {

        let file1 = file.split('.')[0]
        RAR.App.use('/', require(path.join(__dirname, '../', './App/Routes', dir, file1)));

    })


})



// DB Connection Code
try {
    let dbURI = '';
    if (process.env.RAR_MONGODB_TYPE == 'LOCAL') {
        dbURI = 'mongodb://' + process.env.RAR_MONGODB_HOST + ':' + process.env.RAR_MONGODB_PORT + '/' + process.env.RAR_MONGODB_DATABASE;

    } else {
        dbURI = `mongodb+srv://${process.env.RAR_MONGODB_USER}:${process.env.RAR_MONGODB_PASSWORD}@${process.env.RAR_MONGODB_HOST}/${process.env.RAR_MONGODB_DATABASE}`
    }
    console.log("dbURI",dbURI);
    let opt = {
        autoIndex: false, // Don't build indexes

        useUnifiedTopology: true
    }
    RAR.Mongoose.connect(dbURI, opt);
    RAR.Mongoose.connection.on("error", function (error) {
        console.log("Error while Database connection ", error)
    })
    dbResponse = true;
} catch (error) {
    console.log("the Error", error);
}
RAR.Mongoose.connection.on('connected', function () { console.log("connected") })


RAR.App.listen(port, () => console.log(`Foundation app is listening on port .${port}`));


console.log("(---------------------------------------------------------------)");
console.log(" |                    Foundation Server Started...               |");
console.log(" |                 Date :" + dateTime + "               |");
console.log(" |                  http://" + ip.address() + ":" + port + "                 |");
console.log("(---------------------------------------------------------------)");