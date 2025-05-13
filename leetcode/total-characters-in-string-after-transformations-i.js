var lengthAfterTransformations = function (s, t) {
  const MOD = 10 ** 9 + 7;
  let count = 0;
  let arr = new Array(26).fill(0);

  for (const char of s) {
    arr[char.charCodeAt() - "a".charCodeAt()]++;
  }

  for (let i = 0; i < t; i++) {
    let nxt = new Array(26).fill(0);
    nxt[0] = arr[25];
    nxt[1] = (arr[25] + arr[0]) % MOD;
    for (let i = 2; i < 26; i++) {
      nxt[i] = arr[i - 1];
    }
    arr = nxt;
  }
  const total = arr.reduce((acc, curr) => acc + curr, 0);
  return total % MOD;
};

// TC: O(n + 26t)
// SC: O(26)
// n = s.length
