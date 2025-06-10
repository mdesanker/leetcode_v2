var strongPasswordCheckerII = function (password) {
  if (password.length < 8) return false;
  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;
  let hasChar = false;

  const specialChars = "!@#$%^&*()-+";

  for (let i = 0; i < password.length; i++) {
    if (i > 0 && password[i] === password[i - 1]) return false;
    const val = password[i];
    if (val.match(/[a-z]/g)) hasLower = true;
    else if (val.match(/[A-Z]/g)) hasUpper = true;
    else if (val.match(/[0-9]/g)) hasDigit = true;
    else if (specialChars.indexOf(val) !== -1) hasChar = true;
  }
  console.log(hasLower, hasUpper, hasDigit, hasChar);

  return hasLower && hasUpper && hasDigit && hasChar;
};

// TC: O(n)
// SC: O(1)
