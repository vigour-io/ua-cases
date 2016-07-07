'use strict'
const ua = require('vigour-ua')
const fields = [
  'android', 'chromecast', 'desktop', 'ios',
  'cordova', 'phone', 'tablet', 'touch', 'tv'
]
/**
 * @id cases
 * @function cases
 * Returns a cases object bases on the user agent including data such as browser, device and platform
 * @param {string|object} useragent - user agent string or vigour-ua object
 * @param {object} cases - (optional) object to be merged to the output result
 * @param {function} transform - (optional) function to modify the cases object before it's returned
 * @returns {object} obj cases object
 */
module.exports = function uacases (useragent, cases, transform) {
  if (typeof cases !== 'object') {
    cases = {}
  }
  if (typeof useragent === 'string') {
    useragent = ua(useragent)
  }
  for (let i = fields.length - 1; i >= 0; i--) {
    let str = fields[i]
    cases['$' + str] = useragent.device === str || useragent.platform === str || useragent.webview === str
  }
  if (transform) {
    cases = transform(cases, useragent)
  }
  return cases
}
