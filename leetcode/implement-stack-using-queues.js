// Two queues
var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

MyStack.prototype.push = function (x) {
  this.q1.push(x);
};
// Time: O(1)

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.q1.length > 1) {
    this.q2.push(this.q1.shift());
  }
  const val = this.q1.shift();
  while (this.q2.length > 0) {
    this.q1.push(this.q2.shift());
  }
  return val;
};
// Time: O(n) queue must move through every element (each element is O(1) because at front of queue)

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.q1.length > 1) {
    this.q2.push(this.q1.shift());
  }
  const val = this.q1[0];
  this.q2.push(this.q1.shift());
  while (this.q2.length > 0) {
    this.q1.push(this.q2.shift());
  }
  return val;
};
// Time: O(n)

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};
// Time: O(1)
// Space: O(n) n elements in one queue at a time

// One queue
var MyStack = function () {
  this.q = [];
};

MyStack.prototype.push = function (x) {
  this.q.push(x);
};
// Time: O(1)

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  for (let i = 0; i < this.q.length - 1; i++) {
    this.q.push(this.q.shift());
  }
  return this.q.shift();
};
// Time: O(n) queue must move through every element (each element is O(1) because at front of queue)

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  for (let i = 0; i < this.q.length - 1; i++) {
    this.q.push(this.q.shift());
  }
  const val = this.q[0];
  this.q.push(this.q.shift());
  return val;
};
// Time: O(n)

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q.length === 0;
};
// Time: O(1)
// Space: O(n) n elements in the queue
