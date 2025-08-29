function subsetSumToK(n, k, arr) {
  // Write your code here.
  const memo = new Array(n).fill(0).map(() => new Array(k + 1).fill(null));

  function dp(i, j) {
    if (j === 0) return true;
    if (i === 0) return arr[i] === j;

    if (memo[i][j] !== null) return memo[i][j];

    let take = dp(i - 1, j - arr[i]);
    let notTake = dp(i - 1, j);

    return (memo[i][j] = take || notTake);
  }
  return dp(n - 1, k);
}
// TC: O(n * k)
// SC: O(n * k)

// TC (Brute): O(2 ^ n)
// SC (Brute): O(n)

// Tabulation
function subsetSumToK(n, k, arr) {
  // Write your code here.
  const dp = new Array(n).fill(0).map(() => new Array(k + 1).fill(false));

  for (let i = 0; i < n; i++) dp[i][0] = true;
  dp[0][arr[0]] = true;

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < k + 1; j++) {
      let notTake = dp[i - 1][j];
      let take = false;
      if (j >= arr[i]) {
        take = dp[i - 1][j - arr[i]];
      }
      dp[i][j] = take || notTake;
    }
  }
  return dp[n - 1][k];
}
// TC: O(n * k)
// SC: O(n * k)

// Tabulation - Space optimized
function subsetSumToK(n, k, arr) {
  // Write your code here.
  let dp = new Array(k + 1).fill(false);
  dp[0] = true;
  dp[arr[0]] = true;

  for (let i = 1; i < n; i++) {
    let temp = new Array(k + 1).fill(false);
    temp[0] = true;
    for (let j = 1; j < k + 1; j++) {
      let notTake = dp[j];
      let take = false;
      if (j >= arr[i]) {
        take = dp[j - arr[i]];
      }
      temp[j] = take || notTake;
    }
    dp = temp;
  }
  return dp[k];
}
// TC: O(n * k)
// SC: O(k)

module.exports.subsetSumToK = subsetSumToK;
