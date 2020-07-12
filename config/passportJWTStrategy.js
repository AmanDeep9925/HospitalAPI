const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;
const extractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctor');

let opts =  {
    jwsFromRequest : extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : "thisKeyIsASecretKey"
};

passport.use(new jwtStrategy(opts,(payload,done)=>{
    Doctor.findById(payload._id,(err,doctor)=>{
        if(err){
            console.log("Error in finding the info about doctor");
            return;
        }else if(doctor){
            return done(null,user);
        }else{
            return done(null,false);
        }
    })
}))

module.exports = passport;