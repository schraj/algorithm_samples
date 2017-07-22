const Boggle = require("../src/backtrack/boggle");
const assert = require("assert");

describe("Boggle", function () {
  it("should find words in dict", function () {
    const words = ["cat", "cater", "are", "toon", "moon", "not", "eat", "ton"];
    const dict = new Set();
    words.forEach(w => {
      dict.add(w);
    });

    const grid = createKnownGrid();
    const boggle = new Boggle(grid, dict);
    const result = boggle.find_all_words();
    assert.equal(result.size, 2);
  });
});

const createKnownGrid = size => {
  const row1 = ['e', 't', 'q'];
  const row2 = ['s', 'a', 'm'];
  const row3 = ['n', 'o', 'o'];
  grid = [row1, row2, row3];
  return grid;
};


const createGrid = size => {
  const grid = [];
  for (let i = 0; i < size; i++) {
    let temp = [];
    for (let j = 0; j < size; j++) {
      temp.push(getChar());
    }
    grid.push(temp);
  }
  return grid;
};

const getChar = () => {
  let possible = "abcdefghiorstu";
  return possible.charAt(Math.floor(Math.random() * possible.length));
};
