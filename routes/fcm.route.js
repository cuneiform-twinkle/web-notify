const express = require("express");
const router = express.Router();


const fcmController = require('../controllers/fcm.controller');


router.post('/send-all-notification', fcmController.sendAllNotification);
router.post('/send-notification-to-token', fcmController.sendNotificationToToken);
// router.post('/send-notification-to-topic', fcmController.sendNotificationToTopic);
// router.post('/subscribe-to-topic', fcmController.subscribeToTopic);
// router.post('/unsubscribe-to-topic', fcmController.unSubscribeToTopic);

module.exports = router;
