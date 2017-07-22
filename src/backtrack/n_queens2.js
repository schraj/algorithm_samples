// this method determines if a queen can
// be placed at proposed_row, proposed_col
// with current solution i.e. this move
// is valid only if no queen in current
// solution should attacked square at
// proposed_row and proposed_col
let is_valid_move = function (proposed_row, proposed_col, solution) {

  // we need to check with all queens
  // in current solution
  for (let i = 0; i < proposed_row; i++) {
    let old_row = i;
    let old_col = solution[i];

    let diagonal_offset = proposed_row - old_row;
    if (old_col === proposed_col ||
      old_col === proposed_col - diagonal_offset ||
      old_col === proposed_col + diagonal_offset) {
      return false;
    }
  }
  return true;
};

let solve_n_queens_rec = function (n, solution, row, results) {
  if (row === n) {
    results.push(solution.slice());
    return;
  }

  for (let i = 0; i < n; i++) {
    if (is_valid_move(row, i, solution)) {
      solution[row] = i;
      solve_n_queens_rec(n, solution, row + 1, results);
    }
  }
};

let solve_n_queens = function (n, results) {
  let solution = new Array(n);
  solve_n_queens_rec(n, solution, 0, results);
};

module.exports = solve_n_queens;