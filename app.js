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

// use layouts
app.use(expressLayouts);

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
