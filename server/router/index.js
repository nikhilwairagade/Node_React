const router = require('express').Router();

router.use('/', require('./userSignup'));
router.use('/',require('./userSignIn'));

module.exports = router;