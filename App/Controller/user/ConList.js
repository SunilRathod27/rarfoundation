'use strict';
const RAR = require('../../../common/Foundation');
module.exports = {

    login: async function (req, res) {
        try {
            let getUserDetails = await RAR.App.Services.user.SrvList.getUserByEmail(req.body.email);

            if (getUserDetails.result.length > 0) {

                if (RAR.Bcrypt.compareSync(req.body.password, getUserDetails.result[0].password)) {

                    RAR.Jwt.sign({ userId: getUserDetails.result[0]._id, isAdmin: getUserDetails.result[0].isAdmin }, process.env.TOKEN_SECRET, { expiresIn: '1d' }, (error, tokenval) => {
                        if (!error) {
                            res.send({
                                statusCode: 200,
                                message: "Logged in successfully",
                                result: null,
                                token: tokenval,

                            })
                        } else {
                            res.send({
                                statusCode: 400,
                                message: " Something went wrong",
                                result: null
                            })
                        }
                    })

                } else {
                    res.send({
                        statusCode: 400,

                        message: "Inncorrect credentials",
                        result: null

                    })
                }

            } else {
                res.send({
                    statusCode: 400,
                    message: "User not Ffund",
                    result: null
                })
            }

        } catch (error) {
            console.log("error", error);
            res.send({
                statusCode: 400,
                message: "Error while login",
                result: null
            })
        }

    },

    createUser: async function (req, res) {
        try {
            let data = await RAR.App.Services.user.SrvList.createUser(req.body);
            RAR.Jwt.sign({ userId: data.userID, isAdmin: data.isAdmin }, process.env.TOKEN_SECRET, { expiresIn: '1d' }, (err, tokenval) => {
                if (!err) {
                    res.send({
                        statusCode: 200,
                        message: "SignUp successfully",
                        result: null,
                        token: tokenval,
                    })
                } else {
                    res.send({
                        statusCode: 400,
                        message: " Something went wrong",
                        result: null
                    })
                }
            })

        } catch (error) {
            console.log("Error While SignUp", error);
            res.send({
                statusCode: 400,
                message: "Error while signUp",
                result: null
            })
        }



    },

    profile: async function (req, res) {
        try {
            let data = await RAR.App.Services.user.SrvList.profile(req.body);

            if (data.statusCode == 200) {
                res.send({
                    statusCode: 200,
                    message: "Profile updated successfully",
                    result: null,

                })
            } else {
                res.send(data)
            }


        } catch (error) {
            console.log("Error while update the profile", error);
            res.send({
                statusCode: 400,
                message: "Error while update the profile",
                result: null
            })
        }
    },
    password: async function (req, res) {
        try {
            let data = await RAR.App.Services.user.SrvList.password(req.body);
            if (data.statusCode === 200) {
                res.send({
                    statusCode: 200,
                    message: "Password changed successfully",
                    result: null,

                })
            } else {
                res.send(data)
            }

        } catch (error) {
            console.log("Error while update the password", error);
            res.send({
                statusCode: 400,
                message: "Error while update the password",
                result: null
            })
        }
    },
    changeAddress: async function (req, res) {
        try {
            let data = await RAR.App.Services.user.SrvList.changeAddress(req);
            if (data.statusCode == 200) {
                res.send({
                    statusCode: 200,
                    message: "Address changed successfully",
                    result: data.result,

                })
            } else {
                res.send(data)
            }

        } catch (error) {
            console.log("Error while update the address", error);
            res.send({
                statusCode: 400,
                message: "Error while update the address",
                result: null
            })
        }
    },
    addnewaddress: async function (req, res) {
        try {
            let data = await RAR.App.Services.user.SrvList.addnewaddress(req.body);
            if (data.statusCode == 200) {
                res.send({
                    statusCode: 200,
                    message: "Address saved to your profile",
                    result: {
                        _id: req.body.UserId
                    },

                })
            } else {
                res.send(data)
            }

        } catch (error) {
            console.log("Error while save the address", error);
            res.send({
                statusCode: 400,
                message: "Error while save the address",
                result: null
            })
        }
    },



    forgotPassword: async function (req, res) {
        try {
            if (process.env.EMAIL_TEST && process.env.EMAIL_TEST_APP_PSWD) {
                let user = await RAR.App.Services.user.SrvList.getUserByID(req.body.email);
                if (user.result != null && user.result != '' && user.result != undefined) {
                    let userID = user.result._id
                    const token = RAR.Jwt.sign({ userId: userID }, process.env.TOKEN_SECRET, { expiresIn: '1h' })
                    let transporter = RAR.Mailer.createTransport({
                        host: 'smtp.gmail.com',
                        port: 465,
                        secure: true,
                        secureConnection: false,
                        tls: {
                            ciphers: "SSLv3",
                        },
                        auth: {
                            user: process.env.EMAIL_TEST,
                            pass: process.env.EMAIL_TEST_APP_PSWD
                        },
                        from: process.env.EMAIL_TEST
                    });
                    const data = {
                        to: req.body.email,
                        subject: 'Reset Account Password Link',
                        html: `
                    <h3>Please click the link below to reset your password</h3>
                    <p>${'google.com'}/resetpassword/${token}</p>
                    `,
                    }
                    transporter.sendMail(data, function (error) {
                        if (error) {
                            return console.log(error);
                        }
                        else {
                            let obj = {
                                statusCode: 200,
                                message: "Link to reset password sent to mail",
                                result: null
                            }
                            res.send(obj)
                        }


                    });


                } else {
                    let obj = {
                        statusCode: 200,
                        message: "User Not Found",
                        result: null
                    }
                    res.send(obj)
                    // console.log("User Email Not Found");
                }
            }
        } catch (error) {
            console.log("Error while Forgot Password", error);
            res.send({
                statusCode: 400,
                message: "Error while Forgot Password",
                result: null
            })
        }
    },







}