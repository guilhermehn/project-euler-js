var expect = require('expect.js')
  , _ = require('fundash')
  , lib = require('../lib')
  , primes = require('./seeds/primes')

describe('lib', function () {
  describe('isPrime()', function () {
    it('should return true if the number is prime', function () {
      expect(_.every(lib.isPrime, primes)).ok()
    })
  })
})
