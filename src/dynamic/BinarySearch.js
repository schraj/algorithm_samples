class Fibonacci {
  constructor() {}

  calculate_iter(n) {
    if (n === 0 || n === 1) {
      return n;
    }
    let n_1 = 1;
    let n_2 = 0;
    let res = 0;

    let i = 2;
    while (i <= n) {
      res = n_1 + n_2;
      n_2 = n_1;
      n_1 = res;
      i++;
    }

    return res;
  }
}

module.exports = Fibonacci;
