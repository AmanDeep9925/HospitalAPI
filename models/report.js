// Report Schema

const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({

    doctor : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    patient : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Patient',
        required : true
    }
},{
    timestamps : true
});

const Report = mongoose.model('Report',ReportSchema);

module.exports = Report;