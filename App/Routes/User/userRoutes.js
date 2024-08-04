'use strict';
const RAR = require('../../../common/Foundation');

try {
    // for login 
    RAR.Router.post('/User/login', RAR.App.Middlewares.User.UserMid.validateLoginData, RAR.App.Controller.User.ConList.login);

    // for sign up users
    RAR.Router.post('/User/signup', RAR.App.Middlewares.User.UserMid.validateUserData,
        RAR.App.Controller.User.ConList.createUser);


        RAR.Router.post('/User/Submit-form',
            RAR.App.Controller.User.ConList.submitForm);

    // for update User profile    
    RAR.Router.put('/User/profile', RAR.App.Middlewares.commoMiddleware.commonMiddleware.checkAuthorization, RAR.App.Middlewares.User.UserMid.validateUpdatePayload,
        RAR.App.Controller.User.ConList.profile);

    // for change User password
    RAR.Router.put('/User/password', RAR.App.Middlewares.commoMiddleware.commonMiddleware.checkAuthorization, RAR.App.Middlewares.User.UserMid.updatepasvalidate,
        RAR.App.Controller.User.ConList.password);

    // for update address
    RAR.Router.put('/User/address/:addressId', RAR.App.Middlewares.commoMiddleware.commonMiddleware.checkAuthorization, RAR.App.Middlewares.User.UserMid.validateAddresss,
        RAR.App.Controller.User.ConList.changeAddress);

    // for add new address
    RAR.Router.post('/User/address', RAR.App.Middlewares.commoMiddleware.commonMiddleware.checkAuthorization, RAR.App.Middlewares.User.UserMid.validateAddresssAdd,
        RAR.App.Controller.User.ConList.addnewaddress);

    // for forget password
    RAR.Router.put('/User/forgotPassword', RAR.App.Middlewares.commoMiddleware.commonMiddleware.checkAuthorization,
        RAR.App.Controller.User.ConList.forgotPassword);

} catch (error) {

    console.log("Error in User Router :", error)
}

module.exports = RAR.Router

