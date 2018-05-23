'use strict'

/**
 * @author Henry Kim <tjdgnsnq133@gmail.com>
 */

module.exports = async (req, res) => {
  req.session.destroy()
  res.end()
}
