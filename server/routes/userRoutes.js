const express = require('express');
const {
  registerUser,
  authUser,
} = require('../controller/userController');

const router = express.Router();

router.route('/').post(registerUser);

router.route('/login').get(authUser);

module.exports = router;
