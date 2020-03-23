// https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/

var hasGroupsSizeX = function (deck) {
  let tmp = {}
  deck.forEach(item => {
    tmp[item] = tmp[item] ? tmp[item] + 1 : 1
  })
  let group = Object.values(tmp).reduce((arr, item) => {
    arr.push(item)
    return arr
  }, [])
  let gcd = (a, b) => {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }
  while (group.length > 1) {
    let a = group.shift()
    let b = group.shift()
    let v = gcd(a, b)
    if (v === 1) {
      return false
    } else {
      group.unshift(v)
    }
  }
  return group.length ? group[0] > 1 : false
}

export default hasGroupsSizeX
