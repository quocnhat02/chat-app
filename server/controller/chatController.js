const asyncHandler = require('express-async-handler');
const Chat = require('../model/chatModel');

const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    console.log('UserId params not sent with request');
    return res.sendStatus(400);
  }

  // Find an existing chat between the two users
  let isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      {
        users: {
          $elemMatch: {
            $eq: req.user._id,
          },
        },
      },
      {
        users: {
          $elemMatch: {
            $eq: userId,
          },
        },
      },
    ],
  })
    .populate('users', '-password')
    .populate('latestMessage.sender');

  if (isChat.length > 0) {
    return res.send(isChat[0]);
  } else {
    // Create a new chat between the two users
    let chatData = {
      chatName: 'sender',
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);

      const fullChat = await Chat.findOne({
        _id: createdChat._id,
      }).populate('users', '-password');

      return res.status(200).send(fullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

const fetchChats = asyncHandler(async (req, res) => {});

module.exports = { accessChat, fetchChats };
