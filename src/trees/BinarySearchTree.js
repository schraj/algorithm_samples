const Node = require("./Node");
const LinkedList = require("../lists/SinglyLinkedList");

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  contains(value) {
    return this.contains_recursive(this.root, value);
  }

  height(node) {
    if (!node) {
      return 0;
    }

    return 1 + Math.max(this.height(node.left), this.height(node.right));
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

    callback(node);

    if (node.right) {
      this.depthFirstLog_recursive(node.right, callback);
    }
  }

  findDiameter() {
    const solution = Array();
    solution.push(0);
    this.findDiameter_recursive(0, this.root, solution);
  }

  findDiameter_recursive(rec_level, node, solution) {
    if (node.left && node.right) {
      // const leftDepth = Array();
      // leftDepth.push(1);
      // const rightDepth = Array();
      // rightDepth.push(1);
      // this.findDepth_recursive(rec_level + 1, node.left, leftDepth);
      // this.findDepth_recursive(rec_level + 1, node.right, rightDepth);
      // const totalDepth = leftDepth[0] + rightDepth[0];


      if (totalDepth > solution[0]) {
        solution[0] = totalDepth;
      }
    }

    if (node.left) {
      this.findDiameter_recursive(rec_level + 1, node.right, solution);
    }

    if (node.right) {
      this.findDiameter_recursive(rec_level + 1, node.right, solution);
    }
  }

  findDepth_recursive(rec_level, node, depth) {
    if (rec_level > depth[0]) {
      depth[0] = rec_level;
    }

    if (node.left) {
      this.findDepth_recursive(rec_level + 1, node.left, depth);
    }

    if (node.right) {
      this.findDepth_recursive(rec_level + 1, node.right, depth);
    }
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
