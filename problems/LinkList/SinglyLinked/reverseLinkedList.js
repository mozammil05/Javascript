// // itrative solutions

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// function ReverseLinkedList(head, ) {
//   let arr = [];
//   for (let curr = head; curr !== null; curr = curr.next) {
//     arr.push(curr.data);
//   }

//   for (let curr = head; curr !== null; curr = curr.next) {
//     curr.data = arr.pop();
//   }
//   return head;
// }

// function printList(head) {
//   let current = head;
//   let result = "";
//   while (current !== null) {
//     result += current.data + " ";
//     current = current.next;
//   }
//   return result;
// }

// let head = new Node(10);
// head.next = new Node(20);
// head.next.next = new Node(30);
// head.next.next.next = new Node(40);
// console.log(printList(head));
// head = ReverseLinkedList(head);
// console.log(printList(head));

// efficient solutions

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// function ReverseLinkedList(head, ) {
//   let curr = head;
//   let prev = null;
//   while (curr !== null) {
//     let next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }

//   return prev;
// }

// function printList(head) {
//   let current = head;
//   let result = "";
//   while (current !== null) {
//     result += current.data + " ";
//     current = current.next;
//   }
//   return result;
// }

// let head = new Node(10);
// head.next = new Node(20);
// head.next.next = new Node(30);
// head.next.next.next = new Node(40);
// console.log(printList(head));
// head = ReverseLinkedList(head);
// console.log(printList(head));

// --------------using recusrion---------------------------------------------------------------------------------

// part  one

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// function ReverseLinkedList(head) {
//   if (head === null || head.next === null) {
//     return head;
//   }
//   let rest_head = ReverseLinkedList(head.next);
//   let rest_tail = head.next;
//   rest_tail.next = head;
//   head.next = null;
//   return rest_head;
// }

// function printList(head) {
//   let current = head;
//   let result = "";
//   while (current !== null) {
//     result += current.data + " ";
//     current = current.next;
//   }
//   return result;
// }

// let head = new Node(10);
// head.next = new Node(20);
// head.next.next = new Node(30);
// head.next.next.next = new Node(40);
// console.log(printList(head));
// head = ReverseLinkedList(head);
// console.log(printList(head));
// // time complexity o(n)
// aux space o(n)

// part  one

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function ReverseLinkedList(curr, prev = null) {
  // Base case: If the current node is null, the list is reversed.
  if (curr == null) {
    return prev;
  }

  // Save the next node to avoid losing the reference during the reversal.
  let next = curr.next;

  // Reverse the link by updating the current node's next to the previous node.
  curr.next = prev;

  return ReverseLinkedList(next, curr);
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
head.next.next.next = new Node(40);
console.log(printList(head));
head = ReverseLinkedList(head);
console.log(printList(head));
// time complexity o(n)
// aux space o(n)
