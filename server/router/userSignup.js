const signupRouter = require('express').Router();
const verifyEmail = require('../middleware/checkUserEmail');
const userSignup = require('../controller/signUp');

signupRouter.post('/signUp',verifyEmail.checkEmail,userSignup.signUp);

module.exports = signupRouter;