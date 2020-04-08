/**
 * @param {number[]} prices
 * @return {number}
 *
 * 买卖股票的最佳时机 II
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 */
var maxProfit = function (prices) {
  let count = 0

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length - 1; j++) {
      if (prices[j + 1] > prices[j]) {
        count += prices[j + 1] - prices[j]
        i = j
      } else {
        i = j
        break
      }
    }
  }

  return count
}

export default maxProfit
