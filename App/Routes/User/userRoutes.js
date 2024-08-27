'use strict';
const RAR = require('../../../common/Foundation');

try {
	RAR.Router.post('/api/User/admin-login', RAR.App.Controller.User.ConList.adminLogin);
	RAR.Router.get('/api/dashboard/statistics', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.User.ConList.statistics);
	RAR.Router.post('/api/User/verify-otp', RAR.App.Controller.User.ConList.verifyOtp);
	RAR.Router.post('/api/User/adminCreate', RAR.App.Controller.User.ConList.adminCreate);
	RAR.Router.post('/api/User/Submit-form', RAR.App.Controller.User.ConList.submitForm);
	RAR.Router.get('/api/Users/inactive', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.User.ConList.inactiveUser);
	RAR.Router.get('/api/Users/active', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.User.ConList.activeUser);
	RAR.Router.put('/api/Users/update-documents/:id', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.User.ConList.updateDocuments);

	RAR.Router.get('/api/Users/inactive-export', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.User.ConList.exportInactiveUsers);
	RAR.Router.get('/api/Users/active-export', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.User.ConList.exportActiveUsers);
	RAR.Router.post('/api/User/admin-logout', RAR.App.Controller.User.ConList.adminLogout);
	RAR.Router.post('/api/User/activate-user', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.User.ConList.activateUser);

} catch (error) {

	console.log("Error in User Router :", error)
}

module.exports = RAR.Router

