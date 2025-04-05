class TrieNode {
  constructor() {
    this.child = {};
    this.end = false;
  }
}

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let current = this.root;
  for (const char of word) {
    if (!current.child[char]) current.child[char] = new TrieNode();
    current = current.child[char];
  }
  current.end = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let current = this.root;
  for (const char of word) {
    if (!current.child[char]) return false;
    current = current.child[char];
  }
  return current.end;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let current = this.root;
  for (const char of prefix) {
    if (!current.child[char]) return false;
    current = current.child[char];
  }
  return true;
};
