const Sum_Combinations = require('../src/math/Sum_Combinations');
const print_all_sums = require('../src/math/Sum_Combinations2');
const assert = require('assert');

describe('sum_combinations', function () {
    xit('Sum_Combinations should find combinations', function () {
        let input = 6;
        let p = new Sum_Combinations(input);
        p.find2();
        assert.equal(p.result.length, 10);
    });
    xit('print all sums: should find combinations', function () {
        let input = 5;
        let result = print_all_sums(input);
        assert.ok(result.length > 0);
        //console.log(result);
    });

});