const express = require('express');
const protectRoute = require('../middleware/authMiddleware');
const {
  sendMessage,
  getAllMessage,
} = require('../controller/messageController');

const router = express.Router();

router.route('/').post(protectRoute, sendMessage);
router.route('/:chatId').get(protectRoute, getAllMessage);

module.exports = router;
