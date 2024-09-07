'use strict';
const RAR = require('../../../common/Foundation');
try {

	RAR.Router.get('/api/inquiries', RAR.App.Controller.Inquiries.ConList.getInquiriesList);

	// for add new inquiries record
	RAR.Router.post('/api/inquiries/submit-form', RAR.App.Controller.Inquiries.ConList.addInquiries);

	// for edit exsisting inquiries record 
	RAR.Router.put('/api/inquiries/:id', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.Inquiries.ConList.editInquiries);

	// delete single inquiries record
	RAR.Router.delete('/api/inquiries/:id/delete', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.Inquiries.ConList.deleteInquiries);


} catch (error) {

	console.log("Error in RAR Foundation inquiries Router :", error)
}

module.exports = RAR.Router