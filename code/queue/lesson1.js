/**
 * 循环队列
 *
 * https://leetcode-cn.com/problems/design-circular-queue/
 */
export default class MyCircularQueue {
  constructor(k) {
    this.list = new Array(k);
    this.front = 0;
    this.rear = 0;

    this.max = k;
  }

  Front() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.list[this.front];
  }

  Rear() {
    if (this.isEmpty()) {
      return -1;
    }

    const rear = this.rear - 1;
    return this.list[rear < 0 ? this.max - 1 : rear];
  }

  enQueue(value) {
    if (this.isFull()) {
      return false;
    } else {
      this.list[this.rear] = value;
      this.rear = (this.rear + 1) % this.max;

      return true;
    }
  }

  deQueue() {
    if (this.isEmpty()) {
      return false;
    } else {
      this.list[this.front] = "";
      this.front = (this.front + 1) % this.max;

      return true;
    }
  }

  isEmpty() {
    return this.front === this.rear && !this.list[this.front];
  }

  isFull() {
    return this.front === this.rear && !!this.list[this.front];
  }
}
