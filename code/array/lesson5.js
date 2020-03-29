/**
 * 环形打印数组内容
 */
var ringArr = function (arr) {
  let res

  while (arr.length) {
    res = res ? res.concat(arr.shift()) : arr.shift()
    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i].pop())
    }
    res = res.concat((arr.pop() || []).reverse())
    for (let index = arr.length - 1; index >= 0; index--) {
      res.push(arr[index].shift())
    }
  }

  return res
}

export default ringArr
