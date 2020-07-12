const express = require('express');
const app = express();

const db = require('./config/mongoose');

const passport = require('passport');
const jwtStrategy = require('./config/passportJWTStrategy');


app.use(express.urlencoded({extended : true}));
app.use('/',require('./routes/index'));


const port = 8000;

app.listen(port,(err)=>{
    if(err){
        console.log("Error in running server :/",err);
        return;
    }



    console.log(`Server is Up at : http://localhost:${port}` );
})