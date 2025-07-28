var TimeMap = function () {
  this.store = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.store.get(key)) this.store.set(key, []);
  this.store.get(key).push([value, timestamp]);
};

// TC: O(1)
// SC: O(1)

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.store.get(key)) return "";

  const values = this.store.get(key) || [];
  let resIdx = -1;
  let l = 0,
    r = values.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (values[mid][1] <= timestamp) {
      resIdx = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return resIdx === -1 ? "" : values[resIdx][0];
};

// TC: O(logn)
// SC: O(1)
