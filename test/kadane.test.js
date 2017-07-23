const maxSubArraySum = require("../src/dynamic/kadane");
const assert = require("assert");

describe("kadane", function () {
  it("should find sum", function () {
    const input = [15, -22, 3, 43, -5, -8, 9, 11, -25, -29, 35, 4, 8, -7, 20, -5];
    const result = maxSubArraySum(input);
    assert.equal(result[0], 60);
    assert.ok(result[1].length > 0);
  });
});
