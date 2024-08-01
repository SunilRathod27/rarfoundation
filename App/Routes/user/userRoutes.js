'use strict';
const RAR = require('../../../common/Foundation');

try {
    // for login 
    RAR.Router.post('/user/login', RAR.App.Middlewares.user.userMid.validateLoginData, RAR.App.Controller.user.ConList.login);

    // for sign up users
    RAR.Router.post('/user/signup', RAR.App.Middlewares.user.userMid.validateUserData,
        RAR.App.Controller.user.ConList.createUser);

    // for update user profile    
    RAR.Router.put('/user/profile', RAR.App.Middlewares.commoMiddleware.commonMiddleware.checkAuthorization, RAR.App.Middlewares.user.userMid.validateUpdatePayload,
        RAR.App.Controller.user.ConList.profile);

    // for change user password
    RAR.Router.put('/user/password', RAR.App.Middlewares.commoMiddleware.commonMiddleware.checkAuthorization, RAR.App.Middlewares.user.userMid.updatepasvalidate,
        RAR.App.Controller.user.ConList.password);

    // for update address
    RAR.Router.put('/user/address/:addressId', RAR.App.Middlewares.commoMiddleware.commonMiddleware.checkAuthorization, RAR.App.Middlewares.user.userMid.validateAddresss,
        RAR.App.Controller.user.ConList.changeAddress);

    // for add new address
    RAR.Router.post('/user/address', RAR.App.Middlewares.commoMiddleware.commonMiddleware.checkAuthorization, RAR.App.Middlewares.user.userMid.validateAddresssAdd,
        RAR.App.Controller.user.ConList.addnewaddress);

    // for forget password
    RAR.Router.put('/user/forgotPassword', RAR.App.Middlewares.commoMiddleware.commonMiddleware.checkAuthorization,
        RAR.App.Controller.user.ConList.forgotPassword);

} catch (error) {

    console.log("Error in User Router :", error)
}

module.exports = RAR.Router

