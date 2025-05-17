// Bubble sort (optimized)
// Compare each adjacent pair and switch if not in right order
// Repeat until entire array sorted
var sortColors = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
};

// TC: O(n^2)
// SC: O(1)

// Selection sort
// Assume the first element is the min element
// Check to see if there is an element lower than the assumed min and switch
var sortColors = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let minInd = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minInd]) {
        minInd = j;
      }
    }
    [nums[i], nums[minInd]] = [nums[minInd], nums[i]];
  }
};

// TC: O(n^2)
// SC: O(1)
