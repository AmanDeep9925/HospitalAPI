// Routes to genarate the reports

const express = require('express');
const router = express.Router();
const passport = require('passport');

const reportsController = require('../../../controllers/api/v1/ReportApi');


router.get('/:status', passport.authenticate('jwt',{session : false}) ,reportsController.status);


module.exports = router;