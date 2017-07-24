class MaxSum {
  constructor(array) {
    this.array = array;
    this.result = 0;
  }

  getTotalValue(solutionList) {
    return solutionList.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }

  find_rec(rec_level, remainingList, solutionList, arrayStack) {
    console.log();
    console.log(`rec_level=${rec_level}`);
    console.log(`remainingList=${remainingList}`);
    console.log(`solutionList=${solutionList}`);

    // is our current subset greater than our global max?
    let totalValue = this.getTotalValue(solutionList);
    if (totalValue > this.result) {
      this.result = totalValue;
      console.log(`adding new global max total=${this.result}`);
      console.log(`adding new global max=${solutionList}`);
    }

    for (let k = 0; k < remainingList.length; k++) {
      if (rec_level > 0) {
        k++;
      }
      arrayStack.push(remainingList);
      arrayStack.push(solutionList);
      let newRemainingList = remainingList.slice(k);
      let kItem = newRemainingList.splice(0, 1);
      console.log(`existing RemainingList=${remainingList}`);
      console.log(`newRemainingList=${newRemainingList}`);
      if (kItem < 0) {
        kItem = newRemainingList.splice(0, 1);
        k++;
      }

      console.log(`adding item=${kItem}`);
      let newSolutionList = solutionList.slice();
      newSolutionList.push(kItem[0]);
      this.find_rec(rec_level + 1, newRemainingList, newSolutionList, arrayStack);
      solutionList = arrayStack.pop();
      remainingList = arrayStack.pop();

      console.log(`max here=${solutionList.length}`);
      console.log(`max=${this.result}`);
    }
  }

  find() {
    let arrayStack = Array();
    let solutionList = Array();
    this.find_rec(0, this.array, solutionList, arrayStack);
  }
}

module.exports = MaxSum;