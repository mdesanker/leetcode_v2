// Sliding window
var maxScore = function (cardPoints, k) {
  let lSum = 0,
    rSum = 0,
    max = 0;
  for (let i = 0; i < k; i++) lSum += cardPoints[i];
  max = Math.max(max, lSum + rSum);

  for (let i = 0; i < k; i++) {
    lSum -= cardPoints[k - 1 - i];
    rSum += cardPoints[cardPoints.length - 1 - i];
    max = Math.max(max, lSum + rSum);
  }
  return max;
};

// Time: O(2 * k)
// Space: O(1)
