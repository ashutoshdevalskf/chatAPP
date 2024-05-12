const express = require('express');
const router = express.Router();
const chatRoomController = require('../controllers/chatRoomController');

router.post('/create', chatRoomController.createChatRoom);
router.post('/join', chatRoomController.joinChatRoom);

module.exports = router;
