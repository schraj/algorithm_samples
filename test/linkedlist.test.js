const LinkedList = require('../linkedlist');
const assert = require('assert');

describe('LinkedList', function () {
    it('add a node should give a list of length = 1', function () {
        const input = [];
        const expected = 0;
        const list = new LinkedList();
        list.addFirst(1);
        assert.equal(list.length(), 1);
    });
});