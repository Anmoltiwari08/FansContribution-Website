'use strict'

/**
 * node modules
 */

const router = require('express').Router()

/**
 * custom modules
 */

const { checkout } = require('../controller/checkout.controller')

router.post('/', checkout)

module.exports = router 
