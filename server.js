// imports and requires
const express = require('express');
const app = express();

// setup and settings
// sets express to read and understand incoming json post data
app.use(express.json());


// routes
// catch all
require('./config/routes')(app);


// server listener
app.listen(8008, () => {
    console.log("Listening on port 8008 for basic express!")
})