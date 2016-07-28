'use strict'
const ua = require('vigour-ua')
const fields = [
  'native',
  'android', 'ios', 'windows',
  'phone', 'tablet', 'touch',
  'desktop',
  'chromecast',
  'tv',
  'ie', 'ie10', 'edge', 'chrome'
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
  console.log('uaaaaa!')
  console.log(useragent) // first in long

  if (typeof cases !== 'object') {
    cases = {}
  }
  if (typeof useragent === 'string') {
    useragent = ua(useragent)
  }
  for (let i = fields.length - 1; i >= 0; i--) {
    let str = fields[i]
    cases['$' + str] = useragent.device === str ||
      useragent.platform === str || useragent.browser === str ||
      (useragent.browser + useragent.version) === str
  }
  if (useragent.webview) {
    cases.$native = true
  }
  if (transform) {
    cases = transform(cases, useragent)
  }
  return cases
}

// Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136
