const DoublyLinkedList = require('../lists/DoublyLinkedList');

class LRU {
    constructor(size) {
        this.cache = new DoublyLinkedList();
        this.hashSet = new Set();
        this.size = size;
    }

    addToCache(val) {
        if (this.hashSet.has(val)) {
            let node = this.cache.find(val);
            this.cache.moveToTail(node);
        } else {
            if (this.cache.count >= this.size) {
                this.hashSet.delete(this.cache.head.value);
                this.cache.removeFirst();
            }
            this.cache.addLast(val);
            this.hashSet.add(val);
        }
    }
}

module.exports = LRU;