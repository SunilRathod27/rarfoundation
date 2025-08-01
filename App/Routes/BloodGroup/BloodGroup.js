'use strict';
const RAR = require('../../../common/Foundation');
try {
    
    RAR.Router.get('/api/BloodGroup',RAR.App.Controller.BloodGroup.ConList.getBloodGroupList);

    // for add new BloodGroup record
    RAR.Router.post('/api/BloodGroup',RAR.App.Controller.BloodGroup.ConList.addBloodGroup);

    // for edit exsisting BloodGroup record 
    RAR.Router.put('/api/BloodGroup/:id',RAR.App.Controller.BloodGroup.ConList.editBloodGroup);

    // delete single BloodGroup record
    RAR.Router.delete('/api/BloodGroup/:id/delete', RAR.App.Controller.BloodGroup.ConList.deleteBloodGroup);

    
} catch (error) {

    console.log("Error in RAR Foundation BloodGroup Router :", error)
}

module.exports = RAR.Router