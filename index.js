'use strict'
const ua = require('vigour-ua')
const fields = [
  'android', 'chromecast', 'desktop', 'ios', 'mac',
  'native', 'phone', 'tablet', 'touch', 'tv'
]
module.exports = function cases (useragent, cases, transform) {
  if (typeof cases !== 'object') {
    cases = {}
  }
  if (typeof useragent === 'string') {
    useragent = ua(useragent)
  }
  for (let i = fields.length - 1; i >= 0; i--) {
    let str = fields[i]
    cases['$' + str] = useragent.device === str || useragent.platform === str
  }
  if (transform) {
    cases = transform(cases, useragent)
  }
  return cases
}
