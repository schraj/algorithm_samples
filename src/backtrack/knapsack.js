//  It is simple backtracking algorithm
class KnapsackItem {
  constructor(weight, value) {
    this.weight = weight;
    this.value = value;
  }
}

class Knapsack {
  constructor(items, capacity) {
    this.items = items;
    this.capacity = capacity;

    this.maxValueSoFar = 0;
    this.result = Array();
  }

  getTotalValue(solutionList) {
    return solutionList.reduce((acc, curr) => {
      return acc + curr.value;
    }, 0);
  }

  isOverCapacity(solutionList) {
    const totalWeight = solutionList.reduce((acc, curr) => {
      return acc + curr.weight;
    }, 0);

    return totalWeight > this.capacity;
  }

  fill_rec(remainingList, solutionList, arrayStack) {
    if (this.isOverCapacity(solutionList)) {
      return;
    }

    const totalValue = this.getTotalValue(solutionList);
    if (totalValue > this.maxValueSoFar) {
      this.maxValueSoFar = totalValue;
      this.result = solutionList.slice();
    }

    for (let k = 0; k < remainingList.length; k++) {
      arrayStack.push(remainingList);
      arrayStack.push(solutionList);
      let newRemainingList = remainingList.slice();
      let kItem = newRemainingList.splice(k, 1);
      let newSolutionList = solutionList.slice();
      newSolutionList.push(kItem[0]);
      this.fill_rec(newRemainingList, newSolutionList, arrayStack);
      solutionList = arrayStack.pop();
      remainingList = arrayStack.pop();
    }
  }

  fill() {
    let arrayStack = Array();
    let solutionList = Array();
    this.fill_rec(this.items, solutionList, arrayStack);
    return this.result;
  }
}

module.exports = { Knapsack, KnapsackItem };
