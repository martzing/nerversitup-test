const oddNumber = (nums) => {
    if (nums.length === 0) return null
    let result = nums[0]
    for (let i = 1; i < nums.length; i++) {
        result = result ^ nums[i]
    }
    return result
}

module.exports = { oddNumber }
