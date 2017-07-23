const solve_k_sums = require("../src/backtrack/k_sum");
const assert = require("assert");

describe("k_sum", function () {
  it("should test", function () {
    let inputArray = [1, 4, 6, 2, 4, 10, 15, 4];
    let results = Array();
    solve_k_sums(inputArray, 10, results);
    //assert.equal(result.size, 2);
  });
});
