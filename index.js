'use strict'

/**
 * @author Henry Kim <tjdgnsnq133@gmail.com>
 */
const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const asyncify = require('express-asyncify')
const mongoose = require('mongoose')
const routes = require('./route.json')

mongoose.connect('mongodb://localhost/midas')

const app = asyncify(express())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())

routes.forEach(routeConfig => {
  const { path, method, handlers } = routeConfig
  const requireList = []
  handlers.forEach(fileName => requireList.push(require(`./handlers/${fileName}`)))
  app[method](path, ...requireList)
})

module.exports = app.listen(7070)
