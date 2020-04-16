import replaceSpace from '../../code/string/lesson4'

test(' 替换空格', () => {
  expect(replaceSpace('We are happy.')).toEqual('We%20are%20happy.')
})
