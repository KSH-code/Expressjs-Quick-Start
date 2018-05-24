/* global describe, it */
'use strict'

/**
 * @author Henry Kim <tjdgnsnq133@gmail.com>
 */
const request = require('request')

module.exports = ({ expect, url, method }) => {
  describe('login', () => {
    it('정상', done => {
      const formData = {
        name: 'tjdgnsqn3',
        password: 'tjdgnsqn3'
      }
      request[method](url, { formData }, (err, res, body) => {
        if (err) return done(err)
        expect(res.statusCode).to.equal(200)
        done()
      })
    })
    it('실패', done => {
      const formData = {
        name: 'tjdgnsqn3',
        password: 'z'
      }
      request[method](url, { formData }, (err, res, body) => {
        if (err) return done(err)
        expect(res.statusCode).to.equal(400)
        done()
      })
    })
  })
}
