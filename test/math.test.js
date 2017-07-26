const factorial = require('../src/math/Factorial');
const moveZerosLeft = require('../src/math/moveZerosLeft');
const assert = require('assert');

describe('factorial', function () {
    it('should find factorial of passed param', function () {
        assert.equal(factorial(4), 24);

        assert.equal(factorial(6), 720);
    });
});

describe('moveZerosLeft', function () {
    it('should get new array', function () {
        let inputArray = [1, 4, 6, 0, 2, 4, 0, 10, 15, 4, 0];
        let expected = [0, 0, 0, 1, 4, 6, 2, 4, 10, 15, 4];
        const result = moveZerosLeft(inputArray);
        assert.deepEqual(result, expected);
    });
});