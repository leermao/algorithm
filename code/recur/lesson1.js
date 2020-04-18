/**
 * @param {string} s
 * @return {string[]}
 *
 * 复原IP地址
 *
 *
 * https://leetcode-cn.com/problems/restore-ip-addresses/
 */
var restoreIpAddresses = function (s) {
  const r = []

  const search = (arr, subStr) => {
    if (arr.length === 4 && arr.join('') === s) {
      r.push(arr.join('.'))
    } else {
      for (let i = 0; i < Math.min(3, subStr.length); i++) {
        const res = subStr.substr(0, i + 1)

        if (res < 256) {
          search(arr.concat([res]), subStr.substr(i + 1))
        }
      }
    }
  }

  search([], s)

  return r
}

export default restoreIpAddresses
