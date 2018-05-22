'use strict'

const { User } = require('../models')

/**
 * @author Henry Kim <tjdgnsnq133@gmail.com>
 */

module.exports = async (req, res) => {
  let { name, password, gender } = req.body
  gender = gender.toLowerCase() === 'f'
  const user = await User.findOne({ name })
  if (user) return res.status(409).end()
  await new User({
    name, password, gender
  }).save()
  res.end()
}
