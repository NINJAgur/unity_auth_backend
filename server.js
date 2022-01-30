const express = require('express');
const app = express();
const keys = require('./config/keys.js')

// setting up DB
const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI , {useNewUrlParser : true, useUnifiedTopology : true});

// Setup DB models
require('./model/Account');

//Setup the Routes
require('./routes/authenticationRoutes')(app);


app.listen(keys.port, () => {
    console.log("listening on port " + keys.port);
});

