
function three (n) {
  return (n % 3) === 0
}

function five (n) {
  return (n % 5) === 0
}

function problem1 () {
  var i = 2
    , l = 1000
    , sum = 0

  while (++i < l) {
    if (three(i) || five(i)) {
      sum += i
    }
  }

  return sum
}

module.exports = problem1
