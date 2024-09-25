'use strict'

/**
 * node modules
 */

const router = require('express').Router()


/**
 * custom modules
 */

const {home} = require('../controller/home.controller')

router.get('/',home)

module.exports = router 

