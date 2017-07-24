const MaxSum = require('../src/backtrack/MaxSum');
const assert = require('assert');

describe('LIS', function () {
    it('LIS1 should find known subsequence', function () {
        let input = [4, 3, -2, 2];
        let lis = new LIS(input);
        lis.find();
        //assert.ok(lis.result.length === 2);
    });
});