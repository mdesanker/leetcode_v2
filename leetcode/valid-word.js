var isValid = function (word) {
  if (word.length < 3) return false;

  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";
  const nums = "0123456789";

  let hasVowel = false;
  let hasConsonant = false;

  for (const char of word) {
    if (vowels.indexOf(char.toLowerCase()) !== -1) hasVowel = true;
    else if (consonants.indexOf(char.toLowerCase()) !== -1) hasConsonant = true;
    else if (nums.indexOf(char) !== -1) continue;
    else return false;
  }
  return hasVowel && hasConsonant;
};

// TC: O(n)
// SC: O(1)
