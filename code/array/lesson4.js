/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * 种花问题 https://leetcode-cn.com/problems/can-place-flowers/
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (!flowerbed[i - 1] && !flowerbed[i + 1]) {
        count++
        flowerbed[i] = 1
      }
    }
  }
  return n <= count
}

export default canPlaceFlowers
