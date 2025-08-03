class TrieNode {
  constructor() {
    this.child = {};
    this.end = false;
  }
}

var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let curr = this.root;
  for (const char of word) {
    if (!curr.child[char]) curr.child[char] = new TrieNode();
    curr = curr.child[char];
  }
  curr.end = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function dfs(node, ind) {
    let curr = node;
    for (let i = ind; i < word.length; i++) {
      const char = word[i];
      if (char === ".") {
        for (const child of Object.values(curr.child)) {
          if (dfs(child, i + 1)) return true;
        }
        return false;
      } else {
        if (!curr.child[char]) return false;
        curr = curr.child[char];
      }
    }
    return curr.end;
  }
  return dfs(this.root, 0);
};
