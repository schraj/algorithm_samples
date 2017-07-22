const Node = require("./Node");
const LinkedList = require("../lists/SinglyLinkedList");

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  contains(value) {
    return this.contains_recursive(this.root, value);
  }

  contains_recursive(node, value) {
    let foundNode = null;
    if (node.value === value) {
      foundNode = node;
      return foundNode;
    }

    if (node.value > value && node.left) {
      return this.contains_recursive(node.left, value);
    } else if (node.value < value && node.right) {
      return this.contains_recursive(node.right, value);
    }

    return foundNode;
  }

  depthFirstLog(callback) {
    this.depthFirstLog_recursive(this.root, callback);
  }

  depthFirstLog_recursive(node, callback) {
    if (node.left) {
      this.depthFirstLog_recursive(node.left, callback);
    }

    if (node.right) {
      this.depthFirstLog_recursive(node.right, callback);
    }

    return callback(node);
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

  minNodeFromRoot() {
    return this.minNode(this.root);
  }

  minNode(node) {
    if (!node) {
      return 0;
    }
    if (node.left) {
      console.log("tested:" + node.value);
      return this.minNode(node.left);
    }
    console.log("found:" + node.value);
    return node.value;
  }

  maxNodeFromRoot() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    if (!node) {
      return 0;
    }
    if (node.right) {
      console.log("tested:" + node.value);
      return this.maxNode(node.right);
    }
    console.log("found:" + node.value);
    return node.value;
  }

  levelTraverseQueueIterative() {
    let l = new LinkedList();
    l.addFirst(this.root);
    while (l.count > 0) {
      let c = l.head.data;
      if (c.left != null) {
        l.addLast(c.left);
      }
      if (c.right != null) {
        l.addLast(c.right);
      }

      //console.log(c.value);
      l.removeFirst();
    }
  }
}

module.exports = BinarySearchTree;
