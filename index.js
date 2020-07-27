// Accessing the express
const express = require('express');
const app = express();

// Requiring the mongoose configuration
const db = require('./config/mongoose');

// Passport configurations
const passport = require('passport');
// for JWT strategies
const jwtStrategy = require('./config/passportJWTStrategy');

// URL encoding
app.use(express.urlencoded({extended : true}));
// Routes for the API
app.use('/',require('./routes/index'));

// Port for server
const port = 8000;

// starting the server
app.listen(port,(err)=>{
    if(err){
        console.log("Error in running server :/",err);
        return;
    }
    console.log(`Server is Up at : http://localhost:${port}` );
})

module.exports = app;