const { Knapsack, KnapsackItem } = require("../src/backtrack/knapsack");
const assert = require("assert");

describe("knapsack", function () {
  it("should test known list", function () {
    let i1 = new KnapsackItem(2, 15);
    let i2 = new KnapsackItem(3, 4);
    let i3 = new KnapsackItem(1, 8);
    let i4 = new KnapsackItem(5, 17);
    let items = [i1, i2, i3, i4];

    const ks = new Knapsack(items, 4);
    const results = ks.fill();
    assert.equal(results.length, 2);
  });

  it("should test random list", function () {
    const items = createItems(10);
    const ks = new Knapsack(items, 20);
    const results = ks.fill();
    console.log(results);
    //assert.equal(result.size, 2);
  });

});

const createItems = size => {
  let items = Array();
  for (let i = 0; i < size; i++) {
    const weight = Math.round(Math.random() * 5, 1);
    const value = Math.round(Math.random() * 100, 2);
    items.push(new KnapsackItem(weight, value));
  }
  return items;
};