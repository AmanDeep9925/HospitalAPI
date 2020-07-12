const Pateint = require('../../../models/patient');
const Report = require('../../../models/report');

module.exports.registerpatient = async (req, res) => {
    if (req.body == undefined || req.body.phone == undefined || (req.body.phone > 0 && req.body.phone < 10)) {
        return res.json('200', {
            'message': "Enter valid mobile number for registration"
        })
    }

    try {
        let newPatient = await Pateint.create(req.body)
        if (newPatient) {
            return res.json(200, {
                "message": "Patient Registered"
            })
        }
    } catch (err) {
        if (err) {
            return res.json(500, {
                'message ': "Internal Server Error!"
            });
        }
    }
}

module.exports.createreport = async (req, res) => {


    if (!req.body.status) {
        return res.json(422, {
            'message': "Please mention the status of the report"
        })
    }

    try {
        let patient = await Pateint.findOne({ 'phone': req.params.id });

        if (!patient) {
            return res.json(422, {
                'message': "Patient doesn't exsits"
            });
        } else {
            let newReport = await Report.create({
                "Doctor": req.user.username,
                "Status": req.body.status,
                "Patient": patient._id
            });

            patient.report.push(newReport);
            patient.save();
            return res.json(200, {
                "message": "Report Generated !"
            })
        }
    } catch (err) {
        if (err) {
            return res.json(500, {
                'message ': "Internal Server Error!"
            });
        }
    }
}

module.exports.allreports = async (req, res) => {

    try {
        let patient = await Pateint.findOne({'phone' : id});

        if(!patient){
            return res.json(200,{
                'message' : "Patient doesn't exists"
            });
        }else{
            if(!patient.report){
                return res.json(200,{
                    'message' : "Reports doesn't exists"
                });
            }

            const reports = [];

            for (let i = 0; i < patient.report.length; i++) {
                let report= await Report.findById(patient.report[i]);
                reports.push({
                    "Doctor Name": report.DoctorName,
                    "Patient status": report.Status,
                    "Report Date": report.Date
                });
            }

            return res.json(200,reports);

        }

    } catch (err) {
        if (err) {
            return res.json(500, {
                'message ': "Internal Server Error!"
            });
        }
    }
}