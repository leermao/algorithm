/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 面试题12. 矩阵中的路径
 *
 * https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/
 */
var exist = function (board, word) {
  const rows = board.length
  const colums = board[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < colums; j++) {
      if (board[i][j].toString() === word[0].toString()) {
        const isExist = _exist(board, word, i, j, {})
        if (isExist) return true
      }
    }
  }

  return false
}

function _exist (board, word, row, col, visited) {
  console.log(word, row, col)
  if (!word.length) {
    return true
  }

  const key = `${row}-${col}`
  if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || visited[key] || board[row][col] !== word[0]) {
    return false
  }

  word = word.slice(1)
  visited[key] = true

  const res = _exist(board, word, row + 1, col, visited) || _exist(board, word, row - 1, col, visited) || _exist(board, word, row, col - 1, visited) || _exist(board, word, row, col + 1, visited)

  visited[key] = res
  return res
}

let board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']]
let word = 'BCCED'

console.log(exist(board, word))
