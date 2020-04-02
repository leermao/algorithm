import { NodeList } from '../../code/chain/constructor.js'

import hasCycle from '../../code/chain/lesson2.js'

test('环形链表', () => {
  const head = new NodeList([1, 2, 3, 4, 5, 6, 7])
  head.next.next.next.next.next.next = head.next
  expect(hasCycle(head)).toBe(true)
})
