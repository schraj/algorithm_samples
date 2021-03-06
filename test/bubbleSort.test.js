const BubbleSort = require('../src/sorts/bubbleSort');
const assert = require('assert');

describe('BubbleSort', function () {
    it('should sort an array', function () {
        const input = [2, 1, 4, 3, 3, 8, 9, 1, 5];
        const expected = [1, 1, 2, 3, 3, 4, 5, 8, 9];
        const bubbleSort = new BubbleSort(input);
        bubbleSort.sort();
        assert.deepEqual(bubbleSort.data, expected);
    });
});