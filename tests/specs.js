var expect = require('expect.js')
  , problems = require('../problems')

describe('Problem 1:', function () {
  it('233168', function () {
    expect(problems['1']()).to.be(233168)
  })
})

describe('Problem 2:', function () {
  it('4613732', function () {
    expect(problems['2']()).to.be(4613732)
  })
})

