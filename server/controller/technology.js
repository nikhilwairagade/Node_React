const express = require("express");
const { removecote } = require("../utils/removeCote");
const { databaseOperation } = require("../utils/sqlOpration");
const { validateTechnology } = require("../validation/userValidation");
const technologyRouter = express.Router();
const message = require("../constants/message").msg;
const { query } = require('../constants/query');
const httpStatus = require('http-status');
const { generateHashPassword } = require("../utils/bcryptPassword");

technologyRouter.addTechnology = async function (req, res) {
    try {
        const { error } = validateTechnology(req.body);

        if (error) {
          return res.status(httpStatus.BAD_REQUEST).json({
            code: httpStatus.BAD_REQUEST,
            message: removecote(error.details[0].message)
          });
        }
        const {Name,Status,ResourceLink,Image} = req.body;
    
        

    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        code: httpStatus.INTERNAL_SERVER_ERROR,
        message: message.SOMETHING_WENT_WRONG,
        error:err
      });
    }
}

module.exports = technologyRouter;