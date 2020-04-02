function ListNode (val) {
  this.val = val
  this.next = null
}
function NodeList (arr) {
  let head = new ListNode(arr.shift())

  let next = head

  arr.map(item => {
    next.next = new ListNode(item)
    next = next.next
  })

  return head
}

export {
  ListNode,
  NodeList
}
