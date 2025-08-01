'use strict';
const RAR = require('../../../common/Foundation');
try {
    
    RAR.Router.get('/api/State',RAR.App.Controller.State.ConList.getStateList);

    // for add new State record
    RAR.Router.post('/api/State',RAR.App.Controller.State.ConList.addState);

    // for edit exsisting State record 
    RAR.Router.put('/api/State/:id',RAR.App.Controller.State.ConList.editState);

    // delete single State record
    RAR.Router.delete('/api/State/:id/delete', RAR.App.Controller.State.ConList.deleteState);
} catch (error) {

    console.log("Error in RAR Foundation State Router :", error)
}

module.exports = RAR.Router