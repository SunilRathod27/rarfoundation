'use strict';
const RAR = require('../../../common/Foundation');
try {
    
    RAR.Router.get('/Slides',RAR.App.Controller.Slides.ConList.getSlidesList);

    // for add new Slides record
    RAR.Router.post('/Slides',RAR.App.Controller.Slides.ConList.addSlides);

    // for edit exsisting Slides record 
    RAR.Router.put('/Slides/:id',RAR.App.Controller.Slides.ConList.editSlides);

    // delete single Slides record
    RAR.Router.delete('/Slides/:id/delete', RAR.App.Controller.Slides.ConList.deleteSlides);

    
} catch (error) {

    console.log("Error in RAR Foundation Slides Router :", error)
}

module.exports = RAR.Router