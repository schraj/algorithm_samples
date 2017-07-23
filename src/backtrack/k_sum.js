let is_valid_move = function (proposed_row, proposed_col, solution) {
    return true;
};

let solve_k_sums_rec = function (inputArray, targetVal, currentVal, index, solution, results) {
    currentVal += inputArray[index];
    solution.push(inputArray[index]);

    if (targetVal === currentVal) {
        results.push(solution.slice());
        return;
    }

    if (currentVal > targetVal) {
        solution.pop();
        return;
    }

    if (currentVal < targetVal) {
        solve_k_sums_rec(inputArray, targetVal, currentVal, index + 1, solution, results);
    }
};

let solve_k_sums = function (inputArray, targetVal, results) {
    for (let i = 0; i < inputArray.length; i++) {
        let solution = new Array();
        solve_k_sums_rec(inputArray, targetVal, 0, i, solution, results);
    }
};

module.exports = solve_k_sums;