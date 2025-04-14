class MyQueue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.arr = new Array(100005);
  }

  /**
   * @param {number} x
   */

  //Function to push an element x in a queue.
  push(x) {
    // Your code here
    if (this.rear >= this.arr.length - 1) {
      return false;
    }
    this.arr[this.rear++] = x;
    return true;
  }

  /**
   * @returns {number}
   */

  //Function to pop an element from queue and return that element.
  pop() {
    // Your code here
    if (this.rear === this.front) {
      return -1;
    }
    const popped = this.arr[this.front++];
    return popped;
  }
}
