import uniquePathsWithObstacles from '../../code/dp/lesson1.js'

test('不同路径 II', () => {
  expect(
    uniquePathsWithObstacles([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ], 3, 3)
  ).toBe(2)
})
