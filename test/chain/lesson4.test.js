import { NodeList } from "../../code/chain/constructor.js";

import getKthFromEnd from "../../code/chain/lesson4.js";

test("链表中倒数第k个节点", () => {
  const head = new NodeList([1, 2, 3, 4, 5]);
  const val = new NodeList([4, 5]);
  expect(getKthFromEnd(head, 2)).toEqual(val);
});
