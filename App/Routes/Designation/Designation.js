'use strict';
const RAR = require('../../../common/Foundation');
try {
    
    RAR.Router.get('/api/Designation',RAR.App.Controller.Designation.ConList.getDesignationList);

    // for add new Designation record
    RAR.Router.post('/api/Designation',RAR.App.Controller.Designation.ConList.addDesignation);

    // for edit exsisting Designation record 
    RAR.Router.put('/api/Designation/:id',RAR.App.Controller.Designation.ConList.editDesignation);

    // delete single Designation record
    RAR.Router.delete('/api/Designation/:id/delete', RAR.App.Controller.Designation.ConList.deleteDesignation);

    
} catch (error) {

    console.log("Error in RAR Foundation Designation Router :", error)
}

module.exports = RAR.Router