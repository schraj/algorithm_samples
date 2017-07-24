class LIS2 {
  constructor(arr) {
    this.arr = arr;
    this.result = Array();
    this.max = 0;
  }

  find_rec(rec_level, n) {
    console.log("");
    console.log(`rec_level=${rec_level}`);
    console.log(`n=${n}`);
    console.log("");

    // base case
    if (n == 1)
      return 1;

    // 'max_ending_here' is length of LIS ending with arr[n-1]
    let max_ending_here = 1;

    /* Recursively get all LIS ending with arr[0], arr[1] ...
       arr[n-2]. If   arr[i-1] is smaller than arr[n-1], and
       max ending with arr[n-1] needs to be updated, then
       update it */
    for (let i = 1; i < n; i++) {
      console.log(`i=${i}`);
      console.log(`arr[i-1]=${this.arr[i - 1]}`);
      console.log(`arr[n-1]=${this.arr[n - 1]}`);

      let result = this.find_rec(rec_level + 1, i);
      let isLessThan = this.arr[i - 1] < this.arr[n - 1];
      if (isLessThan && result + 1 > max_ending_here) {
        max_ending_here = result + 1;
      }
      console.log(`max here=${max_ending_here}`);
      console.log(`max=${this.max}`);

    }

    // Compare max_ending_here with the overall max. And
    // update the overall max if needed
    if (this.max < max_ending_here) {
      this.max = max_ending_here;
    }

    // Return length of LIS ending with arr[n-1]
    return max_ending_here;
  }

  find() {
    this.find_rec(0, this.arr.length);
    return this.max;
  }
}

module.exports = LIS2;
