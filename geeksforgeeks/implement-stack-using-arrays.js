class MyStack {
  constructor() {
    this.arr = new Array(1000);
    this.top = -1;
  }

  push(x) {}

  pop() {}
}

MyStack.prototype.push = function (x) {
  // code here
  if (this.top === this.arr.length - 1) {
    return false;
  }
  this.arr[++this.top] = x;
  return true;
};

/**
 * @returns {number}
 */
// Function to remove an item from top of the stack.
MyStack.prototype.pop = function () {
  // code here
  if (this.top < 0) {
    return this.top;
  }
  const popped = this.arr[this.top--];
  return popped;
};
