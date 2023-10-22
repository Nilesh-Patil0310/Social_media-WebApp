const express = require('express');

const router = express.Router();

const userscontroller = require('../controller/users-controller');

router.get('/profile', userscontroller.profile);

router.get('/sing-up', userscontroller.singUp);

router.get('/sing-in', userscontroller.singIn);

router.post('/create', userscontroller.create);

router.post('/create-session', userscontroller.createSession);




module.exports = router;