'use strict'

/**
 * node modules
 */

const axios = require('axios').default;
const crypto = require('crypto')

require('dotenv').config();

const cryptomus = axios.create({
    baseURL: 'https://api.crytomus.com/vi'
})

const DEFAULT_CURRENCY = 'USD';

const createInvoice = async (amount)=>{

    try {
   
    } catch (error) {
        console.error(error);
        throw error;
    }

}

module.exports = { createInvoice }