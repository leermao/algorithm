/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 *
 * 面试题06. 从尾到头打印链表
 *
 * https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 */
var reversePrint = function (head) {
  const stack = []
  let node = head
  while (node) {
    stack.push(node.val)
    node = node.next
  }
  return stack.reverse()
}

export default reversePrint
