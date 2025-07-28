var countHillValley = function (nums) {
  const newArray = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === newArray[newArray.length - 1]) continue;
    else newArray.push(nums[i]);
  }

  let count = 0;
  for (let i = 1; i < newArray.length - 1; i++) {
    const prev = newArray[i - 1];
    const curr = newArray[i];
    const next = newArray[i + 1];
    if ((curr > prev && curr > next) || (curr < prev && curr < next)) count++;
  }
  return count;
};

// TC: O(n)
// SC: O(n)
