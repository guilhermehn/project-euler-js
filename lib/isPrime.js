var isEven = require('fundash/lib/isEven')

function isPrime (n) {
  var half = n / 2
    , i = 2
    , valid = true
    , possible = [3, 5, 7, 11, 13]

  if (possible.indexOf(n) === -1) {
    return true
  }
  else if (n < 2 || isEven(n)) {
    return false
  }

  while (++i <= half) {
    if (half % i === 0) {
      return false
    }
  }

  return true
}

module.exports = isPrime
