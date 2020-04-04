/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 *
 * 旋转图像
 *
 * https://leetcode-cn.com/problems/rotate-image/
 */
var rotate = function (matrix) {
  const len = matrix.length;

  for (let i = 0; i < matrix.length / 2; i++) {
    for (let j = 0; j < matrix.length; j++) {
      const element = matrix[i][j];
      matrix[i][j] = matrix[len - i - 1][j];
      matrix[len - i - 1][j] = element;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      const element = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = element;
    }
  }

  return matrix;
};

export default rotate;
