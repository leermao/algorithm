/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 *
 * 二维数组中的查找
 *
 * https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 */
var findNumberIn2DArray = function (matrix, target) {
  let maxLine = matrix.length
  let maxColumn = matrix[0] ? matrix[0].length : []
  let c = maxColumn
  let l = 0

  while (l < maxLine && c > 0) {
    if (matrix[l][c - 1] === target) {
      return true
    } else if (matrix[l][c - 1] > target) {
      c--
    } else {
      l++
    }
  }

  return false
}

export default findNumberIn2DArray
