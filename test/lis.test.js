const LIS = require('../src/backtrack/lis');
const LIS2 = require('../src/backtrack/lis2');
const assert = require('assert');

describe('LIS', function () {
    it('LIS1 should find known subsequence', function () {
        let input = [12, 11, 13, 8];
        let lis = new LIS(input);
        lis.find();
        assert.ok(lis.result.length === 2);

        input = [12, 11, 13, 5, 15, 7];
        lis = new LIS(input);
        lis.find();
        assert.ok(lis.result.length === 3);
    });

    xit('LIS2 should find subsequence', function () {
        //const input = [12, 11, 13, 5, 15, 7];
        const input = [12, 11, 13, 8];
        //const expected = [11, 13, 15];
        const lis = new LIS2(input);
        lis.find();
    });
});