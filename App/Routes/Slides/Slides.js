'use strict';
const RAR = require('../../../common/Foundation');
try {

	RAR.Router.get('/api/Slides', RAR.App.Controller.Slides.ConList.getSlidesList);

	// for add new Slides record
	RAR.Router.post('/api/Slides', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.Slides.ConList.addSlides);

	// for edit exsisting Slides record 
	RAR.Router.put('/api/Slides/:id', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.Slides.ConList.editSlides);

	// delete single Slides record
	RAR.Router.delete('/api/Slides/:id/delete', RAR.App.Middlewares.commoMiddleware.ConList.isAdminOrNot, RAR.App.Controller.Slides.ConList.deleteSlides);


} catch (error) {

	console.log("Error in RAR Foundation Slides Router :", error)
}

module.exports = RAR.Router