/*

Let the start (s) and end (e) integers form an increasing series s, s+1, ...s+(e-s).
Each number in the series should be in the returned array (in order, with s in the 0th array position).
If a number is divisible by 3, then instead of the number, the string 'Formidable' should be in the array.
If a number is divisible by 5, then instead of the number, the string 'Labs' should be in the array.
If a number is divisible by both 3 and 5, then instead of the number, the string 'FormidableLabs' should be in the array.
Example:
            var series = formidableSeries(1, 3);
            console.log(series);
            // -> [1, 2, 'Formidable']
          

*/


formidable = (start, end) => {
  var fStr = 'Formidable';
  var lStr = 'Labs';
  var flStr = 'FormidableLabs';
  var solutionArray = [];
  var endVal = end - (start + 1);
  for (var i = start; i <= endVal; i++) {
    var divisibleBy3 = i % 3;
    var divisibleBy5 = i % 5;
    if (divisibleBy3 && divisibleBy5) {
      solutionArray.push(flStr);
    } else if (divisibleBy3) {
      solutionArray.push(fStr);
    } else if (divisibleBy5) {
      solutionArray.push(lStr);
    } else solutionArray.push(i);
  }
  return solutionArray;
}

module.exports = formidable;
