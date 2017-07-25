const Node = require('./DoublyLinkedListNode')

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  length() {
    return this.count;
  }

  find(val) {
    let node = this.head;
    while (node) {
      if (node.value === val) {
        return node;
      }
      node = node.next;
    }
  }

  moveToTail(node) {
    if (this.count === 0) {
      throw Error('cannot do this');
    } else if (this.tail === node) {
      // it is already the tail
      return;
    } else {
      // it is the head
      if (node.previous === null) {
        this.head = node.next;
      } else {
        // splice nodes together in existing spot
        let nextNode = node.next;
        let previousNode = node.previous;
        nextNode.previous = previousNode;
        previousNode.next = nextNode;
      }

      // move the excised node to the tail
      let temp = this.tail;
      this.tail = node;
      node.previous = temp;
      node.next = null;
      temp.next = this.tail;
    }
  }

  addLast(data) {
    let node = new Node(data);

    if (this.count === 0) {
      // If this is the first Node, assign it to head
      this.head = node;
    } else {
      // If not the first node, link it to the last node
      let temp = this.tail;
      this.tail = node;
      node.previous = temp;
      temp.next = this.tail;
    }

    this.tail = node;

    this.count++;
  }

  addFirst(data) {
    let node = new Node(data);

    // Save the first Node
    const temp = this.head;

    if (temp) {
      temp.previous = node;
    }

    // Point head to the new Node
    this.head = node;

    // Add the rest of node behind the new first Node
    this.head.next = temp;

    // this.head.previous is null;

    this.count++;

    if (this.count === 1) {
      // If first node, 
      // point tail to it as well
      this.tail = this.head;
    }
  }

  removeFirst(data) {
    if (this.count > 0) {
      // The head should point to the second element
      this.head = this.head.next;

      // the head does not have a previous node
      this.head.previous = null;

      this.count--;

      if (this.count === 0) {
        // If list empty, set tail to null
        this.tail = null;
      }
    }
  }

  removeLast(data) {
    if (this.count > 0) {
      if (this.count === 1) {
        this.head = null;
        this.tail = null;
      } else {
        // Find the Node right before the last Node
        //  and set it to tail
        this.tail = this.tail.previous;

        this.tail.next = null;
      }
      this.count--;
    }
  }
}

module.exports = DoublyLinkedList;