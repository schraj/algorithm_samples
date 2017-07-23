let is_valid = function (curr, solution) {
    return true;
};

let backtrack_rec = function (n, currentLevel, val, solution, results) {
    if (n === currentLevel) {
        results.push(solution.slice());
        return;
    }

    for (let i = 0; i < 5; i++) {
        currentLevel = 0;
        let currentVal = currentLevel * Math.ceil(Math.random() * 10);
        if (currentVal < 5) {
            solution[currentLevel] = currentVal;
            backtrack_rec(n, currentLevel + 1, currentVal, solution, results);
        }
    }
};

let backtrack = function (n, results) {
    let solution = new Array(n);
    backtrack_rec(n, 0, 0, solution, results);
};

module.exports = backtrack;