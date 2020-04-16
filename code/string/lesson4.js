/**
 * @param {string} s
 * @return {string}
 *
 * 替换空格
 *
 *
 * https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 */
var replaceSpace = function (s) {
  let len = s.length - 1
  let space = 0

  for (let i = 0; i <= len; i++) {
    if (s[i] === ' ') {
      space++
    }
  }

  let newLen = len + space * 2
  const arr = []

  while (newLen >= 0 && len >= 0) {
    if (s[len] === ' ') {
      arr[newLen--] = '0'
      arr[newLen--] = '2'
      arr[newLen--] = '%'
    } else {
      arr[newLen] = s[len]
      newLen--
    }

    len--
  }

  return arr.join('')
}

export default replaceSpace
