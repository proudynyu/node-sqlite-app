"use strict";

const knexfile = require('../knexfile');
const assert = require('assert');
require('dotenv').config();

const {
    PORT,
    HOST,
    HOST_URL,
    COOKIE_ENCRYPT_PWD
} = process.env;

const development = knexfile.development;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');
assert(HOST_URL, 'HOST_URL is required');
assert(COOKIE_ENCRYPT_PWD, 'COOKIE_ENCRYPT_PWD is required');
assert(development, 'knexfile.development is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    cookiePwd: COOKIE_ENCRYPT_PWD,
    sqlite: {
        client: development.client,
        connection: development.connection,
    }
}