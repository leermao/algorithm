import lemonadeChange from '../../code/greed/lesson2.js'

test('柠檬水找零:1', () => {
  expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true)
})

test('柠檬水找零:2', () => {
  expect(lemonadeChange([5, 5, 10])).toBe(true)
})

test('柠檬水找零:3', () => {
  expect(
    lemonadeChange([10, 10])
  ).toBe(false)
})
