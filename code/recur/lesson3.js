/**
 * @param {number} n
 * @return {number}
 * 面试题10- I. 斐波那契数列
 *
 *
 * https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 * https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
 */
// 超时
// var numWays = function (n) {
//   if (n == 0) return 0

//   if (n == 1) return 1

//   return numWays(n - 1) + numWays(n - 2)
// }

var numWays = function (n) {
  const arr = [1, 1, 2]

  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007
  }

  console.log(arr)

  return arr[n]
}

console.log(numWays(4))
