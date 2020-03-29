import findKthLargest from '../../code/sort/lesson2'

test('数组中的第K个最大元素', () => {
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toEqual(5)
})

test('数组中的第K个最大元素1', () => {
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toEqual(4)
})
