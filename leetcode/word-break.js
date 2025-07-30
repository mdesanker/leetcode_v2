// Brute - TLE
var wordBreak = function (s, wordDict) {
  const n = s.length;
  const set = new Set(wordDict);

  function dp(i) {
    if (i === n) return true;

    for (let j = i; j < n; j++) {
      if (set.has(s.slice(i, j + 1)) && dp(j + 1)) return true;
    }
    return false;
  }

  return dp(0);
};

// TC: O()
// SC: O(n)

// Memoization
var wordBreak = function (s, wordDict) {
  const n = s.length;
  const set = new Set(wordDict);
  const memo = new Array(n).fill(-1);

  function dp(i, memo) {
    if (i === n) return true;
    if (memo[i] !== -1) return memo[i];

    for (let j = i; j < n; j++) {
      if (set.has(s.slice(i, j + 1)) && dp(j + 1, memo))
        return (memo[i] = true);
    }
    return (memo[i] = false);
  }
  return dp(0, memo);
};

// TC: O(n)
// SC: O(n)

// Tabulation
var wordBreak = function (s, wordDict) {
  const n = s.length;
  const set = new Set(wordDict);
  const dp = new Array(n + 1).fill(false);
  dp[n] = true;

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (set.has(s.slice(i, j + 1)) && dp[j + 1]) dp[i] = true;
    }
  }
  return dp[0];
};

// TC: O(n)
// SC: O(n)
