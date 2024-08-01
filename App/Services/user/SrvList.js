'use strict';
const RAR = require('../../../common/Foundation');

module.exports = {
    createUser: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                data.password = RAR.Bcrypt.hashSync(data.password, 10);
                let createUser = await RAR.Mongoose.model('User').create(data);
                if (createUser._id != null && createUser._id != "" && createUser._id != undefined) {
                    let result = {
                        userID: createUser._id,
                        statusCode: 200,
                        isAdmin: createUser.isAdmin,
                        message: 'SignUp successfully',
                        result: null

                    }
                    resolve(result);
                } else {
                    let result = {
                        statusCode: 200,
                        message: 'Error While Signup',
                        result: null
                    }
                    resolve(result);
                }
            } catch (error) {
                console.log("Error In SignUp User!! " + error.message);
                let obj = {
                    statusCode: 400,

                    message: 'Error While Signup',
                    result: null
                };
                resolve(obj);

            }

        })
    },
    profile: async function (data) {

        return new Promise(async function (resolve, reject) {
            try {
                let profile = await RAR.Mongoose.model('User').findByIdAndUpdate(data.UserId, data);
                let result = {
                    statusCode: 200,
                    message: 'Profile updated successfully',
                    result: null

                }
                resolve(result);

            } catch (error) {
                console.log("Error while update the profile!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: 'Error while update the profile',
                    result: null
                };
                resolve(obj);

            }

        })
    },
    changeAddress: async function (data) {

        return new Promise(async function (resolve, reject) {


            try {
                let dataObj = {};
                let keys = Object.keys(data.body)
                keys.forEach(element => {
                    dataObj[`savedAddresses.$.${element}`] = data.body[element]

                });

                let Address = await RAR.Mongoose.model('User').updateOne({ "savedAddresses._id": RAR.Mongoose.Types.ObjectId(data.params.addressId) }, {
                    $set: dataObj
                });

                if (Address.acknowledged) {
                    let updatedAdd = await RAR.Mongoose.model('User').aggregate([
                        { $match: { 'savedAddresses._id': RAR.Mongoose.Types.ObjectId(data.params.addressId) } },
                        {
                            $project: {
                                "savedAddresses": {
                                    $filter: {
                                        input: '$savedAddresses',
                                        as: 'address',
                                        cond: { $eq: ['$$address._id', RAR.Mongoose.Types.ObjectId(data.params.addressId)] },
                                    },
                                },
                                _id: 0,
                            },
                        },
                    ])
                    let result = {
                        statusCode: 200,
                        message: 'Address updated successfully',
                        result: updatedAdd[0]['savedAddresses'][0]

                    }
                    resolve(result);
                } else {
                    let result = {
                        statusCode: 400,
                        message: 'Error while update the address',
                        result: null

                    }
                    resolve(result);
                }



            } catch (error) {
                console.log("Error while update the Address!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: 'Error while update the Address',
                    result: null
                };
                resolve(obj);

            }

        })
    },
    addnewaddress: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let AddAddress = await RAR.Mongoose.model('User').findByIdAndUpdate(data.UserId, { $push: { "savedAddresses": data } });

                let result = {
                    statusCode: 200,
                    message: 'Address saved successfully',
                    result: AddAddress
                }
                resolve(result);
            } catch (error) {
                console.log("Error while save the Address!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: 'Error while save the Address',
                    result: null
                };
                resolve(obj);
            }
        })
    },

    password: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let checkpass = await RAR.Mongoose.model('User').findById(data.UserId);
                if (checkpass._id != null & checkpass._id != "" && checkpass._id != undefined) {
                    if (RAR.Bcrypt.compareSync(data.currentPassword, checkpass.password)) {
                        data.newPassword = RAR.Bcrypt.hashSync(data.newPassword, 10);
                        let updatePass = await RAR.Mongoose.model('User').findByIdAndUpdate(data.id, { "password": data.newPassword });
                        let result = {
                            statusCode: 200,
                            message: 'Profile updated successfully',
                            result: null
                        }
                        resolve(result);
                    }
                    else {
                        resolve({
                            statusCode: 400,
                            message: 'Password not mached',
                            result: null
                        })
                    }
                }
                resolve({
                    statusCode: 400,
                    message: 'Error while update the password',
                    result: null
                });

            } catch (error) {
                console.log("Error while update the password!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: 'Error while update the password',
                    result: null
                };
                resolve(obj);

            }

        })
    },


    getUserByEmail: async function (data) {
        return new Promise(async function (resolve, reject) {
            try {
                let getUserByEmail = await RAR.Mongoose.model('User').find({ "email": data }).lean();

                let result = {
                    statusCode: 200,
                    message: "Getting User Details Successfully",
                    result: getUserByEmail
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get User By Email !! " + error.message);
                let obj = {
                    statusCode: 400,

                    message: 'Error While Getting User Details',
                    result: null
                };
                resolve(obj);

            }

        })
    },

    getUserByID: async function (data) {
        console.log("emails????????", data);
        return new Promise(async function (resolve, reject) {
            try {
                let getUserByEmail = await RAR.Mongoose.model('User').findOne({ 'email': data }).lean();
                let result = {
                    statusCode: 200,
                    message: "Getting User Details Successfully",
                    result: getUserByEmail
                }
                resolve(result);
            } catch (error) {
                console.log("Error In Get User By Email !! " + error.message);
                let obj = {
                    statusCode: 400,

                    message: 'Error While Getting User Details',
                    result: null
                };
                resolve(obj);

            }

        })
    },
    resetPassword: async function (data) {
        console.log("data???????", data);
        return new Promise(async function (resolve, reject) {
            try {
                let checkpass = await RAR.Mongoose.model('User').findById(data.id);

                if (RAR.Bcrypt.compareSync(data.currentPassword, checkpass.password)) {
                    data.newPassword = RAR.Bcrypt.hashSync(data.newPassword, 10);
                    let updatePass = await RAR.Mongoose.model('User').findByIdAndUpdate(data.id, { "password": data.newPassword });
                    let result = {
                        statusCode: 200,
                        message: 'Profile updated successfully',
                        result: null
                    }
                    resolve(result);
                }
                else {
                    resolve({
                        statusCode: 400,
                        message: 'Password not mached',
                        result: null
                    })
                }

                resolve({
                    statusCode: 400,
                    message: 'Error while update the password',
                    result: null
                });

            } catch (error) {
                console.log("Error while update the password!! " + error.message);
                let obj = {
                    statusCode: 400,
                    message: 'Error while update the password',
                    result: null
                };
                resolve(obj);

            }

        })
    },

}