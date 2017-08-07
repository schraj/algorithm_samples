const lisAdjacent = require('../src/misc/lisAdjacent');
const assert = require('assert');

describe('LIS', function () {
    it('LIS1 should find known adjacent subsequence', function () {
        let input = [12, 11, 8, 7];
        let result = lisAdjacent(input);
        assert.ok(result.length === 0);

        input = [12, 11, 7, 8];
        result = lisAdjacent(input);
        assert.ok(result.length === 2);

        input = [12, 11, 13, 14, 15, 7];
        result = lisAdjacent(input);
        assert.ok(result.length === 4);
    });
});