/**
 * @param {number[]} nums
 * @return {number}
 *
 * 面试题53 - II. 0～n-1中缺失的数字
 *
 * https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
 */
var missingNumber = function (nums) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (mid === nums[mid]) {
      left = mid + 1
    } else if (mid < nums[mid]) {
      right = mid - 1
    }
  }

  return left
}

console.log(missingNumber([0, 2, 3]))
