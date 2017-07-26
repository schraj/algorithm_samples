let print_all_sum_rec = function (target, current_sum, start, output, result) {
  if (current_sum === target) {
    result.push(output.slice());
  }

  for (let i = start; i < target; i++) {
    let temp_sum = current_sum + i;
    if (temp_sum <= target) {
      output.push(i);
      print_all_sum_rec(target, temp_sum, i, output, result);
      output.pop();
    } else {
      return;
    }
  }
};

let print_all_sum = function (target) {
  let output = [];
  let result = [];
  print_all_sum_rec(target, 0, 1, output, result);
  return result;
};

module.exports = print_all_sum;