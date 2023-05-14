const express = require('express');
const protectRoute = require('../middleware/authMiddleware');
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroupChat,
} = require('../controller/chatController');

const router = express.Router();

router.route('/').post(protectRoute, accessChat);
router.route('/').get(protectRoute, fetchChats);
router.route('/group').post(protectRoute, createGroupChat);
router.route('/rename-group').put(protectRoute, renameGroupChat);
// router.route('/group-remove').put(protectRoute, removeFromGroupChat);
// router.route('/group-add').post(protectRoute, addToGroupChat);

module.exports = router;
