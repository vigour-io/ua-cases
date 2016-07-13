'use strict'
const test = require('tape')
const c = require('../')
const useragent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.3'

test('ua cases object', function (t) {
  const expected = {
    $android: false,
    $chromecast: false,
    $desktop: true,
    $ios: false,
    $native: false,
    $phone: false,
    $tablet: false,
    $touch: false,
    $tv: false,
    $ie: false,
    $edge: false
  }

  t.same(c(useragent), expected,
    'create correct cases object')

  const cases = {
    $oneThing: true,
    $anotherThing: false
  }

  expected.$oneThing = true
  expected.$anotherThing = false

  t.same(c(useragent, cases), expected,
    'merge with passed cases object')

  expected.$holyMoly = true

  t.same(c(useragent, cases, (cases, useragent) => {
    cases.$holyMoly = true
    return cases
  }), expected,
    'apply transform')

  t.end()
})
