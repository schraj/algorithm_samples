const MergeSort = require('../src/sorts/mergeSort');
const assert = require('assert');

describe('MergeSort', function () {
    it('should sort an array', function () {
        const input = [12, 11, 13, 5, 6, 7];
        //const expected = [1, 2, 3, 4];
        const mergeSort = new MergeSort();
        mergeSort.sort(input, 0, 5);
    });
});