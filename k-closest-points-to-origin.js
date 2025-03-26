// Sort
var kClosest = function (points, k) {
  function distance(point) {
    const [x, y] = point;
    return x * x + y * y;
  }

  points.sort((a, b) => distance(a) - distance(b));
  return points.slice(0, k);
};

// Time: O(nlogn)
// Space: O(n)

// Min heap
var kClosest = function (points, k) {
  const minHeap = new MinPriorityQueue();
  for (let [x, y] of points) {
    const distance = x * x + y * y;
    minHeap.enqueue([x, y], distance);
  }

  const res = [];
  while (res.length < k) res.push(minHeap.dequeue());
  return res;
};

// Time: O(nlogn)
// Space: O(n)

// Max heap
var kClosest = function (points, k) {
  const maxHeap = new MaxPriorityQueue();
  for (let [x, y] of points) {
    const distance = x * x + y * y;
    maxHeap.enqueue([x, y], distance);
    if (maxHeap.size() > k) maxHeap.dequeue();
  }

  return maxHeap.toArray().reverse();
};

// Time: O(nlogk) heap does not get longer than k elements
// Space: O(k)
