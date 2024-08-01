'use strict';
const RAR = require('../../../common/Foundation');
try {
    
    RAR.Router.get('/State',RAR.App.Controller.State.ConList.getStateList);

    // for add new State record
    RAR.Router.post('/State',RAR.App.Controller.State.ConList.addState);

    // for edit exsisting State record 
    RAR.Router.put('/State/:id',RAR.App.Controller.State.ConList.editState);

    // delete single State record
    RAR.Router.delete('/State/:id/delete', RAR.App.Controller.State.ConList.deleteState);
} catch (error) {

    console.log("Error in RAR Foundation State Router :", error)
}

module.exports = RAR.Router