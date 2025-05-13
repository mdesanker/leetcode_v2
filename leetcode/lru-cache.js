class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.capacity = capacity;
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.remove = function (node) {
  let prev = node.prev,
    next = node.next;
  prev.next = next;
  next.prev = prev;
};

LRUCache.prototype.insert = function (node) {
  let prev = this.tail.prev;
  prev.next = node;
  node.prev = prev;
  node.next = this.tail;
  this.tail.prev = node;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;
  const node = this.cache.get(key);
  this.remove(node);
  this.insert(node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key);
    node.val = value;
    this.remove(node);
    this.insert(node);
  } else {
    const node = new Node(key, value);
    this.cache.set(key, node);
    this.insert(node);
  }
  if (this.cache.size > this.capacity) {
    const lru = this.head.next;
    this.remove(lru);
    this.cache.delete(lru.key);
  }
};
