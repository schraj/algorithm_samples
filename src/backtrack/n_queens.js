//  It is simple backtracking algorithm
class N_Queens {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.validStates = 0;
    this.state = [];

    for (let i = 0; i < this.gridSize; i++) {
      let temp = [];
      for (let j = 0; j < this.gridSize; j++) {
        temp.push(false);
      }
      this.state.push(temp);
    }
  }

  isQueenInColumn(y) {
    for (let i = 0; i <= this.gridSize - 1; i++) {
      if (this.state[i][y]) {
        return true;
      }
    }

    return false;
  }

  isQueenOnDiagonal(x, y) {
    for (let i = 0; i < this.gridSize - 1; i++) {
      if ((x + i) < this.gridSize && (y + i) < this.gridSize) {
        if (this.state[x + i][y + i]) {
          return true;
        }
      }

      if ((x - i) >= 0 && (y - i) >= 0) {
        if (this.state[x - i][y - i]) {
          return true;
        }
      }
    }
    return false;
  }

  is_safe(x, y) {
    if (!this.isQueenInColumn(y) && !this.isQueenOnDiagonal(x, y)) {
      return true;
    }

    return false;
  }

  place_queen_rec(x) {
    for (let y = 0; y < this.gridSize; y++) {
      this.state[x][y] = true;
      if (this.is_safe(x, y)) {
        if (x === this.gridSize) {
          this.validStates += 1;
          x = x - 1;
          return;
        }
      }
      this.place_queen_rec(x + 1);
      this.state[x][y] = false;
      x = x - 1;
    }
  }

  place_queens() {
    this.place_queen_rec(0);
  }
}

module.exports = N_Queens;
