const express = require('express');
const {
  registerUser,
  loginUser,
  getAllUsers,
} = require('../controller/userController');
const protectRoute = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(registerUser).get(protectRoute, getAllUsers);

router.route('/login').post(loginUser);

module.exports = router;
