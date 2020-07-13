// Doctor Schema

const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true
    }
},{
    timestamps : true
});

const Doctor = mongoose.model('Doctor',DoctorSchema);

module.exports = Doctor;