// Checking the status of the report of the patients

const Report = require('../../../models/report');

module.exports.status = async (req,res)=>{

    try {
        let reports = await Report.find({
            status : req.params.status
        }).populate('Patient');

        if(reports.length == 0){
            return res.json(200,{
                'message' : 'No reports associated with thsi status'
            })
        }else{
            return res.json(200,reports);
        }
    } catch (err) {
        if(err){
            return res.json(500,{
                'message' : "Internal Server Error"
            })
        }
    }
}