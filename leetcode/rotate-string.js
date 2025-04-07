// Brute force
var rotateString = function (s, goal) {
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s.slice(i, n) + s.slice(0, i) === goal) return true;
  }
  return false;
};

// Time: O(n^2)
// Space: O(n)

// String concatenation
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  return (s + s).indexOf(goal) !== -1;
};

// Time: O(n)
// Space: O(n)

// double string
// s = 'abcde', goal = 'cdeab'
// double s find goal = 'ab[cdeab]cde'
