const DoublyLinkedList = require('../src/lists/DoublyLinkedlist');
const assert = require('assert');

describe('DoublyLinkedList', function () {
    it('add a node and should give a list of length = 1', function () {
        const input = [];
        const expected = 0;
        const list = new DoublyLinkedList();
        list.addFirst(1);
        assert.equal(list.length(), 1);
    });

    it('add 2 nodes and head and next should be populated', function () {
        const input = [];
        const expected = 0;
        const list = new DoublyLinkedList();
        list.addFirst(2);
        list.addFirst(1);
        assert.equal(list.head.value, 1);
        assert.equal(list.head.next.value, 2);
        assert.equal(list.tail.value, 2);
        assert.equal(list.tail.next, null);
        assert.equal(list.tail.previous.value, 1);
    });
});