/**
 * 一个m行n列的方格
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 *
 * 面试题13. 机器人的运动范围
 *
 * https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
 */
var movingCount = function (m, n, k) {
  const dp = {}

  const conut = getCount(m, n, 0, 0, k, dp)
  return conut
}

function getCount (rows, columns, row, column, k, dp) {
  let count = 0

  if (row < 0 || column < 0 || row >= rows || column >= columns) return 0

  const numberConditions = getSum(row) + getSum(column) <= k
  const toStr = JSON.stringify([row, column])

  if (numberConditions && !dp[toStr]) {
    console.log(row, column, rows, columns)
    dp[toStr] = true
    count = 1 + getCount(rows, columns, row - 1, column, k, dp) + getCount(rows, columns, row + 1, column, k, dp) + getCount(rows, columns, row, column - 1, k, dp) + getCount(rows, columns, row, column + 1, k, dp)
  }

  return count
}

function getSum (num) {
  let stringAry = num.toString().split('')

  return stringAry.reduce((a, b) => Number(a) + Number(b), 0)
}

console.log(movingCount(1, 2, 1))
