// import express library
const express = require('express');

// define app
const app = express();

// define port
const port = 8000;

// set static for use 
app.use(express.static('./assets'));

// import layouts library
const expressLayouts = require('express-ejs-layouts');

// import db
const db = require('./config/mongoose');

// use layouts
app.use(expressLayouts);

// set to extract the styles and script from sub pages to layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use express router
app.use ('/', require('./routes'));

// setup a template engine and path for it
app.set('view engine', 'ejs');

app.set('views', './views')


// run the server
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
})
