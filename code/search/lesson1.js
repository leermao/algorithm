/**
 * @param {number[]} numbers
 * @return {number}
 * 面试题11. 旋转数组的最小数字
 *
 * https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 */
const minArray = nums => {
  if (!nums || !nums.length) { return null }

  let p1 = 0; let p2 = nums.length - 1; let mid = p1

  // 不满足循环条件即特殊情况1，直接返回nums[p1]
  while (nums[p1] >= nums[p2]) {
    if (p2 - p1 === 1) { return nums[p2] }

    let mid = parseInt((p1 + p2) / 2)

    // 特殊情况2：使用顺序查找
    if (nums[p1] === nums[p2] && nums[p1] === nums[mid]) {
      return minNumInOrder(nums, p1, p2)
    }

    if (nums[mid] >= nums[p1]) { p1 = mid } else { p2 = mid }
  }

  return nums[mid]
}

const minNumInOrder = (nums, p1, p2) => {
  let min = nums[p1]
  for (let i = p1 + 1; i < p2; i++) {
    if (min > nums[i]) { min = nums[i] }
  }

  return min
}

export default minArray
