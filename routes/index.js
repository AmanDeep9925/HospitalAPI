// Routing for the api
const express = require('express');
const router = express.Router();

router.use('/api',require('./api'));

module.exports = router;