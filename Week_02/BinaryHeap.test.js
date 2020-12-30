const {BinaryHeap} = require('./BinaryHeap')

describe('BinaryHeap Test', () => {
  it.only(`insert 85`, () => {
    const heap = new BinaryHeap((a, b) => b - a)
    const arr = [90, 80, 70, 60, 40, 30, 20, 10, 50]
    arr.forEach((val) => {
      heap.insert(val)
    })
    heap.insert(85)
    expect(heap.printHeap()).toEqual([90, 85, 70, 60, 80, 30, 20, 10, 50, 40])
  })

  it(`delete 90`, () => {
    const heap = new BinaryHeap((a, b) => a - b)
    [90, 85, 70, 60, 80, 30, 20, 10, 50, 40].forEach((val) => {
      heap.insert(val)
    })
    heap.delete(90)
    expect(heap.printHeap()).toEqual([85, 80, 70, 60, 40, 30, 20, 10, 50])
  })
})