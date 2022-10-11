var httpStatus=require('http-status');
var key=require('../constants/constants').constantData.SECRET;
const jwt = require("jsonwebtoken");
var express = require("express");
var authRouter = express.Router();

authRouter.verifyTocken = (req, res, next) => {
    var token = req.headers['x-access-token'];
    
    if (!token) return res.status(httpStatus.BAD_REQUEST).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, key, (err, decoded) => {
        if (err) return res.status(httpStatus.BAD_REQUEST).send({ auth: false, message: 'Failed to authenticate token.' });

        req.decoded = decoded;
        next();

    });
};