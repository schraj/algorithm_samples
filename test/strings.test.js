const { can_segment_string } = require("../src/strings/Utility");
const assert = require("assert");

describe("Strings", function() {
  it("should check words in dict", function() {
    const dict = new Set();
    dict.add("hello");
    dict.add("hell");
    dict.add("now");
    dict.add("on");
    const input = "hello now";
    const expected = true;
    const result = can_segment_string(input, dict);
    assert.equal(result, expected);
  });
  it("should not find non-existent words in dict", function() {
    const dict = new Set();
    dict.add("hello");
    dict.add("hell");
    dict.add("now");
    dict.add("on");
    const input = "helloo now";
    const expected = false;
    const result = can_segment_string(input, dict);
    assert.equal(result, expected);
  });
});
