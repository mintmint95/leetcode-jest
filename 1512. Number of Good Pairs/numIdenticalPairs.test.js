const numIdenticalPairs = require('./numIdenticalPairs.js')

describe ('Test function numIdenticalPairs()', () => {
  test ('[1] Input: nums = [1,2,3,1,1,3]', () => {
    const input = [1,2,3,1,1,3]
    expect(numIdenticalPairs(input)).toBe(4)
  })

  test ('[2] Input: nums = [1,1,1,1]', () => {
    const input = [1,1,1,1]
    expect(numIdenticalPairs(input)).toBe(6)
  })

  test ('[3] Input: nums = [1,2,3]', () => {
    const input = [1,2,3]
    expect(numIdenticalPairs(input)).toBe(0)
  })
})