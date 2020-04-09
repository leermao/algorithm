/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 *  不同路径 II
 *
 * https://leetcode-cn.com/problems/unique-paths-ii/
 */
var uniquePathsWithObstacles = function (obstacleGrid, m, n) {
  if (m === 2 && n === 2) {
    if (obstacleGrid[1][1] === 1 || obstacleGrid[1][0] + obstacleGrid[0][1] === 2) {
      return 0
    } else if (obstacleGrid[1][0] + obstacleGrid[0][1] === 1) {
      return 1
    } else {
      return 2
    }
  } else if (m === 1 || n === 1) {
    if (m === 1) {
      return obstacleGrid[m - 1].includes(1) ? 0 : 1
    } else {
      for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) {
          return 0
        }
      }

      return 1
    }
  } else {
    return uniquePathsWithObstacles(obstacleGrid, m - 1, n) + uniquePathsWithObstacles(obstacleGrid, m, n - 1)
  }
}

console.log(uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
], 3, 3))

export default uniquePathsWithObstacles
