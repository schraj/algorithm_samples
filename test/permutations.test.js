const Permutations = require('../src/math/Permutations');
const assert = require('assert');

describe('permutations', function () {
    xit('permutations should find known subsequence', function () {
        let input = 'tester';
        let p = new Permutations(input);
        p.find();
        assert.ok(p.result.length > 0);
    });
});