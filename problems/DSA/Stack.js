class Stack {
  constructor() {
    this.items = [];
  }

  push(ele) {
    this.items.push(ele);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items.length = 0;
  }

  size() {
    return this.items.length;
  }
}

// Example usage:
let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // Output: 3
console.log(stack.isEmpty()); // Output: false
console.log(stack.size()); // Output: 3
console.log(stack.pop()); // Output: 3
console.log(stack.size()); // Output: 2
stack.clear();
console.log(stack.isEmpty()); // Output: true
