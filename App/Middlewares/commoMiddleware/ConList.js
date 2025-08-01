'use strict';
const RAR = require('../../../common/Foundation');
module.exports = {


	isAdminOrNot: async function (req, res, next) {
		const token = req.headers.authorization?.split(' ')[1];

		if (!token) {
			return res.status(401).json({ message: 'No token provided' });
		}

		try {
			const decoded = RAR.Jwt.verify(token, 'RWiqvBCgcAR');
			req.user = decoded;
			next();
		} catch (error) {
			res.status(401).json({ message: 'Invalid token' });
		}
	},
}