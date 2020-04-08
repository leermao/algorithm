import rotate from '../../code/matrix/lesson1.js'

test('旋转图像', () => {
  expect(
    rotate([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])
  ).toEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ])
})
