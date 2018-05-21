'use strict'

const { expect } = require('chai')
const config = require('./config.json')
require('../')

config.forEach(testConfig => require(testConfig.fileName)({ url: testConfig.url, method: testConfig.method, expect }))
