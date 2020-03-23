import canPlaceFlowers from '../../code/array/lesson4'

test('种花问题 1', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true)
})

test('种花问题 2', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false)
})
