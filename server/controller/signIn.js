const express = require("express");
const jwt = require('jsonwebtoken');
const { removecote } = require("../utils/removeCote");
const { databaseOperation } = require("../utils/sqlOpration");
const { validateSignIn } = require("../validation/userValidation");
const signInRouter = express.Router();
const message = require("../constants/message").msg;
const { query } = require('../constants/query');
const httpStatus = require('http-status');
const { verifyPassword } = require("../utils/bcryptPassword");

signInRouter.signIn = async function (req, res) {
    try {
        const { error } = validateSignIn(req.body);

        if (error) {
            return res.status(httpStatus.BAD_REQUEST).json({
                code: httpStatus.BAD_REQUEST,
                message: removecote(error.details[0].message)
            });
        }
        const { Password, Email } = req.body;
        const results = await databaseOperation(query.GET_USER_BY_EMAIL, [Email]);
        if (results.length) {
            verifyPassword(Password, results[0]?.Password).then(
                (isChecked) => {
                    if (isChecked) {
                        const { Id, Name, Email, UserType } = results[0];
                        const userData = {
                            userId: Id,
                            name: Name,
                            email: Email,
                            role: UserType
                        };
                        var token = jwt.sign(
                            { id: Id, userData: userData },
                            process.env.jwtSecreteKey,
                            {
                                expiresIn: 86400, // expires in 24 hours
                            }
                        );
                        return res.status(httpStatus.OK).json({
                            code: httpStatus.OK,
                            message: message.LOGIN_SUCCESSFULL,
                        });
                    } else {
                        return res.status(httpStatus.BAD_REQUEST).json({
                            code: httpStatus.BAD_REQUEST,
                            message: message.CREDENTIALS_INVALID,
                        });
                    }
                })
        } else {
            return res.status(httpStatus.BAD_REQUEST).json({
                code: httpStatus.BAD_REQUEST,
                message: message.CREDENTIALS_INVALID,
            });
        }
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            code: httpStatus.INTERNAL_SERVER_ERROR,
            message: message.SOMETHING_WENT_WRONG,
            error: err
        });
    }
}

module.exports = signInRouter;