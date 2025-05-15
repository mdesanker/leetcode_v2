// Bucket sort
var topKFrequent = function (words, k) {
  const bucket = [];
  const count = new Map();

  for (const word of words) {
    count.set(word, count.get(word) + 1 || 1);
  }

  for (const [word, freq] of count) {
    bucket[freq] ? bucket[freq].push(word) : (bucket[freq] = [word]);
  }

  const res = [];
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      bucket[i].sort((a, b) => a.localeCompare(b));
      res.push(...bucket[i]);
    }
    if (res.length >= k) return res.slice(0, k);
  }
};

// TC: O(n)
// SC: O(n)
