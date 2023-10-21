const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codial_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to Mongodb'));

db.once('open', function(){
    console.log('connected to dadabase:: mongodb');
});

module.exports = db;