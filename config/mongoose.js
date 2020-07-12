const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1/HospitalApi');

db.on('error',console.error.bind(console,"MongoDB connection error"));

db.once('open',()=>{
    console.log(" *** Connected to the Hospital Database ***");
});

module.exports = db;