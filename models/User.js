'use strict'

/**
 * @author Henry Kim <tjdgnsnq133@gmail.com>
 */
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  nickname: String,
  level: {
    type: Number,
    default: 0
  },
  gender: Boolean,
  token: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model('User', userSchema)
