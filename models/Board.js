'use strict'

/**
 * @author Henry Kim <tjdgnsnq133@gmail.com>
 */
const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
  title: String,
  contents: String,
  files: Array
})

module.exports = mongoose.model('Board', boardSchema)
