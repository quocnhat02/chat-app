const express = require('express');
const protectRoute = require('../middleware/authMiddleware');
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroupChat,
  addToGroupChat,
  removeFromGroupChat,
} = require('../controller/chatController');

const router = express.Router();

router.route('/').post(protectRoute, accessChat);
router.route('/').get(protectRoute, fetchChats);
router.route('/group').post(protectRoute, createGroupChat);
router.route('/group-rename').put(protectRoute, renameGroupChat);
router.route('/group-add').put(protectRoute, addToGroupChat);
router.route('/group-remove').put(protectRoute, removeFromGroupChat);

module.exports = router;
