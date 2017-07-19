const SinglyLinkedList = require('../singlyLinkedlist');
const assert = require('assert');

describe('SinglyLinkedList', function () {
    it('add a node and should give a list of length = 1', function () {
        const input = [];
        const expected = 0;
        const list = new SinglyLinkedList();
        list.addFirst(1);
        assert.equal(list.length(), 1);
    });

    it('add 2 nodes and head and next should be populated', function () {
        const input = [];
        const expected = 0;
        const list = new SinglyLinkedList();
        list.addFirst(2);
        list.addFirst(1);        
        assert.equal(list.head.data, 1);
        assert.equal(list.head.next.data, 2);
        assert.equal(list.tail.data, 2);
        assert.equal(list.tail.next, null);
    });
});