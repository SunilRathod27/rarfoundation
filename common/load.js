const RAR = require('../common/Foundation');

var Bcrypt = require('bcryptjs');
var uuid = require('uuid');
var Jwt = require('jsonwebtoken');
var fs = require('fs');
var path = require("path");
const express = require('express');
var bodyParser = require('body-parser');
var Joi = require('joi');
var mysql = require('mysql2'); // For MySQL
// var sql = require('mssql'); // Uncomment if using Microsoft SQL Server

require('dotenv').config();
var ip = require('ip');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var fileupload = require("express-fileupload");
var Csv = require('csvtojson');
var Xlsx = require('xlsx');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize'); // Import Sequelize and DataTypes

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

/** Only load mongoose when MongoDB is chosen */
if (process.env.DATABASE_TYPE === 'MONGODB') {
	RAR.Mongoose = mongoose;
}

// SQL Connection Configuration
const sqlConfig = {
	host: process.env.SQL_HOST,
	user: process.env.SQL_USER,
	password: process.env.SQL_PASSWORD,
	database: process.env.SQL_DATABASE,
	port: process.env.SQL_PORT
};

// Function to connect to MongoDB
function connectToMongoDB() {
	let dbURI = '';
	if (process.env.RAR_MONGODB_TYPE === 'LOCAL') {
		dbURI = 'mongodb://' + process.env.RAR_MONGODB_HOST + ':' + process.env.RAR_MONGODB_PORT + '/' + process.env.RAR_MONGODB_DATABASE;
	} else {
		dbURI = `mongodb+srv://${process.env.RAR_MONGODB_USER}:${process.env.RAR_MONGODB_PASSWORD}@${process.env.RAR_MONGODB_HOST}/${process.env.RAR_MONGODB_DATABASE}`;
	}

	console.log("MongoDB URI:", dbURI);
	let opt = {
		autoIndex: false, // Don't build indexes
		useUnifiedTopology: true,
		useNewUrlParser: true // Added this to avoid deprecation warning
	};
	RAR.Mongoose.connect(dbURI, opt);
	RAR.Mongoose.connection.on("error", function (error) {
		console.log("Error while connecting to MongoDB", error);
	});

	RAR.Mongoose.connection.on('connected', function () {
		console.log("Connected to MongoDB");
	});
}

// Function to connect to SQL using Sequelize

function connectToSequelize() {
	const sequelize = new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USER, process.env.SQL_PASSWORD, {
		host: process.env.SQL_HOST,
		dialect: 'mysql', // Change this to the appropriate dialect if you're using a different DB (e.g., 'postgres', 'mssql')
		port: process.env.SQL_PORT,
		logging: false, // Set to true if you want Sequelize to log SQL queries
	});

	RAR.Sequelize = sequelize;
	RAR.DataTypes = DataTypes;

	sequelize.authenticate()
		.then(() => {
			console.log('Connected to SQL database using Sequelize');

		})
		.catch(err => {
			console.error('Error connecting to SQL database using Sequelize:', err);
		});
}

// Decide which database to connect to based on the environment variable
if (process.env.DATABASE_TYPE === 'MONGODB') {
	connectToMongoDB();
} else if (process.env.DATABASE_TYPE === 'SQL') {
	connectToSequelize();
} else {
	console.error('Invalid DATABASE_TYPE in environment variables');
}

/** Swagger */
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../Swagger/swagger.json');

RAR.App.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

RAR.App.use(bodyParser.urlencoded({ limit: '150mb', extended: false }));
RAR.App.use(bodyParser.json({ limit: '150mb' }));
RAR.App.use(fileupload());
RAR.App.use(express.static('./build'));
RAR.App.use(express.static('./public'));
RAR.App.use(express.static('./Static'));
RAR.App.use(cors({
	origin: '*', // Replace with the URL of your frontend
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true, // If you need to allow cookies or other credentials
}));
RAR.App.use((err, req, res, next) => {
	if (err.type === 'entity.too.large') {
		res.status(413).send('Payload too large. Please reduce the file size and try again.');
	} else {
		next(err);
	}
});
const port = process.env.PORT || 3000;
let date = new Date();
let dateTime = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' Time ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

// App Sub Folder Registration
RAR.FS.readdirSync(path.join(__dirname, '../', './App')).forEach(function (dir) {
	RAR.App[dir] = {};
	if (dir != 'Routes') {
		RAR.FS.readdirSync(path.join(__dirname, '../', './App', dir)).filter(function (subDir) {
			return subDir;
		}).forEach((subDir) => {
			if (RAR.FS.lstatSync(path.join(__dirname, '../', './App', dir + '/' + subDir)).isFile()) {
				RAR.App[dir][subDir.split('.')[0]] = require(path.join(__dirname, '../', './App', dir + '/' + subDir));
			} else {
				RAR.App[dir][subDir] = {};
				RAR.FS.readdirSync(path.join(__dirname, '../', './App', dir + '/' + subDir)).filter(function (file) {
					return file;
				}).forEach(function (subDirFile) {
					let filePath = dir + '/' + subDir + '/' + subDirFile;
					RAR.App[dir][subDir][subDirFile.split('.')[0]] = require(path.join(__dirname, '../', './App', filePath));
				});
			}
		});
	}
});

// Routes Registration
RAR.FS.readdirSync(path.join(__dirname, '../', './App/Routes')).filter(function (dir) {
	return dir;
}).forEach(function (dir) {
	RAR.FS.readdirSync(path.join(__dirname, '../', './App/Routes', dir)).filter(function (file) {
		return file;
	}).forEach(function (file) {
		let file1 = file.split('.')[0];
		RAR.App.use('/', require(path.join(__dirname, '../', './App/Routes', dir, file1)));
	});
});

// Serve the index.html file for all routes
// RAR.App.get('/*', function (req, res) {
//     console.log('__dirname::::::::::::::::', path.join(__dirname, '../build/index.html'));
//     res.sendFile(path.join(__dirname, '../build/index.html'), function (err) {
//         if (err) {
//             res.status(500).send(err);
//         }
//     });
// });

RAR.App.listen(port, () => console.log(`Foundation app is listening on port ${port}`));

console.log("(---------------------------------------------------------------)");
console.log(" |                    Foundation Server Started...               |");
console.log(" |                 Date :" + dateTime + "               |");
console.log(" |                  http://" + ip.address() + ":" + port + "                 |");
console.log("(---------------------------------------------------------------)");
