const Doctor = require('../../../models/doctor');
const JWT = require('jsonwebtoken');

module.exports.signIn = async (req, res) => {
    console.log(req.body.username + " " + req.body.password);


    try {

        let doctor = await Doctor.findOne({"username" : req.body.username});

        if(!doctor || doctor.password != req.body.password){
            return res.json(422,{
                'message' : "Invalid Credentials"
            })
        }

        return res.json(200,{
            'message' : "Signed In Successfully",
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
        let doctor = await Doctor.findOne({ 'username': req.body.username });

        if (doctor) {
            return res.json(422, {
                "message ": "Already registered, try with other details:)"
            });
        }
        else {
            let newDoc = await Doctor.create(req.body);

            if (newDoc) {
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