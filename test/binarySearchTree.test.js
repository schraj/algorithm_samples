const BinarySearchTree = require("../src/trees/binarySearchTree");
const assert = require("assert");

describe("BinarySearchTree", function() {
  it("should create a search tree root node", function() {
    const bst = new BinarySearchTree();
    bst.push(2);
    const expected = 2;
    assert.equal(bst.root.value, expected);
    assert.equal(bst.root.left, null);
    assert.equal(bst.root.right, null);
  });

  it("should create a balanced search tree", function() {
    const bst = new BinarySearchTree();
    bst.push(2);
    bst.push(3);
    bst.push(1);
    const expected = 2;
    assert.equal(bst.root.value, expected);
    assert.equal(bst.root.left.value, 1);
    assert.equal(bst.root.right.value, 3);
  });

  it("should create a balanced search tree", function() {
    const bst = new BinarySearchTree();
    bst.push(2);
    bst.push(3);
    bst.push(1);
    const expected = 2;
    assert.equal(bst.root.value, expected);
    assert.equal(bst.root.left.value, 1);
    assert.equal(bst.root.right.value, 3);
  });

  it("should traverse binary tree in level-order", function() {
    const bst = createTree(10);
    bst.levelTraverseQueueIterative();
  });
});

const createTree = itemCount => {
  const bst = new BinarySearchTree();
  for (let i = 0; i < itemCount; i++) {
    let val = Math.ceil(Math.random * i);
    bst.push(val);
  }
  return bst;
};
