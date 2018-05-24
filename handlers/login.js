'use strict'

const crypto = require('crypto')
const { User } = require('../models')

/**
 * @author Henry Kim <tjdgnsnq133@gmail.com>
 */

module.exports = async (req, res) => {
  let { name, password } = req.body
  const user = await User.findOne({ name }).lean(true)
  if (!user || crypto.createHmac('sha256', user.salt)
    .update(password)
    .digest('hex') !== user.password) return res.status(400).end()
  req.session.user = user
  req.session.save()
  res.end()
}
