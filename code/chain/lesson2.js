/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 *  环形链表
 *
 * https://leetcode-cn.com/problems/linked-list-cycle/
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) return false
  var slow = head
  var fast = head.next
  while (slow !== fast) {
    if (fast === null || fast.next === null) return false
    slow = slow.next
    fast = fast.next.next
  }
  return true
}

// var hasCycle = function (head) {
//   let dataMap = new Map()
//   while (head) {
//     if (dataMap.has(head)) {
//       return true
//     }
//     dataMap.set(head, 1)
//     head = head.next
//   }
//   return false
// };

export default hasCycle
