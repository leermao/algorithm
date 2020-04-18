/**
 * 面试题09. 用两个栈实现队列
 *
 * https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 */
class CQueue {
  constructor () {
    this.stack1 = []
    this.stack2 = []
  }

  appendTail (value) {
    this.stack1.push(value)
  }

  deleteHead () {
    if (!this.stack1.length && !this.stack2.length) {
      return -1
    }

    if (this.stack2.length) {
      return this.stack2.pop()
    }

    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }

    return this.stack2.pop()
  }
}

const q = new CQueue()
q.appendTail(1)
q.appendTail(2)
q.appendTail(3)
q.appendTail(4)

console.log(q.deleteHead())
