/**
 * @param {number[]} nums
 * @return {number}
 * 最大间距
 *
 * https://leetcode-cn.com/problems/maximum-gap/
 * 桶排序？？？
 */
var maximumGap = function (nums) {
  if (nums.length < 2) {
    return 0
  }

  let max = 0
  for (let index = nums.length - 1; index > 0; index--) {
    for (let j = 0; j < index - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }

    if (index < nums.length - 1) {
      max = Math.max(max, nums[index + 1] - nums[index])
    }
  }

  return Math.max(max, nums[1] - nums[0])
}

export default maximumGap
