longestAscending = (arr) => {
  var solutionArray = [];
  var currentArray = [];
  currentArray.push(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      currentArray.push(arr[i]);
      if (currentArray.length > 1 && currentArray.length > solutionArray.length) {
        // create an independent copy that becomes our new global best so far
        solutionArray = currentArray.slice();
      }
    } else {
      currentArray = [arr[i]];
    }
  }

  return solutionArray;
}

module.exports = longestAscending;
