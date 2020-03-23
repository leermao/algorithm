// https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/

export default (str) => {
  return str
    .split(' ')
    .reduce((arr, world) => {
      return [...arr, world.split('').reverse().join('')]
    }, [])
    .join(' ')
}
