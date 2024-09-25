/**
* @license Apache-2.0
* @copyright 2024 codewithsadee
*/

'use strict'

/**
* node modules
*/

const express = require('express');
const helmet = require('helmet')
require('dotenv').config();




/** 
* custom modules
*/

const home = require('./src/routes/home.route')
const checkout = require('./src/routes/checkout.route')    

/**
 * initial express app
 */

const app = express()

/**
 * setting ejs view engine 
 */

app.set('view engine', 'ejs')


/**
 * parse request body
 */

app.use(express.urlencoded({extended:true}))

/**
 * setting public folder 
*/

app.use(express.static(`${__dirname}/public`))

/**
 * setting HTTP response secure Headers
 */

app.use(helmet())

/**
* home  page
*/

app.use('/', home)

/**
* checkout  page
*/

app.use('/checkout',checkout) 

app.listen(process.env.PORT, () => {
  console.log(`appp listening on http://localhost:${process.env.PORT}`);

})

