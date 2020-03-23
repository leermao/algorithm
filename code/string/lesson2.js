// https://leetcode-cn.com/problems/count-binary-substrings/

export default (str) => {
  const resArr = []
  const matchTureStr = (sliceStr) => {
    const startStr = sliceStr.match(/^(0+|1+)/)[0]
    const operatorsStartStr = String(startStr[0] ^ 1).repeat(startStr.length)
    const resStr = startStr + operatorsStartStr

    return sliceStr.startsWith(resStr)
  }

  for (let index = 0; index < str.length - 1; index++) {
    const res = matchTureStr(str.slice(index))
    if (res) {
      resArr.push(res)
    }
  }
  return resArr.length
}
