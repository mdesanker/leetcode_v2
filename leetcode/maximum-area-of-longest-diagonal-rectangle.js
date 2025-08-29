var areaOfMaxDiagonal = function (dimensions) {
  let maxArea = 0,
    maxDiag = 0;
  for (const [len, wid] of dimensions) {
    let diag = len * len + wid * wid;
    let area = len * wid;

    if (diag > maxDiag) {
      maxArea = area;
      maxDiag = diag;
    } else if (diag === maxDiag) {
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
};
// TC: O(n)
// SC: O(1)
