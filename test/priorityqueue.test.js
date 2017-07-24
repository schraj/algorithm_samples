const PriorityQueue = require("../src/lists/PriorityQueue");
const assert = require("assert");

describe("Heap", function () {
  xit("should create a heap", function () {
    const pq = new PriorityQueue();
    pq.push(14, 14);
    pq.push(3, 3);
    pq.push(4, 4);
    pq.push(1, 1);
    pq.push(8, 8);
    pq.push(15, 15);
    pq.push(2, 2);
    const first = pq.pop();
    assert.equal(first, 1);
    const second = pq.pop();
    assert.equal(second, 2);
    const third = pq.pop();
    assert.equal(third, 3);
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
