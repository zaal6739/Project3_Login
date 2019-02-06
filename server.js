const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport=require('passport');

//find api routes for the users
const users = require('./routes/api/users');

//set up the app to use express
const app = express();

//bodyparser middleware
app.use (
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

//database keys (config)
const db = require("./config/keys").mongoURI;

//connection to the database
mongoose
.connect (
        db,{useNewUrlParser:true}
        )
.then(()=>console.log("Hell Yes, Connected"))
.catch(err =>console.log(err));

//Passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport"(passport))

//route to the users
app.use('./api/users',users);

//use either heroku's port or a local port 5000
const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Server up and running on port ${port}!`));