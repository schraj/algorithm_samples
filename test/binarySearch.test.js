const BinarySearch = require('../src/search/binarySearch');
const assert = require('assert');

describe('BinarySearch', function () {
    xit('should search a sorted array', function () {
        const input = [0, 1, 2, 3, 4, 5, 8, 9, 11, 25, 29, 35, 46, 48, 67, 91, 125];
        const binarySearch = new BinarySearch(input);
        const expected = 12;
        const result = binarySearch.search(46);
        assert.deepEqual(result, expected);
    });
});