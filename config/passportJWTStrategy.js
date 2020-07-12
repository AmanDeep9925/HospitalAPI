const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/doctor');

let opts = {
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'ThisIsSecret'
}

passport.use(new JWTStrategy(opts,(jwtPayload,done)=>{
    Doctor.findById(jwtPayload._id,(err,doctor)=>{
        if(err){
            console.log("Error in establishing JWT");
            return;
        }else if(doctor){
            return done(null,user);
        }else{
            return done(null,false);
        }
    })
}))

module.exports = passport;