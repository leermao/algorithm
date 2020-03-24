/**
 * @param {number} n
 * @return {number[]}
 * [格雷编码](https://leetcode-cn.com/problems/gray-code/)
 */
var grayCode = function (n) {
  const make = (n) => {
    if (n === 0) return [0]

    if (n === 1) return [0, 1]

    const proVal = make(n - 1)
    const max = Math.pow(2, n) - 1
    const res = []
    for (let i = 0; i < proVal.length; i++) {
      res[i] = `0${proVal[i]}`
      res[max - i] = `1${proVal[i]}`
    }

    return res
  }

  return make(n).map(item => parseInt(item, 2))
}

export default grayCode
