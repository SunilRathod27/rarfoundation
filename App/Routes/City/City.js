'use strict';
const RAR = require('../../../common/Foundation');
try {
    
    RAR.Router.get('/City',RAR.App.Controller.City.ConList.getCityList);

    // for add new City record
    RAR.Router.post('/City',RAR.App.Controller.City.ConList.addCity);

    // for edit exsisting City record 
    RAR.Router.put('/City/:id',RAR.App.Controller.City.ConList.editCity);

    // delete single City record
    RAR.Router.delete('/City/:id/delete', RAR.App.Controller.City.ConList.deleteCity);
} catch (error) {

    console.log("Error in RAR Foundation City Router :", error)
}

module.exports = RAR.Router