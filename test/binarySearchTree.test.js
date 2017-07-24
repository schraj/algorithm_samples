const BinarySearchTree = require("../src/trees/BinarySearchTree");
const are_identical = require("../src/trees/Utility");
const assert = require("assert");

describe("BinarySearchTree", function () {
  it("should create a search tree root node", function () {
    const bst = new BinarySearchTree();
    bst.push(2);
    const expected = 2;
    assert.equal(bst.root.value, expected);
    assert.equal(bst.root.left, null);
    assert.equal(bst.root.right, null);
  });

  it("should create a balanced search tree", function () {
    const bst = new BinarySearchTree();
    bst.push(2);
    bst.push(3);
    bst.push(1);
    const expected = 2;
    assert.equal(bst.root.value, expected);
    assert.equal(bst.root.left.value, 1);
    assert.equal(bst.root.right.value, 3);
  });

  it("should create a balanced search tree", function () {
    const bst = new BinarySearchTree();
    bst.push(2);
    bst.push(3);
    bst.push(1);
    const expected = 2;
    assert.equal(bst.root.value, expected);
    assert.equal(bst.root.left.value, 1);
    assert.equal(bst.root.right.value, 3);
  });

  it("should traverse binary tree in level-order", function () {
    const bst = createTree(10);
    bst.levelTraverseQueueIterative();
  });

  it("should find minNode", function () {
    const bst = createTree(10);
    const result = bst.minNodeFromRoot();
  });

  it("should find maxNode", function () {
    const bst = createTree(20);
    const result = bst.maxNodeFromRoot();
  });

  it("should find contained item", function () {
    const bst = createTree(20);
    bst.push(32);
    const result = bst.contains(32);
    assert.equal(result.value, 32);
  });

  it("should not find non-existent item", function () {
    const bst = createTree(20);
    const result = bst.contains(33);
    assert.equal(result, null);
  });

  it("should run a callback function on each item", function () {
    const bst = createTree(1);
    bst.depthFirstLog(node => console.log("Node Value:" + node.value));
  });

  it("should identify equality in same tree", function () {
    const bst1 = createTree(10);
    const result = are_identical(bst1.root, bst1.root);
    assert.equal(result, true);
  });

  it("should identify inequality in same tree", function () {
    const bst1 = new BinarySearchTree();
    bst1.push(2);
    bst1.push(3);
    bst1.push(4);
    const bst2 = new BinarySearchTree();
    bst2.push(2);
    bst2.push(3);
    bst2.push(1);
    const result = are_identical(bst1.root, bst2.root);
    assert.notEqual(result, true);
  });

  xit("should find max depth", function () {
    const bst = createTree(10);
    const result = bst.findDiameter();
    //assert.equal(result, true);
  });

});



const createTree = itemCount => {
  const bst = new BinarySearchTree();
  const uniq = new Set();
  for (let i = 0; i < itemCount; i++) {
    let val = Math.ceil(Math.random() * itemCount);
    while (uniq.has(val)) {
      val = Math.ceil(Math.random() * itemCount);
    }
    uniq.add(val);
    bst.push(val);
  }
  return bst;
};
