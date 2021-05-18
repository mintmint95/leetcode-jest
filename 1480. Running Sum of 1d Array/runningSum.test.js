const runningSum = require('./runningSum.js')

describe ('Test function runningSum()', () => {
    test ('[1] Input: nums = [1,2,3,4]', () =>  {
        const input = [1,2,3,4]
        const output = [1,3,6,10]
        expect(runningSum(input)).toStrictEqual(output)
    })

    test ('[2] Input: nums = [1,1,1,1,1]', () =>  {
        const input = [1,1,1,1,1]
        const output = [1,2,3,4,5]
        expect(runningSum(input)).toStrictEqual(output)
    })

    test ('[3] Input: nums = [3,1,2,10,1]', () =>  {
        const input = [3,1,2,10,1]
        const output = [3,4,6,16,17]
        expect(runningSum(input)).toStrictEqual(output)
    })
})