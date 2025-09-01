// Greedy
var maxAverageRatio = function (classes, extraStudents) {
  // weight classes in heap by how much they would increase average if we add another passing student
  // maxHeap will target the largest weights first
  function calculateGain(passes, total) {
    return (passes + 1) / (total + 1) - passes / total;
  }
  const n = classes.length;
  const minHeap = new MaxPriorityQueue((x) => x[2]);
  for (const [pass, total] of classes) {
    minHeap.enqueue([pass, total, calculateGain(pass, total)]);
  }
  for (let i = 0; i < extraStudents; i++) {
    const [pass, total, gain] = minHeap.dequeue();
    // when we add a student to a class, we need to recalculate its gain
    minHeap.enqueue([pass + 1, total + 1, calculateGain(pass + 1, total + 1)]);
  }
  let sum = 0;
  while (minHeap.size()) {
    const [pass, total, gain] = minHeap.dequeue();
    sum += pass / total;
  }
  return sum / n;
};
// TC: O(klogn + 2nlogn)
// nlogn to build maxHeap, klogn to add extraStudents, nlogn to calculate final average
// SC: O(n)
