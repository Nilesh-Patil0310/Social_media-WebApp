// import express library
const express = require('express');

// define app
const app = express();

// define port
const port = 8000;

// use express router

app.use ('/', require('./routes'));

// run the server
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
})
