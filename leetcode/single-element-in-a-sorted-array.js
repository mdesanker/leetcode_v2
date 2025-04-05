// Brute force
var singleNonDuplicate = function (nums) {
  const map = {};
  for (const num of nums) {
    if (map.hasOwnProperty(num)) delete map[num];
    else map[num] = true;
  }
  return Number(Object.keys(map)[0]);
};

// Time: O(n)
// Space: O(n)

// Binary search
var singleNonDuplicate = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const halvesEven = (r - mid) % 2 === 0;

    if (nums[mid] === nums[mid + 1]) {
      // right side is even, but it includes mid + 1 right side actually odd
      if (halvesEven) {
        l = mid + 2;
      } else {
        r = mid - 1;
      }
    } else if (nums[mid] === nums[mid - 1]) {
      // right side even including mid + 1, so left side odd
      if (halvesEven) {
        r = mid - 2;
      } else {
        l = mid + 1;
      }
      // mid doesn't have a pair
    } else return nums[mid];
  }
  return nums[l];
};

// Time: O(logn)
// Space: O(1)
