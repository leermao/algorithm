import findNumberIn2DArray from '../../code/matrix/lesson2.js'

const arr = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
test('二维数组中的查找:1', () => {
  expect(
    findNumberIn2DArray(arr, 5)
  ).toBe(true)
})

test('二维数组中的查找:2', () => {
  expect(
    findNumberIn2DArray(arr, 19)
  ).toBe(true)
})

test('二维数组中的查找:3', () => {
  expect(
    findNumberIn2DArray(arr, 20)
  ).toBe(false)
})
