// jest.config.integration.js
const config = require('./jest.config')
config.testRegex = 'integration\\.js$' // Overriding testRegex option
// eslint-disable-next-line no-console
console.log('RUNNING INTEGRATION TESTS')
module.exports = config
