// Brute force
var findKthPositive = function(arr, k) {
    let l = 0, missing = 0;
    for (let i = 1; i <= arr[arr.length - 1] + k; i++) {
        if (!arr.includes(i)) missing++;
        if (missing === k) return i;
    }
};

// Time: O(n * m)
// Space: O(1)

// Binary search
// mid = index
// arr[mid] = value at index mid
// arr[mid] - 1 = how many numbers should come before arr[mid] (since we expect an array incrementing from 1 to arr[mid])
// arr[mid] - 1 - mid = how many numbers are missing
var findKthPositive = function(arr, k) {
    let l = 0, r = arr.length - 1;
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (arr[mid] - 1 - mid < k) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return l + k;
};

// Time: O(logn)
// Space: O(1)

/**
arr = [1, 2, 3, 4,, 5]
At arr[0] = 1 → missing = 1 - 1 - 0 = 0
At arr[1] = 2 → missing = 2 - 1 - 1 = 0
At arr[2] = 3 → missing = 3 - 1 - 2 = 0

arr = [2, 3, 4, 7, 11]
mid = 0, arr[mid] = 2: missing = 2 - 1 - 0 = 1 → missing [1]
mid = 3, arr[mid] = 7: missing = 7 - 1 - 3 = 3 → missing [1, 5, 6]
 */