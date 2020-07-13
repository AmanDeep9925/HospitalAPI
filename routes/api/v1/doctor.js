// Doctor routes

const express = require('express');
const router = express.Router();

const doctorController = require('../../../controllers/api/v1/DoctorApi');

// new doctor
router.post('/register',doctorController.signUp);
// using your account
router.post('/login',doctorController.signIn);

module.exports = router;