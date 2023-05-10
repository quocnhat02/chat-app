const express = require('express');
const {
  registerUser,
  loginUser,
  getAllUsers,
} = require('../controller/userController');

const router = express.Router();

router.route('/').post(registerUser).get(getAllUsers);

router.route('/login').post(loginUser);

module.exports = router;
