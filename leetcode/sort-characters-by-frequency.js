// Max heap
var frequencySort = function (s) {
  const map = new Map();
  for (const char of s) map.set(char, (map.get(char) || 0) + 1);

  const maxHeap = new MaxPriorityQueue((el) => el.freq);
  for (const [char, freq] of map) {
    maxHeap.enqueue({ char, freq });
  }

  let res = "";
  while (maxHeap.size()) {
    const { char, freq } = maxHeap.dequeue();
    res += char.repeat(freq);
  }
  return res;
};

// Time: O(n + nlogn) - n to build char map, nlogn to enqueue, dequeue every element
// Space: O(n) - size of map and heap

// Array.sort
var frequencySort = function (s) {
  const map = new Map();
  for (const char of s) map.set(char, (map.get(char) || 0) + 1);

  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);

  let res = "";
  for (const [char, freq] of sorted) {
    res += char.repeat(freq);
  }
  return res;
};

// Time: O(n + nlogn) - n to build char map, nlogn for array.sort method
// Space: O(n) - size of map and sorted array

// Bucket sort
var frequencySort = function (s) {
  const map = new Map();
  for (const char of s) map.set(char, (map.get(char) || 0) + 1);

  const bucket = [];
  for (const [char, freq] of map) {
    bucket[freq] = (bucket[freq] || new Set()).add(char);
  }

  let res = "";
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      for (const char of bucket[i]) {
        res += char.repeat(i);
      }
    }
  }
  return res;
};

// Time: O(n) - n to build char map and bucket array
// Space: O(n) - size of map and bucket
