const express = require("express");
const { removecote } = require("../utils/removeCote");
const { databaseOperation } = require("../utils/sqlOpration");
const { validateRegister } = require("../validation/userValidation");
const registerRouter = express.Router();
const message = require("../constants/message").msg;
const { query } = require('../constants/query');
const httpStatus = require('http-status');
const { generateHashPassword } = require("../utils/bcryptPassword");

registerRouter.signUp = async function (req, res) {
    try {
        const { error }= validateRegister(req.body);
        if (error) {
          return res.status(httpStatus.BAD_REQUEST).json({
            code: httpStatus.BAD_REQUEST,
            message: removecote(error.details[0].message)
          });
        }
        const {Password,Name,Email,UserType} = req.body;
    
        const encryptedPassword = await generateHashPassword(Password);
        
        const usersData = [Name,Email,encryptedPassword,UserType];
        const result = await databaseOperation(query.ADD_USER,usersData)
        if(result){
            res.status(httpStatus.OK).json({
                code: httpStatus.OK,
                message: message.USER_REGISTER,
              });      
        }

    } catch (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        code: httpStatus.INTERNAL_SERVER_ERROR,
        message: message.SOMETHING_WENT_WRONG,
        error:err
      });
    }
}

module.exports = registerRouter;