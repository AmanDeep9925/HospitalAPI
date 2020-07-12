const express = require('express');
const router = express.Router();


router.use('/patients', require('./pateint'));
router.use('/doctors', require('./doctor'));
router.use('/reports', require('./reports'));

module.exports = router;