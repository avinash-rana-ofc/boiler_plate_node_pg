const router = require('express').Router();

router.use('/user', require('./userRoute'));
router.use('/auth', require('./authRoute'));

module.exports = router;