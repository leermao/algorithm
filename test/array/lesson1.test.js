import arrMerge from '../../code/array/lesson1'

test('电话号码牌', () => {
  expect(arrMerge('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})
