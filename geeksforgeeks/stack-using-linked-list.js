// add new elements to beginning of linked list
class MyStack {
  // class StackNode{
  //     constructor(a){
  //         this.data = a;
  //         this.next = null;
  //     }
  // }
  constructor() {
    this.top = null;
  }

  /**
   * @param {number} a
   */

  // Function to push an integer into the stack.
  push(a) {
    // code here
    const node = new StackNode(a);
    node.next = this.top;
    this.top = node;
  }

  /**
   */

  // Function to remove an item from top of the stack.
  pop() {
    // code here
    if (this.top === null) return -1;
    const node = this.top;
    this.top = this.top.next;
    return node.data;
  }
}
