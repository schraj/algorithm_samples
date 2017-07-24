const QuickSort = require('../src/sorts/quickSort');
const assert = require('assert');

describe('QuickSort', function () {
    it('should sort an array', function () {
        const input = [12, 11, 13, 5, 15, 7];
        //const expected = [1, 2, 3, 4];
        const quickSort = new QuickSort();
        quickSort.sort(input, 0, 5);
    });
});