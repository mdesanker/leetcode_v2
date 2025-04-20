class Solution {
  // Recursion (TLE)
  minCost(height) {
    // code here
    const n = height.length;

    function dp(n) {
      if (n === 0) return 0;

      const left = dp(n - 1) + Math.abs(height[n] - height[n - 1]);
      let right = Infinity;
      if (n > 1) right = dp(n - 2) + Math.abs(height[n] - height[n - 2]);

      return Math.min(left, right);
    }

    return dp(n - 1);
  }
  // TC: O(2 ^ n)
  // SC: O(n)

  // Memoization
  minCost(height) {
    // code here
    const n = height.length;
    const memo = new Array(n).fill(-1);

    function dp(n) {
      if (n === 0) return 0;

      if (memo[n] !== -1) return memo[n];

      const left = dp(n - 1) + Math.abs(height[n] - height[n - 1]);
      let right = Infinity;
      if (n > 1) right = dp(n - 2) + Math.abs(height[n] - height[n - 2]);

      return (memo[n] = Math.min(left, right));
    }

    return dp(n - 1);
  }
  // TC: O(n)
  // SC: O(n)

  // Tabluation
  minCost(height) {
    // code here
    const n = height.length;
    const dp = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
      const left = dp[i - 1] + Math.abs(height[i] - height[i - 1]);
      let right = Infinity;
      if (i > 1) right = dp[i - 2] + Math.abs(height[i] - height[i - 2]);
      dp[i] = Math.min(left, right);
    }
    return dp[n - 1];
  }
  // TC: O(n)
  // SC: O(n)

  // Tabluation - optimized
  minCost(height) {
    // code here
    const n = height.length;
    let prev1 = 0,
      prev2 = 0;

    for (let i = 1; i < n; i++) {
      const left = prev1 + Math.abs(height[i] - height[i - 1]);
      let right = Infinity;
      if (i > 1) right = prev2 + Math.abs(height[i] - height[i - 2]);
      prev2 = prev1;
      prev1 = Math.min(left, right);
    }
    return prev1;
  }
  // TC: O(n)
  // SC: O(1)
}
