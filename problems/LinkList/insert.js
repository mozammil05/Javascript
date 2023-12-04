class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertStart(head, x) {
  let temp = new Node(x);
  if (head == null) return temp;
  temp.next = head;
  return temp;
}

function insertEnd(head, x) {
  let temp = new Node(x);
  if (head === null) {
    return temp;
  }
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = temp;
  return head;
}

function printList(head) {
  let current = head;
  let result = "";
  while (current !== null) {
    result += current.data + " ";
    current = current.next;
  }
  console.log(result.trim());
}
let head = null;

head = insertEnd(head, 10);
head = insertEnd(head, 20);
head = insertEnd(head, 30);
head = insertEnd(head, 40);

head = insertStart(head, 5);
head = insertStart(head, 0);

printList(head);
