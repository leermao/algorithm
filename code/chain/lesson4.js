/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 面试题22. 链表中倒数第k个节点
 *
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var getKthFromEnd = function (head, k) {
  let firstHead = head
  let secondHead = head

  if (head.val === null) {
    return null
  }

  for (let i = 0; i < k; i++) {
    if (secondHead === null) {
      return null
    } else {
      secondHead = secondHead.next
    }
  }

  while (secondHead) {
    secondHead = secondHead.next
    firstHead = firstHead.next
  }

  return firstHead
}

export default getKthFromEnd
