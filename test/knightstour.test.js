const KnightsTour = require("../src/backtrack/knightstour");
const assert = require("assert");

describe("KnightsTour", function () {
  it("should test", function () {
    let results = Array();
    let kn = new KnightsTour(4);
    kn.tour(results);
    //console.log(results);
    assert.ok(results.length > 0);
  });
});
