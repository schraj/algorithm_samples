class LIS {
  constructor(array) {
    this.array = array;
    this.result = Array();
    this.memo = [];
  }

  find_rec(rec_level, remainingList, solutionList, arrayStack) {
    console.log();
    console.log(`rec_level=${rec_level}`);
    console.log(`remainingList=${remainingList}`);
    console.log(`solutionList=${solutionList}`);

    // is our current subset greater than our global max?
    if (solutionList.length > this.result.length) {
      this.result = solutionList.slice();
      console.log(`adding new global max=${solutionList}`);
    }

    for (let k = 0; k < remainingList.length; k++) {
      arrayStack.push(remainingList);
      arrayStack.push(solutionList);
      let newRemainingList = remainingList.slice(k);
      let kItem = newRemainingList.splice(0, 1);
      console.log(`checking item=${kItem}`);
      if (solutionList.length == 0 || kItem > solutionList[solutionList.length - 1]) {

        console.log(`is larger, adding this item, recursing from this item`);
        let newSolutionList = solutionList.slice();
        newSolutionList.push(kItem[0]);
        this.find_rec(rec_level + 1, newRemainingList, newSolutionList, arrayStack);
      } else {

        console.log(`not larger, not adding this item, going to next item.`);
      }

      solutionList = arrayStack.pop();
      remainingList = arrayStack.pop();

      console.log(`max here=${solutionList.length}`);
      console.log(`max=${this.result.length}`);
    }
  }

  find() {
    let arrayStack = Array();
    let solutionList = Array();
    this.find_rec(0, this.array, solutionList, arrayStack);
    return this.result;
  }
}

module.exports = LIS;
