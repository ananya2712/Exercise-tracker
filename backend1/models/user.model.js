const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userinfo = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  }, 
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8
  },
});

const User = mongoose.model('UserInfo', userinfo);

module.exports = User;