class Permutations {
  constructor(charArray) {
    this.arr = charArray.split('');
    this.result = [];
  }

  find_rec(rec_level, remainingBag, solutionArray, arrayStack) {
    console.log();
    console.log(`rec_level=${rec_level}`);
    console.log(`remainingList=${remainingBag}`);
    console.log(`solutionList=${solutionArray}`);

    if (remainingBag.length === 0) {
      const newList = [...solutionArray];
      this.result.push(newList);
      console.log(`adding=${newList}`);
      return;
    }

    for (let k = 0; k < remainingBag.length; k++) {
      arrayStack.push(remainingBag);
      arrayStack.push(solutionArray);

      let newRemainingBag = [...remainingBag];
      let kItem = newRemainingBag.slice(k, k + 1)[0];
      newRemainingBag.splice(k, 1);
      console.log(`existing RemainingBag=${remainingBag}`);
      console.log(`newRemainingBag=${newRemainingBag}`);
      console.log(`adding item=${kItem}`);
      let newSolutionArray = [...solutionArray];
      newSolutionArray.push(kItem[0]);
      this.find_rec(rec_level + 1, newRemainingBag, newSolutionArray, arrayStack);

      arrayStack.push(remainingBag);
      arrayStack.push(solutionArray);
    }
  }

  find() {
    let arrayStack = Array();
    let solutionArray = Array();
    this.find_rec(0, this.arr, solutionArray, arrayStack);
    return this.result;
  }
}

module.exports = Permutations;