const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register');
const loginController = require('../controllers/login');


router.post('/register', registerController.registerUser);


router.post('/login', loginController.loginUser);

module.exports = router;