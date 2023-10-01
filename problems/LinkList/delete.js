// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkList {
//   constructor(value) {
//     this.head = new Node(value);
//     this.tail = this.head;
//     this.length = 1;
//   }

//   append(value) {
//     const newNode = new Node(value);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }

//   prepend(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }

//   printList() {
//     let currentNode = this.head;
//     let linkedListAsString = "";
//     while (currentNode !== null) {
//       linkedListAsString += `${currentNode.value} -> `;
//       currentNode = currentNode.next;
//     }
//     linkedListAsString += "null";
//     return linkedListAsString;
//   }

//   insert(index, value) {
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     const newNode = new Node(value);
//     if (index === 0) {
//       newNode.next = this.head;
//       this.head = newNode;
//     } else {
//       const leader = this.traverseToIndex(index - 1);
//       const holdingPointer = leader.next;
//       leader.next = newNode;
//       newNode.next = holdingPointer;
//     }
//     this.length++;
//     return this.printList();
//   }

//   delete(index) {
//     if (index === 0) {
//       this.head = this.head.next;
//     } else {
//       const leader = this.traverseToIndex(index - 1);
//       const unwantedNode = leader.next;
//       leader.next = unwantedNode.next;
//       if (index === this.length - 1) {
//         this.tail = leader;
//       }
//     }
//     this.length--;
//     return this.printList();
//   }

//   traverseToIndex(index) {
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter < index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
// }

// const myLinkList = new LinkList(10);
// myLinkList.append(5);
// myLinkList.append(16);
// myLinkList.prepend(1);
// myLinkList.insert(1, 119);
// myLinkList.insert(3, 11);
// myLinkList.insert(7, 110);
// myLinkList.delete(3);
// console.log(myLinkList);

// Find the number of vowels in a string.
// function findVowel(str) {
//   const count = 0;

//   for (var i = 0; i < str.length; i++) {
//     if (
//       str.includes("a") ||
//       str.includes("e") ||
//       str.includes("i") ||
//       str.includes("o") ||
//       str.includes("u")
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(findVowel("mozammil"));

// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       count++;
//     }
//   }
//   return count
// }

// console.log(countVowels("mozammil"));

function findVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelOccurrences = [];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelOccurrences.push({ index: i, vowel: str[i] });
    }
  }

  return vowelOccurrences;
}

// console.log(findVowels("i am mozammil raja"));

// Reverse the order of words in a sentence.

function wordReverse(str) {
  return str.split(" ").reverse().join(" ");
}

// console.log(wordReverse("i am mozammil raja"));

// Find the smallest common multiple (LCM) of two numbers.

// function findLCM(a, b) {
//   function findGCD(a, b) {
//     if (b === 0) {
//       return a;
//     }
//     return findGCD(b, a % b);
//   }
//   const gcd = findGCD(a, b);
//   const lcm = (a, b) / gcd;
//   return lcm;
// }

// function findLCM(a, b) {
//   // Find the greatest common divisor (GCD) using Euclid's algorithm
//   function findGCD(a, b) {
//     if (b === 0) {
//       return a;
//     }
//     return findGCD(b, a % b);
//   }

//   // Calculate LCM using the formula: LCM(a, b) = (a * b) / GCD(a, b)
//   const gcd = findGCD(a, b);
//   const lcm = (a * b) / gcd;

//   return lcm;
// }

// const number1 = 12;
// const number2 = 18;
// const lcm = findLCM(number1, number2);
// // console.log(lcm, "dskjAS"); // Output: 36

// function lcmAndGcd(A, B) {
//   // Calculate GCD using Euclidean algorithm
//   function findGCD(a, b) {
//     while (b !== 0) {
//       const temp = b;
//       b = a % b;
//       a = temp;
//     }
//     return a;
//   }

//   // Calculate LCM using the formula: LCM(a, b) = (a * b) / GCD(a, b)
//   const gcd = findGCD(A, B);
//   const lcm = (A * B) / gcd;

//   console.log("LCM:", lcm);
//   console.log("GCD:", gcd);
// }
// const A = 5;
// const B = 10;
// console.log(lcmAndGcd(A, B),"whiew");

// insert linkList

class LinkList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
    };
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
    const newNode = {
      value: value,
      next: null,
    };
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
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // check params
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

const myLinkList = new LinkList(10);
myLinkList.append(5);
myLinkList.append(16);
myLinkList.prepend(1);
myLinkList.insert(5, 119);
myLinkList.remove(2);
// myLinkList.remove(5);

const linkedListAsString = myLinkList.printList();
console.log(linkedListAsString);
