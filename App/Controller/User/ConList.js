'use strict';
const RAR = require('../../../common/Foundation');
const Sequelize = require('sequelize');
const Sequential = require('sequential-ids');
const revokedTokens = new Set();

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

			const token = RAR.Jwt.sign({ id: admin.id, loginId: admin.loginId }, 'RWiqvBCgcAR', { expiresIn: '1h' });
			res.send({ statusCode: 200, token, loginId: admin.loginId, username: admin.username, email: admin.email });
		} catch (error) {
			res.send({ statusCode: 500, message: 'Server error', result: null });
		}
	},

	inactiveUser: async function (req, res) {
		try {
			const { page = 1, limit = 10, filter = '', stateId = '', districtId = '', designation = '' } = req.query;
			const pageNum = parseInt(page, 10);
			const limitNum = parseInt(limit, 10);

			const filterCriteria = { status: 'inactive', activationId: '' };
			if (filter) {
				filterCriteria[Sequelize.Op.or] = [
					{ name: { [Sequelize.Op.like]: `%${filter}%` } },
					{ email: { [Sequelize.Op.like]: `%${filter}%` } }
				];
			}
			if (stateId) filterCriteria.stateId = stateId;
			if (districtId) filterCriteria.districtId = districtId;
			if (designation) filterCriteria.designation = { [Sequelize.Op.like]: `%${designation}%` };

			const total = await RAR.User.count({ where: filterCriteria });
			const users = await RAR.User.findAll({
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
					{ email: { [Sequelize.Op.like]: `%${filter}%` } }
				];
			}
			if (stateId) filterCriteria.stateId = stateId;
			if (districtId) filterCriteria.districtId = districtId;
			if (designation) filterCriteria.designation = { [Sequelize.Op.like]: `%${designation}%` };

			const total = await RAR.User.count({ where: filterCriteria });
			const users = await RAR.User.findAll({
				where: filterCriteria,
				offset: (pageNum - 1) * limitNum,
				limit: limitNum
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
				['Registration Id', 'Name', 'Email', 'Designation', 'State', 'District', 'Address', 'Photo', 'ID Proof'],
				...users.map(user => [
					user.registrationId, user.name, user.email, user.designation,
					user.stateId, user.districtId, user.address,
					user.photo ? `${process.env.RAR_SERVER_URL}/uploads/${user.photo}` : '',
					user.idProof ? `${process.env.RAR_SERVER_URL}/uploads/${user.idProof}` : ''
				])
			];

			const fileName = 'inactive_users_export.xlsx';
			let ws = RAR.Xlsx.utils.aoa_to_sheet(fileData);
			let wb = RAR.Xlsx.utils.book_new();
			RAR.Xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
			RAR.Xlsx.writeFile(wb, './public/' + fileName);

			res.send({ statusCode: 200, message: "", result: fileName });
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

			const users = await RAR.User.findAll({ where: filterCriteria });
			const fileData = [
				['Activation Id', 'Registration Id', 'Name', 'Email', 'Designation', 'State', 'District', 'Address', 'Photo', 'ID Proof'],
				...users.map(user => [
					user.activationId, user.registrationId, user.name, user.email, user.designation,
					user.stateId, user.districtId, user.address,
					user.photo ? `${process.env.RAR_SERVER_URL}/uploads/${user.photo}` : '',
					user.idProof ? `${process.env.RAR_SERVER_URL}/uploads/${user.idProof}` : ''
				])
			];

			const fileName = 'active_users_export.xlsx';
			let ws = RAR.Xlsx.utils.aoa_to_sheet(fileData);
			let wb = RAR.Xlsx.utils.book_new();
			RAR.Xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
			RAR.Xlsx.writeFile(wb, './public/' + fileName);

			res.send({ statusCode: 200, message: "", result: fileName });
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
			const { userId, generateActivationId } = req.body;

			if (!generateActivationId) {
				return res.status(400).json({ message: 'Activation ID generation not requested.' });
			}

			const user = await RAR.User.findByPk(userId);


			if (!user) {
				return res.status(404).json({ message: 'User not found.' });
			}

			const getRandPort = async function () {
				let min = 6000;
				let max = 55555;
				return Math.floor(Math.random() * (max - min + 1) + min);
			};
			let randPort = await getRandPort();
			const generator = new Sequential.Generator({
				digits: 1,
				letters: 0,
				store: function (key, id) {
				},
				restore: "8000",
				port: randPort // Using the generated random port
			});

			generator.start();

			let unique = false;
			let newActivationId;

			while (!unique) {
				const generatedId = generator.generate().toString();
				newActivationId = `RAR/${generatedId.trim()}`;

				const existingUser = await RAR.User.findOne({ where: { activationId: newActivationId } });
				if (!existingUser) {
					unique = true;
				}
			}

			await user.update({ status: 'active', activationId: newActivationId });
			let obj = {
				statusCode: 200,
				message: "User activated successfully",
				result: newActivationId
			}

			res.send(obj);

		} catch (error) {
			console.error('Error activating user:', error);
			let obj = {
				statusCode: 500,
				message: 'Server error',
				result: null
			}

			res.send(obj);
		}
	}

};
