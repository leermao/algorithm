/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 面试题53 - I. 在排序数组中查找数字 I
 *
 * https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
 */
var search = function (nums, target) {
  const searchLeft = (arr, target) => {
    let start = -1
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
        start = mid
        right = mid - 1 // important
      } else if (nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    return start
  }

  const searchRight = (arr, target) => {
    let end = -1
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
        end = mid
        left = mid + 1 // important
      } else if (nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    return end
  }

  return searchLeft(nums, target) <= searchRight(nums, target) && searchLeft(nums, target) !== -1 ? searchRight(nums, target) - searchLeft(nums, target) + 1 : 0
}

export default search
