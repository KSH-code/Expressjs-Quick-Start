/* global describe, it */
'use strict'

/**
 * @author Henry Kim <tjdgnsnq133@gmail.com>
 */
const mongoose = require('mongoose')

module.exports = () => {
  describe('register', () => {
    it('test', async () => {
      await new Promise(resolve => mongoose.connection.on('connected', resolve))
      await mongoose.connection.db.dropDatabase()
    })
  })
}
