function runningSum(nums) {
    let output = []
    let temp = 0
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            temp = nums[i]
        } else {
            temp += nums[i]
        }
        output.push(temp)
    }
    return output
}

module.exports = runningSum