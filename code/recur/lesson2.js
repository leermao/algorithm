/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 *
 * 串联所有单词的子串
 *
 *
 * https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
 */
var findSubstring = function (s, words) {
  const result = []
  const len = words.length
  const repeat = (r, arr) => {
    if (r.length === len) {
      result.push(r)
    } else {
      arr.forEach((item, idx) => {
        const _arr = [...arr]
        _arr.splice(idx, 1)

        repeat([...r, item], _arr)
      })
    }
  }
  repeat([], words)

  return result.map(item => {
    return s.indexOf(item.join(''))
  }).filter(item => item > -1).sort()
}

export default findSubstring
