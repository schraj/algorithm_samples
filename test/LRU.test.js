const LRU = require("../src/misc/LRU");
const assert = require("assert");

describe("misc", function () {
  it("should run cache", function () {
    let lru = new LRU(4);
    lru.addToCache(2);
    lru.addToCache(5);
    lru.addToCache(4);
    lru.addToCache(3);
    lru.addToCache(6);
    lru.addToCache(5);
    lru.addToCache(6);
  });
});
