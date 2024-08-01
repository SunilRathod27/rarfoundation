'use strict';
const RAR = require('../../../common/Foundation');
module.exports = {

    checkAuthorization: async function (req, res, next) {
        const bearerHearder = req.headers['authorization'];
        if (typeof bearerHearder != 'undefined') {
            let bearer;
            let bearerToken;
            if (bearerHearder.includes(' ')) {
                bearer = bearerHearder.split(' ');
                bearerToken = bearer[1]
            } else {
                bearer = bearerHearder
                bearerToken = bearer;
            }
            let token = bearerToken;

            RAR.Jwt.verify(token, process.env.TOKEN_SECRET, (err, authData) => {
                if (err) {
                    res.send({
                        statusCode: 403,
                        message: "Invalid token",
                        result: null
                    });
                } else {
                    req.body.UserId = authData.userId
                    req.body.isAdmin = authData.isAdmin

                    console.log(" req.body", req.body);
                    next();
                }
            });
        } else {
            res.send({
                statusCode: 403,
                message: "You are not authorised !!!",
                result: null
            });
        }
    },
    isAdminOrNot: async function (req, res, next) {
        if (req.body.isAdmin) {
            next()
        } else {
            res.send({
                statusCode: 403,
                message: "You are not authorised !!!",
                result: null
            })
        }

    },
}