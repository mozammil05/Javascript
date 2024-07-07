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

// class Node {
//   constructor(value) {
//     this.array = [];
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.array = [];
//   }
//   peek() {
//     return this.array[this.array.length - 1];
//   }
//   push(value) {
//     this.array.push(value);
//     return this;
//   }
//   pop() {
//     this.array.pop();
//     return this;
//   }
// }

// const myStack = new Stack();
// myStack.push("google");
// myStack.push("google");
// myStack.push("google");
// myStack.push("google");
// myStack.push("google");
// myStack.push("google");
// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.pop();

// myStack.peek();
// console.log(myStack);




class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    // Push element x onto stack
    push(x) {
        this.queue1.push(x);
    }

    // Removes the element on top of the stack and returns that element
    pop() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        const poppedElement = this.queue1.shift();

        // Swap the queues
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return poppedElement;
    }

    // Get the top element
    top() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        const topElement = this.queue1.shift();
        this.queue2.push(topElement);

        // Swap the queues
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return topElement;
    }

    // Returns whether the stack is empty
    empty() {
        return this.queue1.length === 0;
    }
}

// Example usage:
const myStack = new MyStack();
console.log(myStack.push(1)); // Output: undefined
console.log(myStack.push(2)); // Output: undefined
console.log(myStack.top());   // Output: 2
console.log(myStack.pop());   // Output: 2
console.log(myStack.empty()); // Output: false
