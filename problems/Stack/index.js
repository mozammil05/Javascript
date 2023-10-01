// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.top;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//     }
//     this.length++;
//     return this;
//   }
//   pop(value) {
//     if (!this.top) {
//       return null;
//     }
//     if (this.top === this.bottom) {
//       this.bottom = null;
//     }
//     this.top = this.top.next;
//     this.length--;
//     return this;
//   }
// }

// const myStack = new Stack();
// myStack.push("google");
// myStack.push("fb");
// myStack.push("dicord");
// myStack.push("twitter");
// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.pop();

// console.log(myStack);

// stack with array implementation

class Node {
  constructor(value) {
    this.array = [];
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("google");
myStack.push("google");
myStack.push("google");
myStack.push("google");
myStack.push("google");
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();

myStack.peek();
console.log(myStack);
