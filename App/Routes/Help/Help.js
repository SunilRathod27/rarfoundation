'use strict';
const RAR = require('../../../common/Foundation');
try {

	RAR.Router.get('/api/help', RAR.App.Controller.Help.ConList.getHelpList);

	// for add new Help record
	RAR.Router.post('/api/help/submit-form', RAR.App.Controller.Help.ConList.addHelp);

	// for edit exsisting Help record 
	RAR.Router.put('/api/help/:id', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.Help.ConList.editHelp);

	// delete single Help record
	RAR.Router.delete('/api/help/:id/delete', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.Help.ConList.deleteHelp);


} catch (error) {

	console.log("Error in RAR Foundation Help Router :", error)
}

module.exports = RAR.Router