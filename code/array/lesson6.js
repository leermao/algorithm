/**
 * @param {number[]} nums
 * @return {number}
 *
 * 面试题03. 数组中重复的数字
 *
 * https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 */

const findRepeatNumber = (nums) => {
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return nums[i]
    } else {
      obj[nums[i]] = true
    }
  }
}

const findRepeatNumber1 = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (i !== num && num === nums[num]) {
      return num
    }

    [nums[i], nums[num]] = [nums[num], nums[i]]
  }
}

export {
  findRepeatNumber,
  findRepeatNumber1
}
