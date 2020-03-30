import calPoints from '../../code/stack/lesson1'

test('棒球比赛', () => {
  expect(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toEqual(27)
})
