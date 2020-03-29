/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 数组中的第K个最大元素
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 */
var findKthLargest = function (nums, k) {
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
  }

  return nums[nums.length - k]
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))

export default findKthLargest
