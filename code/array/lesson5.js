/**
 * @param {number[][]} matrix
 * @return {number[]}
 *
 * 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/
 */
var spiralOrder = function (arr) {
  if (arr.length === 0) return []
  let res

  while (arr.length) {
    res = res ? res.concat(arr.shift()) : arr.shift()
    arr = arr.filter(item => item.length)
    for (let i = 0; i < arr.length; i++) {
      const pop = arr[i].pop()
      res.push(pop)
    }
    arr = arr.filter(item => item.length)
    res = res.concat((arr.pop() || []).reverse())
    arr = arr.filter(item => item.length)
    if (arr.length) {
      for (let index = arr.length - 1; index >= 0; index--) {
        res.push(arr[index].shift())
      }
    }
    arr = arr.filter(item => item.length)
  }

  return res
}
export default spiralOrder
