'use strict';
const RAR = require('../../../common/Foundation');
try {
    
    RAR.Router.get('/Causes',RAR.App.Controller.Causes.ConList.getCausesList);

    // for add new Causes record
    RAR.Router.post('/Causes',RAR.App.Controller.Causes.ConList.addCauses);

    // for edit exsisting Causes record 
    RAR.Router.put('/Causes/:id',RAR.App.Controller.Causes.ConList.editCauses);

    // delete single Causes record
    RAR.Router.delete('/Causes/:id/delete', RAR.App.Controller.Causes.ConList.deleteCauses);

    
} catch (error) {

    console.log("Error in RAR Foundation Causes Router :", error)
}

module.exports = RAR.Router