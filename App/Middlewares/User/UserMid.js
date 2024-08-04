'use strict';
const RAR = require('../../../common/Foundation');

module.exports = {

    validateUserData: async function (req, res, next) {
        return new Promise(async function (resolve, reject) {
            try {
                const savedAddresses = RAR.Joi.object().keys({
                    UserId: RAR.Joi.string(),
                    isAdmin: RAR.Joi.boolean(),
                    isDefault: RAR.Joi.boolean(),
                    name: RAR.Joi.string(),
                    addressLine1: RAR.Joi.string(),
                    addressLine2: RAR.Joi.string(),
                    city: RAR.Joi.string(),
                    state: RAR.Joi.string(),
                    pincode: RAR.Joi.string(),
                    landmark: RAR.Joi.string(),
                })
                const rulesSchema = RAR.Joi.object({
                    email: RAR.Joi.string().email({ tlds: { allow: false } }).required(),
                    password: RAR.Joi.string().regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/).messages({ 'string.pattern.base': `Password is not valid` }).required(),
                    firstname: RAR.Joi.string().required(),
                    lastname: RAR.Joi.string().required(),
                    phone: RAR.Joi.string().regex(/^[0-9]{10}$/).messages({ 'string.pattern.base': `Phone number must have 10 digits.` }).required(),
                    isAdmin: RAR.Joi.boolean(),
                    preferredCity: RAR.Joi.string(),


                });
                const validateUserData = rulesSchema.validate(req.body, {
                    allowUnknown: false,
                    abortEarly: false
                });

                if (validateUserData.error) {
                    console.log(validateUserData.error.toString());
                    res.send({
                        statusCode: 400,
                        message: validateUserData.error.toString(),
                        result: null
                    });
                } else {
                    let isAlreadyExist = await RAR.App.Services.user.SrvList.getUserByEmail(req.body.email);
                    if (isAlreadyExist.statusCode == 400) {
                        resolve(isAlreadyExist)
                    } else {
                        if (isAlreadyExist.result.length > 0) {
                            res.send({
                                statusCode: 400,
                                message: "Email Is Already In Use",
                                result: null
                            })
                        } else {
                            next()
                        }

                    }

                }
            } catch (error) {
                console.log("Error In Validate User Data Con!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error In Validate User Data",
                    result: null
                };
                res.send(obj);
            }

        })
    },

    validateLoginData: async function (req, res, next) {
        return new Promise(async function (resolve, reject) {
            try {
                const rulesSchema = RAR.Joi.object({
                    email: RAR.Joi.string().required(),
                    password: RAR.Joi.string().required(),
                });
                const validateUserData = rulesSchema.validate(req.body, {
                    allowUnknown: true,
                    abortEarly: false
                });

                if (validateUserData.error) {
                    res.send({
                        statusCode: 400,
                        message: validateUserData.error.toString(),
                        result: null
                    });
                } else {
                    next();

                }
            } catch (error) {
                console.log("Error In Validate Login Data Con!! " + error.message);
                let obj = {
                    statusCode: 400,
                    result: null
                };
                resolve(obj);
            }

        })
    },

    validateUpdatePayload: async function (req, res, next) {
        return new Promise(async function (resolve, reject) {
            try {
                const rulesSchema = RAR.Joi.object({
                    UserId: RAR.Joi.string(),
                    isAdmin: RAR.Joi.boolean(),
                    firstname: RAR.Joi.string(),
                    lastname: RAR.Joi.string(),
                    phone: RAR.Joi.string(),
                    preferredCity: RAR.Joi.string()
                });
                const validateUserData = rulesSchema.validate(req.body, {
                    allowUnknown: false,
                    abortEarly: false
                });

                if (validateUserData.error) {
                    console.log(validateUserData.error.toString());
                    res.send({
                        statusCode: 400,
                        message: validateUserData.error.toString(),
                        result: null
                    });
                } else {
                    next()

                }
            } catch (error) {
                console.log("Error In Validate User Data!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error in validate user data",
                    result: null
                };
                res.send(obj);
            }

        })
    },
    updatepasvalidate: async function (req, res, next) {
        return new Promise(async function (resolve, reject) {
            try {
                const rulesSchema = RAR.Joi.object({
                    UserId: RAR.Joi.string(),
                    isAdmin: RAR.Joi.boolean(),
                    currentPassword: RAR.Joi.string().required(),
                    newPassword: RAR.Joi.string().regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/).messages({ 'string.pattern.base': `New password is not valid` }).required(),

                });
                const validateUserData = rulesSchema.validate(req.body, {
                    allowUnknown: false,
                    abortEarly: false
                });

                if (validateUserData.error) {
                    console.log(validateUserData.error.toString());
                    res.send({
                        statusCode: 400,
                        message: validateUserData.error.toString(),
                        result: null
                    });
                } else {
                    next()

                }
            } catch (error) {
                console.log("Error In Validate User Data!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error in validate user data",
                    result: null
                };
                res.send(obj);
            }

        })
    },
    validateAddresss: async function (req, res, next) {
        return new Promise(async function (resolve, reject) {
            try {
                const rulesSchema = RAR.Joi.object({
                    UserId: RAR.Joi.string(),
                    isAdmin: RAR.Joi.boolean(),
                    isDefault: RAR.Joi.boolean().required(),
                    name: RAR.Joi.string(),
                    addressLine1: RAR.Joi.string(),
                    addressLine2: RAR.Joi.string(),
                    city: RAR.Joi.string(),
                    state: RAR.Joi.string(),
                    pincode: RAR.Joi.string(),
                    landmark: RAR.Joi.string(),

                });
                const validateAddresss = rulesSchema.validate(req.body, {
                    allowUnknown: false,
                    abortEarly: false
                });

                if (validateAddresss.error) {
                    console.log(validateAddresss.error.toString());
                    res.send({
                        statusCode: 400,
                        message: validateAddresss.error.toString(),
                        result: null
                    });
                } else {
                    next()

                }
            } catch (error) {
                console.log("Error In Validate User Address Data!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error in validate user address data",
                    result: null
                };
                res.send(obj);
            }

        })
    },
    validateAddresssAdd: async function (req, res, next) {
        return new Promise(async function (resolve, reject) {
            try {
                const rulesSchema = RAR.Joi.object({
                    UserId: RAR.Joi.string(),
                    isAdmin: RAR.Joi.boolean(),
                    isDefault: RAR.Joi.boolean().required(),
                    name: RAR.Joi.string().required(),
                    addressLine1: RAR.Joi.string().required(),
                    addressLine2: RAR.Joi.string().required(),
                    city: RAR.Joi.string().required(),
                    state: RAR.Joi.string().required(),
                    pincode: RAR.Joi.string().required(),
                    landmark: RAR.Joi.string(),

                });
                const validateAddresss = rulesSchema.validate(req.body, {
                    allowUnknown: false,
                    abortEarly: false
                });

                if (validateAddresss.error) {
                    console.log(validateAddresss.error.toString());
                    res.send({
                        statusCode: 400,
                        message: validateAddresss.error.toString(),
                        result: null
                    });
                } else {
                    next()

                }
            } catch (error) {
                console.log("Error In Validate User Address Data!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: "Error in validate user address data",
                    result: null
                };
                res.send(obj);
            }

        })
    }


}


