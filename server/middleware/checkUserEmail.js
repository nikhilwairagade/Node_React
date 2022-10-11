const express = require("express");
const checkRouter = express.Router();
const message = require('../constants/message').msg;
const { query } = require('../constants/query')
const { validateEmail } = require('../validation/userValidation')
const httpStatus = require('http-status');
const { databaseOperation } = require("../utils/sqlOpration");
const { removecote } = require("../utils/removeCote");

//To check email user register with same email.
checkRouter.checkEmail = async (req, res, next) => {
    try {
        const { error } = validateEmail(req.body);
        if (error) {
            return res.status(httpStatus.BAD_REQUEST).json({
                success: false,
                message: removecote(error.details[0].message)
            });
        }
        const results = await databaseOperation(query.GET_USER_BY_EMAIL,[req.body.Email]);

        if (results.length) {
            return res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({
                    code: httpStatus.INTERNAL_SERVER_ERROR,
                    message: message.EMAIL_ALLREADY_EXIST
                })
        } else {
            return next();
        }
    } catch (err) {
        res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .json({
                code: httpStatus.INTERNAL_SERVER_ERROR,
                message: message.SOMETHING_WENT_WRONG,
                error:err
            })
    }
}

module.exports = checkRouter;