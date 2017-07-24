const Node = require("../trees/Node");

class PriorityQueue {
  constructor() {
    this.heap = [null];
  }

  push(value, priority) {
    var node = new Node(value, priority);
    const index = this.heap.push(node);
    this.bubble(index - 1);
  }

  // removes and returns the data of highest priority
  pop() {
    var topVal = this.heap[1].value;
    // take the last node and replace the first with it
    // we've taken the first and returned it.
    this.heap[1] = this.heap.pop();
    this.sink(1);
    return topVal;
  }

  // bubbles node i up the binary tree based on
  // priority until heap conditions are restored
  bubble(i) {
    while (i > 1) {
      var parentIndex = i >> 1; // <=> floor(i/2)

      // if equal, no bubble (maintains insertion order)
      if (!this.isHigherPriority(i, parentIndex)) break;

      this.swap(i, parentIndex);
      i = parentIndex;
    }
  }

  // does the opposite of the bubble() function
  sink(i) {
    while (i * 2 < this.heap.length) {
      // if equal, left bubbles (maintains insertion order)
      var leftHigher = !this.isHigherPriority(i * 2 + 1, i * 2);
      var childIndex = leftHigher ? i * 2 : i * 2 + 1;

      // if equal, sink happens (maintains insertion order)
      if (this.isHigherPriority(i, childIndex)) break;

      this.swap(i, childIndex);
      i = childIndex;
    }
  }

  // swaps the addresses of 2 nodes
  swap(i, j) {
    var temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  // returns true if node i is higher priority than j
  isHigherPriority(i, j) {
    return this.heap[i].priority < this.heap[j].priority;
  }

}

module.exports = PriorityQueue;
