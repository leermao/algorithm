// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

var letterCombinations = function (digits) {
  const maps = {
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  const arrMerge = (a, b) => {
    if (a.length === 0) return b
    const res = a.reduce((pre, next) => {
      const newB = b.map(item => `${next}${item}`)
      return [...pre, ...newB]
    }, [])
    return res
  }

  const res = digits.split('').reduce((a, b) => {
    const res = arrMerge(a, maps[b].split(''))
    return res
  }, [])
  return res
}

export default letterCombinations
