class Sum_Combinations {
  constructor(num) {
    this.num = num;
    this.result = [];
  }

  getCurrentSum(solutionArray) {
    return solutionArray.reduce((acc, current) => {
      return acc + current;
    }, 0);
  }

  find2() {
    let solutionArray = Array();
    this.find2_rec(0, 1, solutionArray);
    return this.result;
  }

  find2_rec(rec_level, startNum, solutionArray) {
    console.log();
    console.log(`rec_level=${rec_level}`);
    console.log(`startNum=${startNum}`);
    console.log(`solutionList=${solutionArray}`);

    if (this.getCurrentSum(solutionArray) === this.num) {
      this.result.push([...solutionArray]);
      console.log(`adding to result array=${[...solutionArray]}`);
      return;
    }

    for (let k = startNum; k < this.num; k++) {
      // prepare an independent copy of the solution array to pass to next recursion level
      let nextSolutionArray = [...solutionArray];
      nextSolutionArray.push(k);
      let nextSum = this.getCurrentSum(nextSolutionArray);
      if (nextSum <= this.num) {
        console.log(`nextSum=${nextSum}`);
        console.log(`adding num To solutionArray=${k}`);
        this.find2_rec(rec_level + 1, k, nextSolutionArray);
      } else {
        console.log(`currentsum: ${nextSum} is over Num: ${this.num}, returning, k=${k} put it over`);
        return;
      }
    }
  }

  find_rec(rec_level, currentSum, startNum, solutionArray) {
    console.log();
    console.log(`rec_level=${rec_level}`);
    console.log(`startNum=${startNum}`);
    console.log(`solutionList=${solutionArray}`);

    if (currentSum === this.num) {
      this.result.push([...solutionArray]);
      console.log(`adding to result array=${[...solutionArray]}`);
      return;
    }

    for (let k = startNum; k < this.num; k++) {
      // get the next sum to pass to next recursion level
      let nextSum = currentSum + k;
      if (nextSum <= this.num) {
        console.log(`nextSum=${nextSum}`);
        console.log(`adding num To solutionArray=${k}`);

        // prepare an independent copy of the solution array to pass to next recursion level
        let nextSolutionArray = [...solutionArray];
        nextSolutionArray.push(k);

        this.find_rec(rec_level + 1, nextSum, k, nextSolutionArray);
      } else {
        console.log(`currentsum: ${nextSum} is over Num: ${this.num}, returning, k=${k} put it over`);
        return;
      }
    }
  }

  find() {
    let solutionArray = Array();
    this.find_rec(0, 0, 1, solutionArray);
    return this.result;
  }
}

module.exports = Sum_Combinations;