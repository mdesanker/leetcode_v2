var isIsomorphic = function (s, t) {
  // s = 'badc', t = 'baba' -> 'b' maps to 'b', and 'd' maps to 'b'
  // need to check mapping in both directions to catch
  const maps = {},
    mapt = {};
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];
    if (!maps.hasOwnProperty(sChar) && !mapt.hasOwnProperty(tChar)) {
      maps[sChar] = tChar;
      mapt[tChar] = sChar;
    } else if (maps[sChar] !== tChar || mapt[tChar] !== sChar) return false;
  }
  return true;
};

// Time: O(n)
// Space: O(n)
