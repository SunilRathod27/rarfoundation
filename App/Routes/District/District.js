'use strict';
const RAR = require('../../../common/Foundation');
try {
    
    RAR.Router.get('/District',RAR.App.Controller.District.ConList.getDistrictList);

    // for add new District record
    RAR.Router.post('/District',RAR.App.Controller.District.ConList.addDistrict);

    // for edit exsisting District record 
    RAR.Router.put('/District/:id',RAR.App.Controller.District.ConList.editDistrict);

    // delete single District record
    RAR.Router.delete('/District/:id/delete', RAR.App.Controller.District.ConList.deleteDistrict);
} catch (error) {

    console.log("Error in RAR Foundation District Router :", error)
}

module.exports = RAR.Router