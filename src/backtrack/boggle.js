//  It is simple backtracking algorithm
class Boggle {
  constructor(grid, dictionary) {
    this.grid = grid;
    this.dictionary = dictionary;
    this.state = [];

    for (let i = 0; i < grid.length; i++) {
      let temp = [];
      for (let j = 0; j < grid.length; j++) {
        temp.push(false);
      }
      this.state.push(temp);
    }
  }

  isPrefix(prefix) {
    let found = false
    for (let v of this.dictionary.keys()) {
      if (v.substring(0, prefix.length) === prefix) {
        found = true;
        break;
      }
    };
    return found;
  }

  find_all_nbrs(x, y) {
    let nbrs = [];
    let start_x = Math.max(0, x - 1);
    let start_y = Math.max(0, y - 1);
    let end_x = Math.min(this.grid.length - 1, x + 1);
    let end_y = Math.min(this.grid.length - 1, y + 1);

    for (let i = start_x; i <= end_x; i++) {
      for (let j = start_y; j <= end_y; j++) {
        if (i === x && j === y) {
          continue;
        }
        if (this.state[i][j] === false) {
          nbrs.push([i, j]);
        }
      }
    }
    return nbrs;
  }

  find_words_rec(i, j, current, words) {
    if (current.length > 0 && this.dictionary.has(current)) {
      words.add(current);
    }

    if (!this.isPrefix(current)) {
      return;
    }

    let nbrs = this.find_all_nbrs(i, j);
    for (let k = 0; k < nbrs.length; k++) {
      let row = nbrs[k][0];
      let col = nbrs[k][1];
      current += this.grid[row][col];
      this.state[row][col] = true;
      this.find_words_rec(row, col, current, words);
      current = current.substr(0, current.length - 1);
      this.state[row][col] = false;
    }
  }

  find_all_words() {
    let words = new Set([]);
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length; j++) {
        let current_word = "";
        //this.state[i][j] = true;
        this.find_words_rec(i, j, current_word, words);
      }
    }
    return words;
  }
}

module.exports = Boggle;
