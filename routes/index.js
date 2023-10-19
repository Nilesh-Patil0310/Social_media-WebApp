const express = require('express');

// define router
const router = express.Router();

// import home controller.js
const homecontroller = require('../controller/home-comtroller');



// access the homecontroller functions from here
router.get('/', homecontroller.home);

// access the user.js here
router.use('/users', require('./users'));


// export the router to use globlly
module.exports = router;