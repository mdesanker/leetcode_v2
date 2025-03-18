/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const hash = {};

  for (const letter of s) {
    hash[letter] = (hash[letter] || 0) + 1;
  }

  for (const letter of t) {
    if (hash.hasOwnProperty(letter)) {
      hash[letter]--;

      if (hash[letter] === 0) {
        delete hash[letter];
      }
    } else {
      return false;
    }
  }

  return Object.keys(hash).length === 0;
};

// Time: O(n)
// Space: O(n)
