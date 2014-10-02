var expect = require('expect.js')
  , problems = require('../problems')
  , solutions = require('./solutions')
  , _ = require('fundash')
  , util = require('util')

function str (s) {
  return '' + s
}

_.forEach(function (s, i) {
  describe(util.format('Problem %s:', i + 1), function () {
    it(str(solutions[s]), function () {
      expect(problems[str(i + 1)]()).to.be(solutions[s])
    })
  })
}, _.keys(solutions))
