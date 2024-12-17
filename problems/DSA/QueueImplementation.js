class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(ele) {
    this.items.push(ele);
  }
  dequeue() {
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
  rear() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}


// Input:
let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('pranav');
queue.enqueue('sachin');
queue.enqueue('yogesh');
queue.print();
queue.dequeue();
queue.dequeue();
queue.print();
queue.enqueue('prashant');
queue.enqueue('yadav');
queue.print();
console.log(queue.size());
console.log(queue.front());
console.log(queue.rear());

// Output:
true
"pranav,sachin,yogesh"
"yogesh"
"yogesh,prashant,yadav"
3
"yogesh"
"yadav"