var findKthLargest = function (nums, k) {
  const maxHeap = new MaxPriorityQueue();
  for (const num of nums) {
    maxHeap.enqueue(num);
  }
  for (let i = 0; i < k - 1; i++) {
    maxHeap.dequeue();
  }
  return maxHeap.dequeue();
};

// TC: O(nlogn)
// SC: O(n)

var findKthLargest = function (nums, k) {
  const minHeap = new MinPriorityQueue();
  for (const num of nums) {
    minHeap.enqueue(num);
    if (minHeap.size() > k) minHeap.dequeue();
  }
  return minHeap.dequeue();
};

// TC: O(nlogk)
// SC: O(k)
