var _ = require('fundash')

function problem2 () {
  var nums = [1, 2]
    , c = _.sumAll(nums)
    , n

  while (c < 4000000) {
    n = _.last(nums)
    nums[nums.length] = c
    c = c + n
  }

  return _.sumAll(_.filter(_.isEven, nums))
}

module.exports = problem2
