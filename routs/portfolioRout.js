

const express = require('express');
const router = express.Router();
const { emailSendController } = require('../controllers/portfolioController');


router.post('/send-email', emailSendController);

module.exports = router;