const MaxSum = require('../src/backtrack/MaxSum');
const assert = require('assert');

describe('maxsum', function () {
    it('maxsum should find known subsequence', function () {
        let input = [4, 3, -2, 2];
        let maxsum = new MaxSum(input);
        maxsum.find();
        assert.equal(maxsum.result, 6);

        input = [6, 10, 14, -5, -1, 2, -1, 3];
        maxsum = new MaxSum(input);
        maxsum.find();
        assert.equal(maxsum.result, 25);
    });
});