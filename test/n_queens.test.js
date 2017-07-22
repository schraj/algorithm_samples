const N_Queens = require("../src/backtrack/n_queens");
const solve_n_queens = require("../src/backtrack/n_queens2");
const assert = require("assert");

describe("nqueens", function () {
  xit("should find valid configurations", function () {
    const n_queens = new N_Queens(4);
    n_queens.place_queens();
    //assert.equal(result.size, 2);
  });

  it("should find valid configurations", function () {
    let results = [];
    solve_n_queens(4, results);
    //assert.equal(result.size, 2);
  });
});
