'use strict';
const RAR = require('../../../common/Foundation');
const Sequelize = require('sequelize');
const Sequential = require('sequential-ids');
const revokedTokens = new Set();
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const moment = require('moment');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

module.exports = {
	submitForm: async function (req, res) {
		try {
			const result = await RAR.App.Services.User.SrvList.submitForm(req.body);
			if (result.statusCode === 200) {
				res.send({ statusCode: 200, message: result.message, result: null, token: null });
			} else {
				res.send({ statusCode: 400, message: result.message, result: null });
			}
		} catch (error) {
			console.log("Error While Submit Form", error);
			res.status(400).send({
				statusCode: 400,
				message: 'ફોર્મ સબમિટ કરવામાં ભૂલ આવી. કૃપા કરીને ફરીથી પ્રયત્ન કરો.',
				result: null
			});
		}
	},
	editUser: async function (req, res) {
		try {
			const formData = {};

			if (req.body.name) {
				formData.name = req.body.name;
			}

			if (req.body.surname) {
				formData.surname = req.body.surname;
			}

			if (req.body.fathername) {
				formData.fathername = req.body.fathername;
			}
			if (req.body.birthday) {
				formData.birthday = req.body.birthday
			}


			const result = await RAR.App.Services.User.SrvList.editUser(formData, req.params.id);


			if (result.statusCode === 200) {
				res.send({ statusCode: 200, message: result.message, result: null, token: null });
			} else {
				res.send({ statusCode: 400, message: result.message, result: null });
			}
		} catch (error) {
			console.error("Error while updating User: " + error.message);
			res.send({
				statusCode: 400,
				message: "Error while updating User",
				result: null
			});
		}
	},
	adminCreate: async function (req, res) {
		const { loginId, password, username, email } = req.body;
		try {
			const existingAdmin = await RAR.Admin.findOne({
				where: { [Sequelize.Op.or]: [{ loginId }, { email }] }
			});

			if (existingAdmin) {
				return res.status(400).json({ message: 'Admin already exists' });
			}

			const salt = await RAR.Bcrypt.genSalt(10);
			const hashedPassword = await RAR.Bcrypt.hash(password, salt);

			const newAdmin = await RAR.Admin.create({ loginId, password: hashedPassword, username, email });
			res.status(201).json({ message: 'Admin created successfully' });
		} catch (error) {
			console.error('Error creating admin:', error);
			res.status(500).json({ message: 'Server error', error });
		}
	},

	adminLogin: async function (req, res) {
		const { loginId, password } = req.body;
		try {
			const admin = await RAR.Admin.findOne({ where: { loginId } });

			if (!admin) {
				return res.status(400).json({ message: 'Invalid login ID or password' });
			}

			const isMatch = await RAR.Bcrypt.compare(password, admin.password);
			if (!isMatch) {
				return res.status(400).json({ message: 'Invalid login ID or password' });
			}
			let otp = crypto.randomInt(100000, 999999).toString();

			await RAR.Otp.create({
				adminId: admin.id,
				otp,
				expiresAt: Date.now() + 1 * 60 * 1000, // Expires in 1 minute
			});

			const transporter = nodemailer.createTransport({
				service: 'Gmail',
				auth: {
					user: process.env.EMAIL_USER, // Use environment variables for security
					pass: process.env.EMAIL_PASS,
				},
			});

			const mailOptions = {
				from: process.env.EMAIL_USER,
				to: admin.email,
				subject: 'Your One-Time Password (OTP) for Secure Login',
				text: `Dear User,
			
			As part of our secure login process,
			
			Your One-Time Password (OTP) is ${otp}.
			
			This OTP is valid for the next 1 minute.
			
			Best Regards,
			RaR Foundation Bharat
			www.rarfoundationbharat.com`,
				html: `<p>Dear User,</p>
			<p>As part of our secure login process,</p>
			<p>Your One-Time Password (OTP) is <strong>${otp}</strong>.</p>
			<p>This OTP is valid for the next 1 minute.</p>
			<p>Best Regards,<br>
			<strong>RAR Foundation Bharat</strong><br>
			<a href="http://www.rarfoundationbharat.com" style="color: #1a73e8; text-decoration: none;">www.rarfoundationbharat.com</a></p>`
			};



			await transporter.sendMail(mailOptions);



			res.status(200).json({ message: 'OTP sent to your email', loginId: admin.loginId });
		} catch (error) {
			console.error('Error during admin login:', error);
			res.status(500).json({ message: 'Internal server error' });
		}
	},
	verifyOtp: async function (req, res) {
		const { loginId, otp } = req.body;
		try {
			// Find the admin by loginId
			const admin = await RAR.Admin.findOne({ where: { loginId } });
			if (!admin) {
				return res.status(400).json({ message: 'Invalid login ID' });
			}

			// Find the OTP record
			const savedOtp = await RAR.Otp.findOne({
				where: {
					adminId: admin.id,
					otp,
				},
			});

			// Check if the OTP exists and is not expired
			if (!savedOtp || savedOtp.expiresAt < new Date()) {
				return res.status(400).json({ message: 'Invalid or expired OTP' });
			}

			// Generate JWT token
			const token = RAR.Jwt.sign(
				{ id: admin.id, loginId: admin.loginId },
				process.env.JWT_SECRET, // Store JWT secret in an environment variable
				{ expiresIn: '1h' }
			);

			// Delete OTP after successful verification
			await savedOtp.destroy();

			// Respond with token and user details
			res.status(200).json({
				token,
				loginId: admin.loginId,
				username: admin.username,
				email: admin.email,
			});
		} catch (error) {
			console.error('Error during OTP verification:', error);
			res.status(500).json({ message: 'Internal server error' });
		}
	},

	inactiveUser: async function (req, res) {
		try {
			const { page = 1, limit = 10, filter = '', stateId = '', districtId = '', designation = '' } = req.query;
			const pageNum = parseInt(page, 10);
			const limitNum = parseInt(limit, 10);

			const filterCriteria = { status: 'inactive' };
			if (filter) {
				filterCriteria[Sequelize.Op.or] = [
					{ name: { [Sequelize.Op.like]: `%${filter}%` } },
					{ email: { [Sequelize.Op.like]: `%${filter}%` } },
					{ registrationId: { [Sequelize.Op.like]: `%${filter}%` } },
					{ whatsapp: { [Sequelize.Op.like]: `%${filter}%` } }
				];
			}
			if (stateId) filterCriteria.stateId = stateId;
			if (districtId) filterCriteria.districtId = districtId;
			if (designation) filterCriteria.designation = { [Sequelize.Op.like]: `%${designation}%` };

			const total = await RAR.User.count({ where: filterCriteria });
			let users = await RAR.User.findAll({
				where: filterCriteria,
				offset: (pageNum - 1) * limitNum,
				limit: limitNum
			});

			res.send({ statusCode: 200, total, page: pageNum, limit: limitNum, users });
		} catch (error) {
			console.error('Error fetching inactive users:', error);
			res.send({ statusCode: 500, message: 'Server error', result: null });
		}
	},

	activeUser: async function (req, res) {
		try {
			const { page = 1, limit = 10, filter = '', stateId = '', districtId = '', designation = '' } = req.query;
			const pageNum = parseInt(page, 10);
			const limitNum = parseInt(limit, 10);

			const filterCriteria = { status: 'active' };
			if (filter) {
				filterCriteria[Sequelize.Op.or] = [
					{ name: { [Sequelize.Op.like]: `%${filter}%` } },
					{ email: { [Sequelize.Op.like]: `%${filter}%` } },
					{ activationId: { [Sequelize.Op.like]: `%${filter}%` } },
					{ whatsapp: { [Sequelize.Op.like]: `%${filter}%` } }
				];
			}
			if (stateId) filterCriteria.stateId = stateId;
			if (districtId) filterCriteria.districtId = districtId;
			if (designation) filterCriteria.designation = { [Sequelize.Op.like]: `%${designation}%` };

			const total = await RAR.User.count({ where: filterCriteria });
			let users = await RAR.User.findAll({
				where: filterCriteria,
				offset: (pageNum - 1) * limitNum,
				limit: limitNum,
				order: [['activationId', 'DESC']]
			});

			res.send({ statusCode: 200, total, page: pageNum, limit: limitNum, users });
		} catch (error) {
			console.error('Error fetching active users:', error);
			res.send({ statusCode: 500, message: 'Server error', result: null });
		}
	},

	exportInactiveUsers: async function (req, res) {
		try {
			const { filter = '', stateId = '', districtId = '', designation = '' } = req.query;
			const filterCriteria = { status: 'inactive', activationId: '' };

			if (filter) {
				filterCriteria[Sequelize.Op.or] = [
					Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), { [Sequelize.Op.like]: `%${filter.toLowerCase()}%` }),
					Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('email')), { [Sequelize.Op.like]: `%${filter.toLowerCase()}%` })
				];
			}
			if (stateId) filterCriteria.stateId = stateId;
			if (districtId) filterCriteria.districtId = districtId;
			if (designation) filterCriteria.designation = { [Sequelize.Op.like]: `%${designation}%` };

			const users = await RAR.User.findAll({ where: filterCriteria });
			const fileData = [
				['Registration Id', 'Surname', 'Name', 'Father Name', 'Email', 'Whatsapp No.', 'Designation', 'State', 'District', 'Address', 'Birthday', 'Photo', 'ID Proof'],
				...users.map(user => [
					user.registrationId, user.surname, user.name, user.fathername, user.email, user.whatsapp, user.designation,
					user.stateId, user.districtId, user.address,
					user.birthday ? moment(user.birthday).format('DD/MM/YYYY') : '',
					user.photo ? `${process.env.RAR_SERVER_URL}/uploads/${user.photo}` : '',
					user.idProof ? `${process.env.RAR_SERVER_URL}/uploads/${user.idProof}` : ''
				])
			];

			const fileName = 'inactive_users_export.xlsx';
			let ws = RAR.Xlsx.utils.aoa_to_sheet(fileData);
			let wb = RAR.Xlsx.utils.book_new();
			RAR.Xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
			RAR.Xlsx.writeFile(wb, './public/' + fileName);

			res.send({ statusCode: 200, message: " Inactive users exported successfully", result: fileName });
		} catch (error) {
			console.error('Error exporting inactive users:', error);
			res.send({ statusCode: 500, message: 'Server error', result: null });
		}
	},

	exportActiveUsers: async function (req, res) {
		try {
			const { filter = '', stateId = '', districtId = '', designation = '' } = req.query;
			const filterCriteria = { status: 'active' };

			if (filter) {
				filterCriteria[Sequelize.Op.or] = [
					{ name: { [Sequelize.Op.iLike]: `%${filter}%` } },
					{ email: { [Sequelize.Op.iLike]: `%${filter}%` } }
				];
			}
			if (stateId) filterCriteria.stateId = stateId;
			if (districtId) filterCriteria.districtId = districtId;
			if (designation) filterCriteria.designation = { [Sequelize.Op.iLike]: `%${designation}%` };

			const users = await RAR.User.findAll({ where: filterCriteria, order: [['activationId', 'ASC']] });
			const fileData = [
				['Activation Id', 'Surname', 'Name', 'Father Name', 'District', 'Whatsapp No.', 'Blood Group', 'Email', 'Designation', 'State', 'Address', 'Birthday', 'Photo', 'ID Proof'],
				...users.map(user => [
					user.activationId, user.surname, user.name, user.fathername, user.districtId, user.whatsapp, user.bloodGroupId, user.email,
					user.designation, user.stateId, user.address,
					user.birthday ? moment(user.birthday).format('DD/MM/YYYY') : '',
					user.photo ? `${process.env.RAR_SERVER_URL}/uploads/${user.photo}` : '',
					user.idProof ? `${process.env.RAR_SERVER_URL}/uploads/${user.idProof}` : ''
				])
			];

			const fileName = 'active_users_export.xlsx';
			let ws = RAR.Xlsx.utils.aoa_to_sheet(fileData);
			let wb = RAR.Xlsx.utils.book_new();
			RAR.Xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
			RAR.Xlsx.writeFile(wb, './public/' + fileName);

			res.send({ statusCode: 200, message: "Active users exported successfully", result: fileName });
		} catch (error) {
			console.error('Error exporting active users:', error);
			res.send({ statusCode: 500, message: 'Server error', result: null });
		}
	},

	adminLogout: async function (req, res) {
		const token = req.headers.authorization.split(" ")[1];
		try {
			if (token) {
				const decoded = RAR.Jwt.verify(token, 'RWiqvBCgcAR');
				if (decoded) {
					revokedTokens.add(token);
					res.send({ statusCode: 200, message: "Logout successful", result: null });
				} else {
					res.status(401).json({ statusCode: 401, message: "Invalid token" });
				}
			} else {
				res.status(401).json({ statusCode: 401, message: "Token not provided" });
			}
		} catch (error) {
			console.error('Error during logout:', error);
			res.status(500).json({ statusCode: 500, message: 'Server error' });
		}
	},
	activateUser: async function (req, res) {
		try {
			const { userId, generateActivationId, rejectUser } = req.body;

			// Check if user is not found
			const user = await RAR.User.findByPk(userId);
			if (!user) {
				return res.status(404).json({ message: 'User not found.' });
			}

			// Handle user rejection
			if (rejectUser) {
				await user.update({ status: 'rejected' }); // Update user status to rejected
				return res.status(200).json({ message: 'User has been rejected.' });
			}

			// If activation is not requested, return an error
			if (!generateActivationId) {
				return res.status(400).json({ message: 'Activation ID generation not requested.' });
			}

			// Activation logic
			const getRandPort = async function () {
				let min = 6000;
				let max = 55555;
				return Math.floor(Math.random() * (max - min + 1) + min);
			};

			let randPort = await getRandPort();
			const generator = new Sequential.Generator({
				digits: 1,
				letters: 0,
				store: function (key, id) { },
				restore: "10000",
				port: randPort, // Using the generated random port
			});

			generator.start();

			let unique = false;
			let newActivationId;

			while (!unique) {
				const generatedId = generator.generate().toString();
				newActivationId = `RAR/${generatedId.trim()}`;

				// Ensure generated Activation ID is unique
				const existingUser = await RAR.User.findOne({ where: { activationId: newActivationId } });
				if (!existingUser) {
					unique = true;
				}
			}

			// Update the user with the new activation ID and active status
			await user.update({ status: 'active', activationId: newActivationId });

			res.status(200).json({
				statusCode: 200,
				message: `User activated successfully. Activation ID: ${newActivationId}`,
				result: newActivationId,
			});

		} catch (error) {
			console.error('Error activating/rejecting user:', error);
			res.status(500).json({
				statusCode: 500,
				message: 'Server error',
				result: null,
			});
		}
	},


	updateDocuments: async function (req, res) {
		try {

			const saveImage = async (base64String, targetSizeKB, fileName) => {
				try {
					const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
					const imageBuffer = Buffer.from(base64Data, 'base64');
					const filePath = path.join(__dirname, '../../../public/uploads', fileName);

					let image = sharp(imageBuffer);

					// Resize image initially
					let resizedImageBuffer = await image
						.resize({ width: 1024 }) // Adjust initial width as needed
						.jpeg({ quality: 85 })  // Set initial quality
						.toBuffer();

					let fileSizeKB = resizedImageBuffer.length / 1024;

					// Adjust quality if needed
					while (fileSizeKB > targetSizeKB) {
						resizedImageBuffer = await sharp(resizedImageBuffer)
							.jpeg({ quality: Math.max(50, Math.min(85, 100 - (fileSizeKB - targetSizeKB) * 2)) }) // Refine quality
							.toBuffer();

						fileSizeKB = resizedImageBuffer.length / 1024;
					}

					fs.writeFileSync(filePath, resizedImageBuffer);
					return fileName;
				} catch (error) {
					console.error('Error saving Document:', error);
					throw error;
				}
			};

			// Check if an image is provided in the request
			let previewPhotoUrl;
			const updateData = { ...req.body };
			if (req.body.previewPhotoUrl) {
				// Save and resize the image before updating User
				previewPhotoUrl = await saveImage(req.body.previewPhotoUrl, 100, `photo_${uuidv4()}.jpg`);
				updateData.photo = previewPhotoUrl;
			}
			let previewIdProofUrl;
			if (req.body.previewIdProofUrl) {
				previewIdProofUrl = await saveImage(req.body.previewIdProofUrl, 100, `idProof_${uuidv4()}.jpg`);
				updateData.idProof = previewIdProofUrl;
			}
			const editDocuments = await RAR.App.Services.User.SrvList.editDocuments(req.params.id, updateData);
			res.send(editDocuments);
		} catch (error) {
			console.error("Error while updating Documents: " + error.message);
			res.status(400).send({
				statusCode: 400,
				message: "Error while updating Documents",
				result: null
			});
		}
	},

	statistics: async function (req, res) {
		try {
			// Fetching the required statistics
			const totalUsers = await RAR.User.count();
			const totalStates = await RAR.User.count({ distinct: true, col: 'stateId' });
			const totalDistricts = await RAR.User.count({ distinct: true, col: 'districtId' });
			const totalJoined = await RAR.User.count({ where: { status: 'active' } });
			const activeUsers = await RAR.User.count({ where: { status: 'active' } });
			const deactivatedUsers = await RAR.User.count({ where: { status: 'inactive' } });

			const stateDistribution = await RAR.User.findAll({
				attributes: ['stateId', [Sequelize.fn('COUNT', Sequelize.col('stateId')), 'count']],
				group: ['stateId'],
				raw: true,
			});

			const districtDistribution = await RAR.User.findAll({
				attributes: ['districtId', [Sequelize.fn('COUNT', Sequelize.col('districtId')), 'count']],
				group: ['districtId'],
				raw: true,
			});

			// Formatting the distribution results into objects
			const formattedStateDistribution = Object.fromEntries(
				stateDistribution.map(item => [item.stateId, item.count])
			);

			const formattedDistrictDistribution = Object.fromEntries(
				districtDistribution.map(item => [item.districtId, item.count])
			);

			// Returning the statistics in the response
			return res.send({
				statusCode: 200,
				message: "Statistics fetched successfully",
				totalUsers,
				totalStates,
				totalDistricts,
				totalJoined,
				activeUsers,
				deactivatedUsers,
				stateDistribution: formattedStateDistribution,
				districtDistribution: formattedDistrictDistribution,
			});
		} catch (error) {
			console.error("Error while getting Statistics: " + error.message);

			// Returning an error response
			return res.send({
				statusCode: 500,
				message: 'Server error',
				result: null
			});
		}
	},

	importUsers: async function (req, res) {
		try {
			// console.log("Importing users from file:", req.file);
			
			if (!req.file) {
				return res.status(400).send({
					statusCode: 400,
					message: 'No file uploaded.',
					result: null
				});
			}

			const result = await RAR.App.Services.User.SrvList.importUsers(req.file);

			// Delete the temporary file
			fs.unlink(req.file.path, (err) => {
				if (err) {
					console.error("Error deleting temporary file:", err);
				}
			});

			if (result.statusCode === 200) {
				res.send({ statusCode: 200, message: result.message, result: result.result });
			} else {
				res.send({ statusCode: 400, message: result.message, result: null });
			}
		} catch (error) {
			console.error("Error While Importing Users", error);
			
			let errorMessage = 'Error while importing users.';
			if (error.name === 'SequelizeValidationError') {
				errorMessage = error.errors.map(e => e.message).join(', ');
			}
			
			res.status(400).send({
				statusCode: 400,
				message: errorMessage,
				result: null
			});
		}
	},
	getUserProfile: async function (req, res) {
		try {
			const result = await RAR.App.Services.User.SrvList.getUserProfile(req.user.id);
			if (result.statusCode === 200) {
				res.send({ statusCode: 200, message: result.message, result: result.result });
			} else {
				res.send({ statusCode: 400, message: result.message, result: null });
			}
		} catch (error) {
			console.log("Error While Getting Profile", error);
			res.status(400).send({
				statusCode: 400,
				message: 'Error while getting profile.',
				result: null
			});
		}
	}
}
