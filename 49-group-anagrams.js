/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};

  for (const str of strs) {
    // map each letter to a number 0 - 26 and count frequency of each letter in str
    const count = new Array(26).fill(0);

    for (const char of str) {
      count[char.charCodeAt() - 97]++;
    }

    // build unique string for each combination of letters to use as key
    const key = count.join("#");
    map[key] ? map[key].push(str) : (map[key] = [str]);
  }
  return Object.values(map);
};

// Time: O(n * m) n = strs.length, m = avg length for str
// Space: O(n * m)
