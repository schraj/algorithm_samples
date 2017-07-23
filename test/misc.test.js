const armstrong = require("../src/misc/armstrong");
const isPalindrome = require("../src/misc/isPalindrome");
const assert = require("assert");

describe("misc", function () {
  it("should identify armstrong", function () {
    let result = armstrong(125);
    assert.ok(!result);

    result = armstrong(153);
    assert.ok(result);
  });
});

describe("misc", function () {
  it("should identify palindrome", function () {
    let result = isPalindrome(1221);
    assert.ok(result);

    result = isPalindrome(12521);
    assert.ok(result);

    result = isPalindrome(12541);
    assert.ok(!result);
  });
});
