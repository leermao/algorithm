/**
 * @param {string[]} ops
 * @return {number}
 * 棒球比赛
 *
 * https://leetcode-cn.com/problems/baseball-game/
 */
var calPoints = function (ops) {
  const res = []

  ops.forEach(item => {
    dealItem(item)
  })

  function dealItem (item) {
    switch (item) {
      case 'C':
        if (res.length) {
          res.pop()
        }
        break
      case 'D':
        const popData = res.pop()
        res.push(popData, popData * 2)
        break
      case '+':
        const popData1 = res.pop()
        const popData2 = res.pop()
        res.push(popData2, popData1, popData2 + popData1)
        break

      default:
        res.push(item * 1)
        break
    }
  }

  return res.reduce((pre, cur) => pre + cur, 0)
}

export default calPoints
