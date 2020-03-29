import maximumGap from '../../code/sort/lesson3'

test('最大间距', () => {
  expect(maximumGap([3, 6, 12, 1])).toEqual(6)
})

test('最大间距1', () => {
  expect(maximumGap([10])).toEqual(0)
})
