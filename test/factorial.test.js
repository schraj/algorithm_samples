const factorial = require('../src/math/Factorial');
const assert = require('assert');

describe('factorial', function () {
    it('should find factorial of passed param', function () {
        let input = 4;
        assert.equal(factorial(4), 24);
    });
});