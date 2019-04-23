const path = require('path')

const SERVER_CONFIGS = {
  PRODUCTION: process.env.NODE_ENV === 'production',
  PORT: process.env.PORT
}

module.exports = SERVER_CONFIGS
