const express = require('express');
const router = express.Router();
const authController = require('./AuthController');
router.post('/auth/register', authController.register);
router.post('/auth/activate', authController.activate);
router.post('/auth/login', authController.login);
router.post('/auth/activate', authController.activate);
module.exports = router;