const { Router } = require('express');
const router = Router();
const sendMailController = require('../controllers/sendMailController')

router.post('/send', sendMailController.sendMail);



module.exports = router;