class deque {
  constructor(c) {
    this.cap = c;
    this.size = 0;
    this.arr = [];
  }

  isFull() {
    return this.size === this.cap;
  }

  isEmpty() {
    return this.size === 0;
  }

  insertRear(x) {
    if (this.isFull()) return;
    this.arr[this.size] = x;
    this.size++;
  }

  deleteRear() {
    if (this.isEmpty()) return;
    this.size--;
  }

  getRear() {
    if (this.isEmpty()) return -1;
    return this.size - 1;
  }

  insertFront(x) {
    if (this.isFull()) return;
    for (let i = this.size - 1; i >= 0; i--) {
      this.arr[i + 1] = this.arr[i];
    }
    this.arr[0] = x;
    this.size++;
  }

  deleteFront() {
    if (this.isEmpty()) return;
    for (let i = 0; i < this.size - 1; i++) {
      this.arr[i] = this.arr[i + 1];
    }
    this.size--;
  }

  getFront() {
    if (this.isEmpty()) return -1;
    return 0;
  }

  print() {
    let ans = "";
    for (let i = 0; i < this.size; i++) {
      ans += this.arr[i] + " ";
    }
    return ans;
  }
}

let deq = new deque(5);
deq.insertRear(10);
deq.insertFront(20);
deq.insertRear(30);
deq.insertFront(40);
deq.deleteFront();
deq.deleteRear();
console.log(deq.print());
