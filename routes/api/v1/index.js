const express = require('express');
const router = express.Router();


router.use('/patient', require('./pateint'));
router.use('/doctor', require('./doctor'));
router.use('/report', require('./reports'));

module.exports = router;