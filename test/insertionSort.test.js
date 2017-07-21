const InsertionSort = require('../src/sorts/insertionSort');
const assert = require('assert');

describe('InsertionSort', function () {
    it('should sort an array', function () {
        const input = [2, 1, 4, 3];
        const expected = [1, 2, 3, 4];
        const insertionSort = new InsertionSort(input);
        insertionSort.sort();
        assert.deepEqual(insertionSort.data, expected);
    });
});