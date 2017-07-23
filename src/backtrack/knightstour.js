//  It is simple backtracking algorithm
class KnightsTour {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.state = [];

    for (let i = 0; i < gridSize; i++) {
      let temp = [];
      for (let j = 0; j < gridSize; j++) {
        temp.push(false);
      }
      this.state.push(temp);
    }
  }

  find_all_moves(x, y) {
    let moves = [];
    let start_x = Math.max(0, x - 1);
    let start_y = Math.max(0, y - 1);
    let end_x = Math.min(this.gridSize - 1, x + 1);
    let end_y = Math.min(this.gridSize - 1, y + 1);

    for (let i = start_x; i <= end_x; i++) {
      for (let j = start_y; j <= end_y; j++) {
        if (i === x && j === y) {
          continue;
        }

        // don't do diagonal or already touched spots
        if (this.state[i][j] === false
          && (!(i !== x && j !== y))) {
          moves.push([i, j]);
        }
      }
    }
    return moves;
  }

  checkGrid(x, y, solution) {
    let filled = true;
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        if (!this.state[i][j]) {
          return false;
        }
      }
    }

    let start_x = solution[0][0];
    let start_y = solution[0][1];

    if (!((((start_x - 1) === x || (start_x + 1) === x) && ((start_y === y)))
      || (((start_y - 1) === y || (start_y + 1) === y) && ((start_x === x))))) {
      //console.log("not back at start location");
      return false;
    }

    return true;
  }

  tour_rec(x, y, solution, result) {
    if (this.checkGrid(x, y, solution)) {
      // found solution
      result.push(solution.slice());
    }

    let moves = this.find_all_moves(x, y);
    for (let k = 0; k < moves.length; k++) {
      let localX = moves[k][0];
      let localY = moves[k][1];
      solution.push([localX, localY]);
      this.state[localX][localY] = true;
      this.tour_rec(localX, localY, solution, result);
      solution.pop();
      this.state[localX][localY] = false;
    }
  }

  tour(result) {
    const x = 0;
    const y = 0;
    let solution = Array();
    solution.push([x, y]);
    this.state[x][y] = true;
    this.tour_rec(x, y, solution, result);
    return solution;
  }
}

module.exports = KnightsTour;
