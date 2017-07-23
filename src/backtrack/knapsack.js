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

    this.solutionItems = Array();
    this.maxValueSoFar = 0;
  }

  getTotalValue() {
    return this.solutionItems.map((acc, curr) => {
      acc += curr.value;
    }, 0);
  }

  isOverCapacity() {
    const totalWeight = this.solutionItems.map((acc, curr) => {
      acc += curr.weight;
    }, 0);

    return totalWeight > this.capacity;
  }

  fill_rec(remainingList, solutionList, result, arrayStack) {
    if (this.isOverCapacity()) {
      return;
    }

    const totalValue = this.getTotalValue();
    if (totalValue > this.maxValueSoFar) {
      this.maxValueSoFar = totalValue;
      result = solution.slice();
    }

    for (let k = 0; k < remainingList.length; k++) {
      arrayStack.push(remainingList);
      arrayStack.push(solutionList);
      let newRemainingList = remainingList.splice(k, 1);
      let newSolutionList = solutionList.slice();
      newSolutionList.push(remainingList[k]);
      this.tour_rec(newRemainingList, newSolutionList, result, arrayStack);
      solutionList = arrayStack.pop();
      remainingList = arrayStack.pop();
    }
  }

  fill(result) {
    let arrayStack = Array();
    let solutionList = Array();
    this.fill_rec(this.items, solutionList, result, arrayStack);
  }
}

module.exports = Knapsack;
