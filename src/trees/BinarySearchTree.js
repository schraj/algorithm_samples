const Node = require("./Node");
const LinkedList = require("../lists/SinglyLinkedList");

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  push(val) {
    var root = this.root;

    if (!root) {
      this.root = new Node(val);
      return;
    }

    var currentNode = root;
    var newNode = new Node(val);

    while (currentNode) {
      if (val < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  levelTraverseQueueIterative() {
    let l = new LinkedList();
    l.addFirst(this.root);
    while (l.count > 0) {
      let c = l.head;
      if (c.left != null) {
        l.add(c.left);
      }
      if (c.right != null) {
        l.add(c.right);
      }

      console.log(c.value);
      l.removeFirst();
    }
  }
}

module.exports = BinarySearchTree;
