// Patient routes
const express = require('express');
const router = express.Router();
const passport = require('passport');

const patientController = require('../../../controllers/api/v1/PatientApi');
const Patient = require('../../../models/patient');

// router to handle the patient info
router.post('/register', passport.authenticate('jwt',{session : false}) ,patientController.registerpatient);
router.post('/:id/createreport', passport.authenticate('jwt',{session : false}), patientController.createreport);
router.post('/:id/allreports',patientController.allreports);

module.exports = router;