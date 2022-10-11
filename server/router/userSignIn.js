const signInRouter = require('express').Router();
const userSignIn = require('../controller/signIn');

signInRouter.post('/signIn',userSignIn.signIn);

module.exports = signInRouter;