const get_k_sum_subsets_2 = require("../src/backtrack/k_sum2");
const assert = require("assert");

describe("k_sum", function () {
  it("should test", function () {
    //let inputArray = [1, 4, 6, 2, 4, 10, 15, 4];
    let inputArray = [2, 3, 5];
    let results = Array();
    get_k_sum_subsets_2(inputArray, 5, results);
    //assert.equal(result.size, 2);
  });
});
