// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.first;
//   }
//   enqueue(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   dequeue(value) {
//     if (!this.first) {
//       return null;
//     }
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     const holdingPointer = this.first;
//     this.first = this.first.next;
//     this.length--;
//     return holdingPointer;
//   }
// }

// const myQueue = new Queue();
// myQueue.peek();
// myQueue.enqueue("google");
// myQueue.enqueue("google");
// myQueue.enqueue("google");
// myQueue.enqueue("google");
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();

// console.log(myQueue);

class Node {
  constructor(value) {
    this.left = left;
    this.right = right;
    this.value = value;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer;
  }
  // it optional to data print in array formate
  toArray() {
    const result = [];
    let current = this.first;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

const myQueue = new Queue();
myQueue.peek();
myQueue.enqueue("google");
myQueue.enqueue("google");
myQueue.enqueue("google");
myQueue.enqueue("google");
myQueue.dequeue();

const queueArray = myQueue.toArray();
console.log(queueArray);
