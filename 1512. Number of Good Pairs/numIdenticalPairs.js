function numIdenticalPairs(nums) {
  let output = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        output += 1
      }
    }
  }
  return output
}

module.exports = numIdenticalPairs