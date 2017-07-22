const print_all_parentheses = require("../src/backtrack/parentheses");
const assert = require("assert");

describe("Parentheses", function () {
  it("should print", function () {
    print_all_parentheses(4);
  });
});

