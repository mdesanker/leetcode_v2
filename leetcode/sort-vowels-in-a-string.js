var sortVowels = function (s) {
  const vowels = "AEIOUaeiou";
  const arr = [];
  for (const char of s) {
    if (vowels.includes(char)) arr.push(char);
  }

  arr.sort((a, b) => b.charCodeAt() - a.charCodeAt());

  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) res += arr.pop();
    else res += s[i];
  }
  return res;
};
// TC: O(nlogn)
// SC: O(n)
