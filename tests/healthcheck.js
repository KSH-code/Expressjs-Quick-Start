/* global describe, it */
'use strict'

/**
 * @author Henry Kim <tjdgnsnq133@gmail.com>
 */
const request = require('request')

module.exports = ({ expect, url, method }) => {
  describe('healthcheck', () => {
    it('test', done => {
      request[method](url, {}, (err, res, body) => {
        if (err) return done(err)
        body = JSON.parse(body)
        expect(body).to.deep.equal({})
        done()
      })
    })
  })
}
