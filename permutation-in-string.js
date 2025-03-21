// Sliding window
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  let l = 0,
    r = 0,
    reqLen = s1.length,
    freqMap = {};
  for (let i = 0; i < s1.length; i++) {
    freqMap[s1[i]] = (freqMap[s1[i]] || 0) + 1;
  }
  while (r < s2.length) {
    const rChar = s2[r];
    if (freqMap[rChar] > 0) reqLen--;
    freqMap[rChar]--;
    r++;
    if (reqLen === 0) return true;
    if (r - l === s1.length) {
      const lChar = s2[l];
      if (freqMap[lChar] >= 0) reqLen++;
      freqMap[lChar]++;
      l++;
    }
  }
  return false;
};

// Time: O(n + m)
// Space: O(n)
// n = s1.length, m = s2.length
