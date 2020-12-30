class BinaryHeap {
  constructor(compare) {
    this.data = []
    this.d = 2
    this.compare = compare
  }

  get topM() {
    return this.data[0]
  }

  insert(x) {
    this.data.push(x)
    this._heapifyUp(this.data.length - 1)
  }

  delete(i) {
    
  }
  
  _heapifyUp(i) {
    let insertVal = this.data[i]
    while(i > 0 && this.compare(this.data[this._parent(i)], insertVal) > 0) {
      this.data[i] = this.data[this._parent(i)]
      i = this._parent(i)
    }
    this.data[i] = insertVal
  }

  

  get heapSize() {
    return this.data.length
  }

  get isEmpty() {
    return this.heapSize === 0
  }

  printHeap() {
    console.info(this.data)
    return this.data
  }

  _parent(i) {
    return Math.floor((i - 1) / this.d)
  }

  _kthChild(i, k) {
    return this.d * i + k
  }



}

module.exports = {
  BinaryHeap
}