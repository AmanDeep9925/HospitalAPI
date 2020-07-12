const Doctor = require('../../../models/doctor');
const JWT = require('jsonwebtoken');

module.export.signIn = async (req, res) => {
    try {
        let doctor = await Doctor.findOne({ 'username': req.body.username });

        if (doctor) {
            if (!doctor || doctor.password != req.body.password) {
                return res.json(422, {
                    "message ": "Invalid Credentials /  Check details you entered :)"
                })
            }

            return res.json(200, {
                "message ": "Signed In Successfully",
                "token" : jwt.sign(doctor.toJSON(),'thisKeyIsASecretKey',{expiresIn : 1000 * 60 * 30})
            })

        }
    } catch (err) {
        if (err) {
            return res.json(500, { "message": "Internal Server Error" });
        }
    }
}

module.export.signUp = async (req, res) => {
    try {
        let doctor = await Doctor.findOne({ 'username': req.body.username });

        if (doctor) {
                return res.json(422, {
                    "message ": "Already registered, try with other details:)"
                });
        }
        else {
            let newDoc = await Doctor.create(req.body);

            if(newDoc){
                return res.json(200, {
                    "message ": "Registered Successfully",
                })
            }
        }
    } catch (err) {
        if (err) {
            return res.json(500, { "message": "Internal Server Error" });
        }
    }
}