'use strict'

const { User } = require('../models')

/**
 * @author Henry Kim <tjdgnsnq133@gmail.com>
 */

module.exports = async (req, res) => {
  let { name, password } = req.body
  const user = await User.findOne({ name, password })
  if (!user) return res.status(400).end()
  res.end()
}
