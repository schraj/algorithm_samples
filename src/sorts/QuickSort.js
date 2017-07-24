class QuickSort {
  constructor() {
  }

  sort(arr, left, right) {
    var len = arr.length,
      pivot,
      partitionIndex;

    if (left < right) {
      pivot = right;
      partitionIndex = this.partition(arr, pivot, left, right);

      //sort left and right
      this.sort(arr, left, partitionIndex - 1);
      this.sort(arr, partitionIndex + 1, right);
    }
    return arr;
  }

  partition(arr, pivot, left, right) {
    var pivotValue = arr[pivot],
      partitionIndex = left;

    for (var i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        this.swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
    this.swap(arr, right, partitionIndex);
    return partitionIndex;
  }

  swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

module.exports = QuickSort;