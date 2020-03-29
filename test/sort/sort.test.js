import { bubbling, seletcion, quick } from '../../code/sort/sort'

test('冒泡排序', () => {
  expect(bubbling([9, 2, 4, 3, 6, 7, 8, 5, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('选择排序', () => {
  expect(seletcion([9, 2, 4, 3, 6, 7, 8, 5, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('快速排序', () => {
  expect(quick([9, 2, 4, 3, 6, 7, 8, 5, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})
