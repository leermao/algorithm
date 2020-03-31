import MyCircularQueue from "../../code/queue/lesson1";

test("循环队列", () => {
  const circularQueue = new MyCircularQueue(3);
  expect(circularQueue.enQueue(1)).toBe(true);
  expect(circularQueue.enQueue(2)).toBe(true);
  expect(circularQueue.enQueue(3)).toBe(true);
  expect(circularQueue.enQueue(4)).toBe(false);
  expect(circularQueue.Rear()).toEqual(3);
  expect(circularQueue.isFull(4)).toBe(true);
  expect(circularQueue.deQueue(4)).toBe(true);
  expect(circularQueue.enQueue(4)).toBe(true);
  expect(circularQueue.Rear()).toEqual(4);
});
