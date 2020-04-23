/**
 * @param {number[]} nums
 * @return {number}
 * 面试题39. 数组中出现次数超过一半的数字
 *
 * https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/
 */
var majorityElement = function (nums) {
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]

    obj[element] = obj[element] ? obj[element] + 1 : 1
  }

  const res = Object.entries(obj).find(item => {
    return item[1] >= nums.length / 2
  })

  return res ? res[0] : 0
}

console.log(majorityElement([1, 2, 3, 4, 4, 4, 3, 3, 4, 4, 4]))
