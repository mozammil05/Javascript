class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function removeDuplicates(head) {
  let curr = head;
  while (curr !== null && curr.next !== null) {
    if (curr.data === curr.next.data) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

function printList(head) {
  let current = head;
  let result = "";
  while (current !== null) {
    result += current.data + " ";
    current = current.next;
  }
  return result;
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(30);
head.next.next.next.next = new Node(30);
head.next.next.next.next.next = new Node(60);
head.next.next.next.next.next.next = new Node(70);
console.log("Original List:", printList(head));
head = removeDuplicates(head);
console.log("Original List:", printList(head));
