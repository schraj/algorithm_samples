const BubbleSort = require('../bubbleSort');
const assert = require('assert');

describe('BubbleSort', function () {
    it('should sort an array', function () {
        const input = [2, 1, 4, 3];
        const expected = [1, 2, 3, 4];
        const bubbleSort = new BubbleSort(input);
        bubbleSort.sort();
        assert.deepEqual(bubbleSort.data, expected);
    });
});