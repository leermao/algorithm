import findSubstring from '../../code/recur/lesson2.js'

test('串联所有单词的子串:1', () => {
  expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9])
})

test('串联所有单词的子串:2', () => {
  expect(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])).toEqual([])
})
