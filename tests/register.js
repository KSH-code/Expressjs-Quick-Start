/* global describe, it */
'use strict'

/**
 * @author Henry Kim <tjdgnsnq133@gmail.com>
 */
const request = require('request')

module.exports = ({ expect, url, method }) => {
  describe('register', () => {
    const formData = {
      name: 'tjdgnsqn3',
      password: 'tjdgnsqn3',
      gender: 'f'
    }
    it('정상', done => {
      request[method](url, { formData }, (err, res, body) => {
        if (err) return done(err)
        expect(res.statusCode).to.equal(200)
        done()
      })
    })
    it('실패', done => {
      request[method](url, { formData }, (err, res, body) => {
        if (err) return done(err)
        expect(res.statusCode).to.equal(409)
        done()
      })
    })
  })
}
