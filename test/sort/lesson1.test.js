import sortArrayByParityII from '../../code/sort/lesson1'

test('按奇偶排序数组 II', () => {
  expect(sortArrayByParityII([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([
    2,
    1,
    4,
    3,
    6,
    5,
    8,
    7
  ])
})
