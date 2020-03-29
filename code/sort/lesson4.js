/**
 * @param {number[]} nums
 * @return {number}
 * 缺失的第一个正数
 *
 * https://leetcode-cn.com/problems/first-missing-positive/
 */
var firstMissingPositive = function (nums) {
  nums = nums.filter(item => item > 0)
  if (nums.length) {
    for (let i = 0; i < nums.length; i++) {
      let min = nums[i]

      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < min) {
          let tmp = min
          min = nums[j]
          nums[j] = tmp
        }
      }
      nums[i] = min

      if (nums[0] !== 1) {
        return 1
      }

      if (i > 0) {
        if (nums[i] - nums[i - 1] > 1) {
          return nums[i - 1] + 1
        }
      }
    }

    return nums.length ? nums.pop() + 1 : 1
  } else {
    return 1
  }
}

export default firstMissingPositive
