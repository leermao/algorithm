import firstMissingPositive from '../../code/sort/lesson4'

test('缺失的第一个正数', () => {
  expect(firstMissingPositive([1, 2, 0])).toEqual(3)
})

test('缺失的第一个正数1', () => {
  expect(firstMissingPositive([7, 8, 9, 11, 12])).toEqual(1)
})

test('缺失的第一个正数2', () => {
  expect(firstMissingPositive([3, 4, -1, 1])).toEqual(2)
})
