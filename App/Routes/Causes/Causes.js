'use strict';
const RAR = require('../../../common/Foundation');
try {

	RAR.Router.get('/api/Causes', RAR.App.Controller.Causes.ConList.getCausesList);

	// for add new Causes record
	RAR.Router.post('/api/Causes', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.Causes.ConList.addCauses);

	// for edit exsisting Causes record 
	RAR.Router.put('/api/Causes/:id', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.Causes.ConList.editCauses);

	// delete single Causes record
	RAR.Router.delete('/api/Causes/:id/delete', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.Causes.ConList.deleteCauses);


} catch (error) {

	console.log("Error in RAR Foundation Causes Router :", error)
}

module.exports = RAR.Router