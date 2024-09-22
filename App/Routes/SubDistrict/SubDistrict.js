'use strict';
const RAR = require('../../../common/Foundation');
try {

	RAR.Router.get('/api/subdistrict', RAR.App.Controller.SubDistrict.ConList.getSubDistrictList);

	// for add new SubDistrict record
	RAR.Router.post('/api/subdistrict', RAR.App.Controller.SubDistrict.ConList.addSubDistrict);

	// for edit exsisting SubDistrict record 
	RAR.Router.put('/api/subdistrict/:id', RAR.App.Controller.SubDistrict.ConList.editSubDistrict);

	// delete single SubDistrict record
	RAR.Router.delete('/api/subdistrict/:id/delete', RAR.App.Controller.SubDistrict.ConList.deleteSubDistrict);
} catch (error) {

	console.log("Error in RAR Foundation SubDistrict Router :", error)
}

module.exports = RAR.Router