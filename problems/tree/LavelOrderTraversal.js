class Queue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = 0;
    this.size = 0;

    this.rear = capacity - 1;
    this.array = [];
  }

  isFull() {
    return this.size === this.capacity;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(item) {
    if (this.isFull()) return;
    this.rear = (this.rear + 1) % this.capacity;
    this.array[this.rear] = item;
    this.size = this.size + 1;
  }

  pop() {
    if (this.isEmpty()) return -1e9;
    let item = this.array[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size = this.size - 1;
    return item;
  }

  frontEle() {
    if (this.isEmpty()) return -1e9;
    return this.array[this.front];
  }

  rearEle() {
    if (this.isEmpty()) return -1e9;
    return this.array[this.rear];
  }
}

class Node {
  constructor(k) {
    this.key = k;
    this.left = null;
    this.right = null;
  }
}

function printLevel(root) {
  let ans = "";
  if (root === null) return ans;
  let q = new Queue(100000);
  q.push(root);
  q.push(null);
  while (q.size > 1) {
    let curr = q.frontEle();
    q.pop();
    if (curr === null) {
      ans += "\n";
      q.push(null);
      continue;
    }
    ans += curr.key + " ";
    if (curr.left !== null) q.push(curr.left);
    if (curr.right !== null) q.push(curr.right);
  }
  return ans;
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.right = new Node(70);
root.right.right.right = new Node(80);
let k = 2;

console.log(printLevel(root));
