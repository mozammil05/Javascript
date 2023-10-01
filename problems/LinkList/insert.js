// insert node trivarse and update node

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    let currentNode = this.head;
    let linkedListAsString = "";
    while (currentNode !== null) {
      linkedListAsString += `${currentNode.value} -> `;
      currentNode = currentNode.next;
    }
    linkedListAsString += "null";
    return linkedListAsString;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const leader = this.traverseToIndex(index - 1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
    }
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkList = new LinkList(10);
myLinkList.append(5);
myLinkList.append(16);
myLinkList.prepend(1);
myLinkList.insert(1, 119);
myLinkList.insert(3, 11);
myLinkList.insert(7, 110);

const linkedListAsString = myLinkList.printList();
console.log(linkedListAsString);
