'use strict'

const crypto = require('crypto')
const { User } = require('../models')

/**
 * @author Henry Kim <tjdgnsnq133@gmail.com>
 */

module.exports = async (req, res) => {
  let { name, password, gender } = req.body
  gender = gender.toLowerCase() === 'f'
  const user = await User.findOne({ name })
  if (user) return res.status(409).end()
  const salt = `1${Date.now()}1`
  await new User({
    name,
    password: crypto.createHmac('sha256', salt)
      .update(password)
      .digest('hex'),
    salt,
    gender
  }).save()
  res.end()
}
