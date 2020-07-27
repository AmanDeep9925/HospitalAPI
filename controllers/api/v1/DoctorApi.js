// action for doctors

const Doctor = require('../../../models/doctor');
// Accessing the JWT
const JWT = require('jsonwebtoken');

// SignIng as the registered doctor

module.exports.signIn = async (req, res) => {

    try {

        // Find the doctor

        let doctor = await Doctor.findOne({"username" : req.body.username});

        // if entered information is incorrect
        if(!doctor || doctor.password != req.body.password){
            return res.json(422,{
                'message' : "Invalid Credentials"
            })
        }
        // else doctor exists
        return res.json(200,{
            'message' : "Logged In Successfully 😎",
            "token" : JWT.sign(doctor.toJSON(),'ThisIsSecret',{expiresIn : 1000 * 60 * 30})
        })

    } catch (err) {
        if (err) {
            return res.json(500, { "message": "Internal Server Error" });
        }
    }
}

module.exports.signUp = async (req, res) => {
    try {
        // Checking of the doctor exists
        let doctor = await Doctor.findOne({ 'username': req.body.username });

        // If doctor exists, ask for fresh signup
        if (doctor) {
            return res.json(422, {
                "message": "Already registered, try with other details 😰 "
            });
        }
        // else create the doctor account
        else {
            let newDoc = await Doctor.create(req.body);

            if (newDoc) {
                return res.json(200, {
                    "message": "Registered Successfully 🙂",
                })
            }
        }
    } catch (err) {
        if (err) {
            return res.json(500, { "message": "Internal Server Error" });
        }
    }
}