const express = require('express');
const router = express.Router();
const passport = require('passport');

const patientController = require('../../../controllers/api/v1/PatientApi');

// router.get('/',patientController.index);
router.post('/register', passport.authenticate('jwt',{session : false}) ,patientController.registerpatient);
router.post('/:id/createreport', passport.authenticate('jwt',{session : false}), patientController.createreport);
router.post('/:id/allreports',patientController.allreports);

module.exports = router;