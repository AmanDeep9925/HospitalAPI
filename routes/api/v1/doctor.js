const express = require('express');
const router = express.Router();

const doctorController = require('../../../controllers/api/v1/DoctorApi');


router.post('/register',doctorController.signUp);
router.post('/login',doctorController.signIn);

module.exports = router;