class BubbleSort {
  constructor(data) {
    this.data = data;
  }
    
  sort() {
    let swapped;
    do {
      swapped = false
      for (let i = 1; i < this.data.length; ++i) {
        if (this.data[i - 1] > this.data[i]) {
          [this.data[i], this.data[i - 1]] = [this.data[i - 1], this.data[i]]
          swapped = true
        }
      }
    } while (swapped)
  }
}

module.exports=BubbleSort;