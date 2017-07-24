class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
    this.left = null;
    this.right = null;
  }
}

module.exports = Node;