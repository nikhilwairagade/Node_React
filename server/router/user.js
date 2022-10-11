// const authenticationRouter = require('../controller/authentication/authentication');
// const userApiRouter = require('../controller/user/userModule');
// const userRouter = require('express').Router();
// const authentication=require('../middlware/authentication');
// const authorization=require('../middlware/authorization');
// // user router
// userRouter.get('/',authentication.verifyTocken,userApiRouter.getUsers);
// userRouter.put('/approve/:id',authentication.verifyTocken,userApiRouter.verifyUser);
// userRouter.delete('/:id',authentication.verifyTocken,userApiRouter.deleteUser);
// userRouter.post('/forgotPassword',authentication.verifyTocken,userApiRouter.forgotPassword);
// userRouter.get("/country",userApiRouter.getCountry);
// userRouter.get("/sector",userApiRouter.getSector);
// userRouter.put('/:id',authentication.verifyTocken,userApiRouter.updateUser);
// module.exports = userRouter;