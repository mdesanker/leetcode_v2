var maximum69Number = function (num) {
  let res = 0;
  const arr = num.toString().split("");
  let hasChanged = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "6") {
      arr[i] = 9;
      break;
    }
  }
  return Number(arr.join(""));
};
// TC: O(n)
// SC: O(n)
