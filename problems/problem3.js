var lib = require('../lib')
  , _ = require('fundash')
  , isDivisible = function (a, b) { return a % b === 0 }

function problem3 () {
  var num = 600851475143
    , half = Math.ceil(num / 2)
    , i = 2
    , sum = 0
    , multiples = []

  while (half > i) {
    if ((num % half === 0) && lib.isPrime(half)) {
      return half
    }
    half -= 1
  }
}

console.log(problem3())

module.exports = problem3
