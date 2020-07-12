const express = require('express');
const app = express();
const passport = require('passport');
const db = require('./config/mongoose');

const port = 8000;

app.listen(port,(err)=>{
    if(err){
        console.log("Error in running server :/",err);
        return;
    }



    console.log(`Server is Up at : http://localhost:${port}` );
})