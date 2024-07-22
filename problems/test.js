// console.log(2 + "2");

const { count } = require("console");
const { futimes, lutimes, read } = require("fs");
const { it } = require("node:test");
const { join } = require("path");
const { json } = require("stream/consumers");
const { setTimeout } = require("timers/promises");

// console.log(1 < 2 < 3);

// console.log("5" - 3);

// console.log([] == ![]);
// const arr = [1, 2, 3];
// arr[10] = 10;
// console.log(arr);

// var a = 10;
// {
//   let a = 20;
//   console.log(a);
// }
// console.log(a);

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log("Inside SetTimeOut", i);
//   }, 1000);
// }
// console.log("Hi");

// console.log(a);
// var a = 10;
// console.log(a);

// console.log(foo());
// function foo() {
//   return "hello word";
// }

// console.log(foo());

// const foo = () => {
//   return "hello word";
// };

// function x() {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
//   var i = 1;
// }
// x();

// function f(x, y, ...a) {
//   return (x + y) * a.length;
// }
// console.log(f(1, 2, "hello", true, 7) === 9)
// function greet() {
//   var message = "Hello, ";
//   console.log(message + name);
// }

// var name = "Alice";
// greet();

// var rate = 10;

// function getRate() {
//   if (rate === undefined) {
//     var rate = 6;
//     return rate;
//   } else {
//     return 10;
//   }
// }

// console.log(getRate());

// console.log(squire);
// console.log(squire(5));
// var squire = function (n) {
//   return n * n;
// };

// function addSquire(a, b) {
//   function squire(n) {
//     return n * n;
//   }
//   return squire(a) + squire(b);
// }

// a = addSquire(2, 3);
// b = addSquire(3, 4);
// c = addSquire(4, 5);

// console.log(a, b, c);

// console.log(navigator.platform);

// function fizBuz(num) {
//   for (let i = 1; i <= num; i++) {
//     // Changed the loop condition to include num
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizbuz"); // Output "fizbuz" for numbers divisible by both 3 and 5
//     } else if (i % 3 === 0) {
//       console.log("fiz"); // Output "fiz" for numbers divisible by 3 only
//     } else if (i % 5 === 0) {
//       console.log("buz"); // Output "buz" for numbers divisible by 5 only
//     } else {
//       console.log(i); // Output the number itself if not divisible by 3 or 5
//     }
//   }
// }

// let num = 50;

// console.log(fizBuz(num)); // Call the function without console.log since the function itself logs the output

// function fetchData(callback) {
//   // Simulating asynchronous operation
//   setTimeout(() => {
//     const data = "Some data";
//     callback(data);
//   }, 1000);
// }
// function processData(data) {
//   console.log("Data processed:", data);
// }
// fetchData(processData);

// function findLargestNumber(arr) {
//   if (arr.length === 0) {
//     return -1;
//   }
//   let largest = 0;
//   let secondLargest = 0;
//   let thirdLargest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       thirdLargest = secondLargest;
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     } else if (arr[i > thirdLargest]) {
//       thirdLargest = arr[i];
//     }
//   }
//   return thirdLargest;
// }

// let arr = [3, 5, 6, 7, 9, 13];

// console.log(findLargestNumber(arr));

// function findLargestNumber(arr) {
//   arr.sort((a, b) => b - a);

//   return arr[1];
// }
// let arr = [3, 5, 6, 7, 9, 13];

// console.log(findLargestNumber(arr));

// function mergeSortedArray(a, b) {
//   let result = [];
//   let i = 0,
//     j = 0;

//   while (i < a.length && j < b.length) {
//     if (a[i] < b[j]) {
//       result.push(a[i]);
//       i++;
//     } else {
//       result.push(b[j]);
//       j++;
//     }

//     while (i < a.length) {
//       result.push(a[i]);
//       i++;
//     }
//     while (j < b.length) {
//       result.push(b[j]);
//       j++;
//     }
//   }

//   return result;
// }
// let a = [10, 15, 20, 40];
// let b = [5, 6, 6, 10, 15];

// let mergedArray = mergeSortedArray(a, b);
// console.log(mergedArray);

// function mergeSortedArray(a, b) {
//   let result = [];
//   let i = 0,
//     j = 0;

//   while (i < a.length && j < b.length) {
//     if (a[i] < b[j]) {
//       result.push(a[i]);
//       i++;
//     } else {
//       result.push(b[j]);
//       j++;
//     }
//   }

//   // Add remaining elements from array 'a'
//   while (i < a.length) {
//     result.push(a[i]);
//     i++;
//   }

//   // Add remaining elements from array 'b'
//   while (j < b.length) {
//     result.push(b[j]);
//     j++;
//   }

//   return result;
// }

// let a = [10, 15, 20, 40];
// let b = [5, 6, 6, 10, 15];

// let mergedArray = mergeSortedArray(a, b);
// console.log(mergedArray);

// binary search

// function binarySearch(arr, x) {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (arr[mid] === x) {
//       return mid;
//     } else if (arr[mid] < x) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// }

// let a = [10, 15, 20, 40];
// console.log(binarySearch(a, 21));
// var msg = "Good morning";
// function greeting() {
//   msg = "Good Evening";
//   console.log(msg);
// }
// greeting();

// const asyncFun = async() => {
//   let res = await  "hello world"
//   console.log(res)
// };
// asyncFun();

// function deep() {
//   const original = { a: 1, b: { c: 2 } };
//   const shallowCopy = Object.assign({}, original);
//   const deepCopy = JSON.parse(JSON.stringify(original));
//   console.log(shallowCopy,deepCopy)
// }

// console.log(deep());

// function outer() {
//   let outer = "i am outer fun";
//   function inner() {
//     console.log(outer);
//   }
//   return inner;
// }
// let res = outer();
// res();

// function max(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     let curr = 0;
//     for (let j = i; j < arr.length; j++) {
//       curr += arr[j];
//       max = Math.max(max, curr);
//     }
//   }
//   return max;
// }

// let arr = [2, 3, -8, 7, -1, 2, 3];
// console.log(max(arr));
// Time complexity o(n)

// function maxSubArray(arr) {
//   let maxEnd = arr[0];
//   let res = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     maxEnd = Math.max(maxEnd + arr[i], arr[i]);
//     res = Math.max(maxEnd, res);
//   }
//   return res;
// }
// let arr = [2, 3, -8, 7, -1, 2, 3];
// console.log(maxSubArray(arr));

// // Time complexity o(n)

// function maxEvenOddSubArray(arr) {
//   let res = 1;
//   for (let i = 0; i < arr.length; i++) {
//     let curr = 1;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (
//         (arr[j] % 2 === 0 && arr[j - 1] % 2 !== 0) ||
//         (arr[j] % 2 !== 0 && arr[j - 1] % 2 === 0)
//       ) {
//         curr++;
//       } else {
//         break;
//       }
//     }
//     res = Math.max(res, curr);
//   }
//   return res;
// }

// let arr = [10, 12, 14, 7, 8];
// console.log(maxEvenOddSubArray(arr)); // Output: 3

// function maxEvenOddSubArray(arr) {
//   let res = 1;
//   let curr = 1;

//   for (let i = 1; i < arr.length; i++) {
//     if (
//       (arr[i] % 2 === 0 && arr[i - 1] % 2 !== 0) ||
//       (arr[i] % 2 !== 0 && arr[i - 1] % 2 === 0)
//     ) {
//       curr++;
//       res = Math.max(res, curr);
//     } else {
//       curr = 1;
//     }
//   }
//   return res;
// }

// let arr = [10, 12, 14, 7, 8];
// console.log(maxEvenOddSubArray(arr)); // Output: 3

// Example asynchronous tasks
async function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 completed");
    }, 1000);
  });
}

async function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 completed");
    }, 2000);
  });
}

// async function task3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task 3 completed");
//     }, 1500);
//   });
// }

// // Async tasks in series function
// // async function seriesTasks(tasks) {
// //   let results = [];
// //   for (let task of tasks) {
// //     results.push(await task());
// //   }
// //   return results;
// // }

// // // Example usage
// // const tasks = [task1, task2, task3];

// // seriesTasks(tasks)
// //   .then((results) => {
// //     console.log("All tasks completed:");
// //     console.log(results);
// //   })
// //   .catch((error) => {
// //     console.error("Error executing tasks:", error);
// //   });

// function isSubSum(arr, sum) {
//   for (let i = 0; i < arr.length; i++) {
//     let curr = 0;
//     for (let j = i; j < arr.length; j++) {
//       curr += arr[j];
//       if (curr === sum) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// let arr = [1, 4, 20, 3, 10, 5];

// console.log(isSubSum(arr, 33));

// Subarray with given Sum

// function isSubSum(arr, sum) {
//   let start = 0,
//     curr = 0;
//   for (let i = 0; i < arr.length; i++) {
//     curr += arr[i];
//     while (sum < curr) {
//       curr -= arr[start];
//       start++;
//       if (curr === sum) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

// let arr = [1, 4, 20, 3, 10, 5];

// console.log(isSubSum(arr, 33));

// function frequencyApearingRenge(left, right) {
//   let freq = new Array(100).fill(0);
//   let n = left.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = left[i]; j < right[i]; j++) {
//       freq[j] += 1;
//       let res = 0;
//       for (let j = 0; j < 100; j++) {
//         if (freq[i] > freq[res]) {
//           res = i;
//         }
//       }
//     }
//   }
//   return res;
// }
// let left = [1, 2, 5, 15];
// let right = [5, 8, 7, 18];
// console.log(frequencyApearingRenge(left, right));

// function frequencyApearingRenge(left, right) {
//   let freq = new Array(100).fill(0);
//   let n = left.length;
//   let res = -1; // Initialize result to -1
//   for (let i = 0; i < n; i++) {
//     for (let j = left[i]; j < right[i]; j++) {
//       freq[j]++;
//       if (freq[j] > freq[res]) {
//         // Compare frequencies correctly
//         res = j;
//       }
//     }
//   }
//   return res;
// }

// let left = [1, 2, 5, 15];
// let right = [5, 8, 7, 18];
// console.log(frequencyApearingRenge(left, right)); // Output: 5

// JavaScript function to find maximum occurred element in
// given N ranges.

// function maximumOccurredElement(L, R, n) {
//   // Initialising all element of array to 0.
//   let arr = new Array(1000000).fill(0);

//   // Adding +1 at Li index and subtracting 1
//   // at Ri index.
//   let maxi = -1;
//   for (let i = 0; i < n; i++) {
//     arr[L[i]] += 1;
//     arr[R[i] + 1] -= 1;
//     if (R[i] > maxi) {
//       maxi = R[i];
//     }
//   }

//   // Finding prefix sum and index having maximum
//   // prefix sum.
//   let msum = arr[0],
//     ind;
//   for (let i = 1; i < maxi + 1; i++) {
//     arr[i] += arr[i - 1];
//     if (msum < arr[i]) {
//       msum = arr[i];
//       ind = i;
//     }
//   }

//   return ind;
// }

// // Driven code
// let L = [1, 4, 9, 13, 21];
// let R = [15, 8, 12, 20, 30];
// let n = L.length;

// console.log(maximumOccurredElement(L, R, n));

// rest operator
// function sum(...nums) {
//   return nums.reduce((a, b) => a + b);
// }

// let arr = [2, 3, 4, 5, 56, 7, 7];

// console.log(sum(1, 2, 3, 4, 5));

// Spred operator

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4, 5];
// let arr3 = [1, 2, 3, 4, 5];

// let combinde = [...arr1, ...arr2, ...arr3];

// console.log(combinde);

// function RoofTop(arr) {
//   let count = 0;
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//       count++;
//       max = Math.max(max, count);
//     } else {
//       count = 0;
//     }
//   }

//   return max;
// }
// let arr = [1, 2, 3, 4];

// console.log(RoofTop(arr));

// max guest meet count

// function maxGuest(arr, dep, n) {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   dep.sort(function (a, b) {
//     return a - b;
//   });

//   let i = 1,
//     j = 0,
//     res = 1,
//     curr = 1;
//   while (i < n && j < n) {
//     if (arr[i] < dep[j]) {
//       curr++;
//       i++;
//     } else {
//       curr--;
//       j++;
//     }
//     res = Math.max(curr, res);
//   }
//   return res;
// }

// let arr = [900, 600, 700];
// let dep = [1000, 800, 730];
// let n = arr.length;

// console.log(maxGuest(arr, dep, n));
// time coplexity o(nlogn)

// function minDifference(arr) {
//   arr.sort((a, b) => a - b);
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     let diff = arr[i] - arr[i - 1];
//     if (diff < min) {
//       min = diff;
//     }
//   }
//   return min;
// }

// const arr = [2, 4, 5, 9, 7];
// console.log(minDifference(arr)); // Output: 1

// second largest element in array
// function KthSmallest(arr, k) {
//   arr.sort((a, b) => a - b);
//   return arr[k - 1];
// }

// let arr = [30, 20, 5, 10, 8];
// // let arr = [10, 5, 30, 12];
// let k = 4;
// console.log(KthSmallest(arr, k));
// // time coplexity o(nlogn)

// function fizBuz(n) {
//   for (let i = 1; i < n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizbuz");
//     } else if (i % 3 === 0) {
//       console.log("fiz");
//     } else if (i % 5 === 0) {
//       console.log("buz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizBuz(100);

// function moveZeros(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       [arr[i], arr[count]] = [arr[count], arr[i]];
//       count++;
//     }
//   }
//   return arr;
// }

// console.log(moveZeros([2, 4, 6, 7, 0, 5, 0]));

// function vowelCount(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if ("aeiou".includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(vowelCount("Mozammil"));

// function reverse(str) {
//   let cov = str.toString();
//   let result = cov.split("").reverse().join("");
//   return parseInt(result) * Math.sign(str);
// }

// console.log(reverse(-2650));

// function palindrome(str) {
//   let cov = str.toString();
//   let result = cov.split("").reverse().join("");
//   let res = parseInt(result);
//   return str === res;
// }
// console.log(palindrome(12144243242));

// let person = {
//   _name: "John", // Use a different name for the property
//   get name() {
//     return this._name;
//   },
//   set name(value) {
//     this._name = value;
//   },
// };

// person.name = "Jane";
// console.log(person.name); // Output: Jane

// Define an object representing a person
// const person = {
//   name: "John",
//   lastName: "Smith",
//   // Define a method to get the full name with additional state and country
//   fullName: function (state, country) {
//     return this.firstName + " " + this.lastName + " " + state + " " + country;
//   },
// };

// // Define another person object
// const person2 = {
//   firstName: "Jane",
//   lastName: "Smith",
//   dept:"IT"
// };

// // Call the fullName method using the call method
// console.log(person.fullName.call(person2, "Delhi", "India")); // Output: Jane Smith Delhi India

// // Call the fullName method using the apply method
// console.log(person.fullName.apply(person2, ["Delhi", "India"])); // Output: Jane Smith Delhi India

// // Store the result of calling fullName method using the bind method
// const result = person.fullName.bind(person2, "Delhi", "India");
// console.log(result()); // Output: Jane Smith Delhi India

// const person = {
//   name: "John",
//   lastName: "Smith",
//   fullName: function (state, country, dept, pin) {
//     return (
//       this.firstName +
//       " " +
//       this.lastName +
//       " " +
//       state +
//       " " +
//       country +
//       " " +
//       dept +
//       " " +
//       pin
//     );
//   },
// };

// const person2 = {
//   firstName: "Jane",
//   lastName: "Smith",
//   dept: "IT",
//   pin: 11111,
// };

// let dept = person2.dept;
// let pin = person2.pin;

// console.log(person.fullName.call(person2, "Delhi", "India", dept, pin)); // Output: Jane Smith Delhi India IT 11111
// console.log(person.fullName.apply(person2, ["Delhi", "India", dept, pin])); // Output: Jane Smith Delhi India IT 11111
// const bindFun = person.fullName.bind(person2, "Delhi", "India", dept, pin);
// console.log(bindFun()); // Output: Jane Smith Delhi India IT 11111

// function outer() {
//   let a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// let res = outer();
// res();

// function outerFunction() {
//   let outerVariable = "I am outer";
//   function innerFunction() {
//     console.log(outerVariable); // Output: I am outer
//   }
//   return innerFunction;
// }
// const closureExample = outerFunction();
// closureExample();

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null; // Initialize next to null
//   }
// }

// function detectLoop(head) {
//   let slow = head,
//     fast = head;
//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (fast === slow) {
//       return true; // Loop detected
//     }
//   }
//   return false; // No loop detected
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
// head.next = new Node(15);
// head.next.next = new Node(12);
// head.next.next.next = new Node(20);

// // Creating a loop for testing
// head.next.next.next.next = head;

// console.log("Linked List:", printList(head));
// console.log("Loop Detected:", detectLoop(head));

// Detect loop using floyd cycle detection in JS

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// function detectRemoveLoop(head) {
//   let slow_p = head,
//     fast_p = head;

//   while (fast_p !== null && fast_p.next !== null) {
//     slow_p = slow_p.next;
//     fast_p = fast_p.next.next;
//     if (slow_p === fast_p) {
//       return true;
//     }
//   }
//   slow_p = head;
//   while (slow_p.next !== fast_p) {
//     slow_p = slow_p.next;
//     fast_p = fast_p.next;
//   }
//   fast_p.next = null;
//   return false;
// }

// let head = new Node(10);
// let temp1 = new Node(15);
// let temp2 = new Node(12);
// let temp3 = new Node(20);

// head.next = temp1;
// temp1.next = temp2;
// temp2.next = temp1;

// if (detectRemoveLoop(head)) {
//   console.log("Loop");
// } else {
//   console.log("No Loop");
// }

// function LargestNumbers(arr) {
//   let largest = 0;
//   let secondLargest = 0;
//   let thirdLargest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       thirdLargest = secondLargest;
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== largest) {
//       secondLargest = arr[i];
//     } else if (arr[i] > thirdLargest && arr[i] !== secondLargest) {
//       thirdLargest = arr[i];
//     }
//   }
//   return thirdLargest;
// }
// console.log(LargestNumbers([3, 6, 2, 56, 32, 5, 89, 32]));

// function vowelCount(str) {
//   // let num = str.toString();
//   return str.split(" ").reverse().join("");
// }

// console.log(vowelCount("mozammil"));

// function missingNo(arr) {
//   let n = arr.length;
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum = sum + arr[i];
//   }
//   let result = ((n + 1) * (n + 2)) / 2;
//   return result - sum;
// }
// let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(missingNo(arr));

// function palindrome(n) {
//   let n2 = n.toString();
//   let res = n2.split("").reverse().join("");
//   return res === n2;
// }

// console.log(palindrome(121111));

// function reverse1(arr) {
//   let Arr = arr.toString();
//   return Arr.split("").reverse().join("");
// }

// console.log(reverse1([1, 2, 3, 4, 5]));

// function reverseArray(arr) {
//   let reversedArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
//   }
//   return reversedArray;
// }

// console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

// function sumdigit(n) {
//   let sum = 0;
//   for (let i = 0; i < n.length; i++) {
//     const count = parseInt(n[i], 10);
//     sum += count;
//     console.log(sum);
//   }
//   return sum;
// }

// console.log(sumdigit(222, "y"));

// function sumOfdigit(n) {
//   let sum = 0;
//   for (let i = 0; i < n.length; i++) {
//     const count = parseInt(str[i], 10);
//     sum += count;
//   }
//   return sum;
// }

// console.log(sumOfdigit(55));
// // Output: 10

// class Node {
//   constructor(data) {
//     this.key = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// function heightOfTree(root) {
//   if (root === null) {
//     return 0;
//   } else {
//     let lh = heightOfTree(root.left);
//     let rh = heightOfTree(root.right);
//     return Math.max(lh, rh) + 1;
//   }
// }

// let root = new Node(10);
// root.left = new Node(20);
// root.right = new Node(30);
// root.right.left = new Node(40);
// root.right.right = new Node(60);

// console.log(heightOfTree(root));
// // Time complexity o(n)
// Definition for a binary tree node
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// // Max width or tree
// function maxWidth(root) {
//   if (!root) return [];

//   const result = []; // Array to store the level order traversal
//   const queue = [root];
//   while (queue.length > 0) {
//     const levelSize = queue.length; // Get the number of nodes in the current level
//     const currentLevel = []; // Array to store nodes of the current level

//     for (let i = 0; i < levelSize; i++) {
//       const node = queue.shift(); // Remove the first node from the queue
//       currentLevel.push(node.val); // Push node's value to current level array

//       // Add the left and right children of the node to the queue
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }

//     result.push(currentLevel); // Push the current level array to the result
//   }
// }

// let root = new Node(18);
// root.left = new Node(4);
// root.right = new Node(20);
// root.right.left = new Node(13);
// root.right.right = new Node(10);

// console.log("isBalance of the binary tree:", maxWidth(root)); // Output:

// Define the Node class to represent nodes of the binary tree
// class Node {
//   constructor(val) {
//     this.data = val; // Value stored in the node
//     this.left = null; // Pointer to the left child node
//     this.right = null; // Pointer to the right child node
//   }
// }

// // Global variable to track the index of the previous node during traversal
// let prev;

// // Function to perform inorder traversal of a binary tree and return the result as a string
// function inorder(root) {
//   let ans = ""; // Initialize an empty string to store the traversal result
//   if (root !== null) {
//     ans += inorder(root.left); // Recursively traverse the left subtree
//     ans += root.data + " "; // Visit the current node and append its value to the result string
//     ans += inorder(root.right); // Recursively traverse the right subtree
//   }
//   return ans; // Return the inorder traversal result
// }

// // Global variable to track the index of the previous node during tree construction
// let preIndex = 0;

// // Function to construct a binary tree from its inorder and preorder traversals
// function constructTree(Inorder, Preorder, inStart, inEnd) {
//   // Base case: If the start index exceeds the end index, return null
//   if (inStart > inEnd) return null;

//   // Create a new node with the value from the preorder traversal array
//   let root = new Node(Preorder[preIndex]);
//   preIndex++; // Move to the next index in the preorder traversal array

//   // Find the index of the current node's value in the inorder traversal array
//   let inIndex = 0;
//   for (let i = inStart; i <= inEnd; i++) {
//     if (Inorder[i] === root.data) {
//       inIndex = i;
//       break;
//     }
//   }

//   // Recursively construct the left subtree using elements to the left of the current node in inorder traversal
//   root.left = constructTree(Inorder, Preorder, inStart, inIndex - 1);

//   // Recursively construct the right subtree using elements to the right of the current node in inorder traversal
//   root.right = constructTree(Inorder, Preorder, inIndex + 1, inEnd);

//   return root; // Return the root of the constructed binary tree
// }

// // Example inorder traversal array
// let inorderArray = [20, 10, 40, 30, 50];

// // Example preorder traversal array
// let preorderArray = [10, 20, 30, 40, 50];

// // Determine the length of the arrays
// let n = inorderArray.length;

// // Construct the binary tree using the inorder and preorder traversal arrays
// let root = constructTree(inorderArray, preorderArray, 0, n - 1);

// // Perform inorder traversal of the constructed tree and print the result
// console.log("Inorder traversal of the constructed binary tree:", inorder(root));
// class Node {
//   constructor(val) {
//     this.key = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// function isIdentical(root1, root2) {
//   // Base case: if both roots are null, they are identical
//   if (root1 === null && root2 === null) {
//     return true;
//   }

//   // If one root is null while the other is not, they are not identical
//   if (root1 === null || root2 === null) {
//     return false;
//   }

//   // Recursively check left and right subtrees
//   return (
//     root1.key === root2.key &&
//     isIdentical(root1.left, root2.left) &&
//     isIdentical(root1.right, root2.right)
//   );
// }

// // Example usage:
// let root1 = new Node(10);
// root1.left = new Node(20);
// root1.right = new Node(30);
// root1.left.left = new Node(40);
// root1.left.right = new Node(50);
// root1.left.left.left = new Node(60);

// let root2 = new Node(10);
// root2.left = new Node(20);
// root2.right = new Node(30);
// root2.left.left = new Node(40);
// root2.left.right = new Node(50);
// root2.left.left.left = new Node(60);

// console.log("Two nodes identical:", isIdentical(root1, root2));

// class Node {
//     constructor(val) {
//         this.key = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// function leftView(root) {
//     if (!root) return []; // If the root is null, return an empty array

//     let result = []; // To store the left view nodes
//     let queue = [root]; // Initialize a queue for level order traversal

//     while (queue.length > 0) {
//         const size = queue.length; // Get the current size of the queue
//         for (let i = 0; i < size; i++) {
//             const node = queue.shift(); // Dequeue the front node
//             if (i === 0) {
//                 result.push(node.key); // If it's the first node at this level, add it to the result
//             }
//             if (node.left) queue.push(node.left); // Enqueue left child
//             if (node.right) queue.push(node.right); // Enqueue right child
//         }
//     }

//     return result;
// }

// // Example usage:
// let root = new Node(1);
// root.left = new Node(3);
// root.right = new Node(2);
// root.left.left = new Node(4);
// root.right.right = new Node(5);

// console.log("Left view:", leftView(root)); // Output: [1, 3, 4]

// let obj = [
//   {
//     label: "Electronics",
//     subcategories: [
//       {
//         label: "Mobiles",
//         subcategories: [
//           {
//             label: "Smartphones",
//             subcategories: [{ label: "Samsung" }, { label: "iPhone" }],
//           },
//           { label: "Feature Phones" },
//           { label: "Accessories" },
//         ],
//       },
//       {
//         label: "Computers & Accessories",
//         subcategories: [
//           { label: "Laptops" },
//           { label: "Desktops" },
//           { label: "Printers & Ink" },
//           { label: "Accessories" },
//         ],
//       },
//       {
//         label: "TVs & Appliances",
//         subcategories: [
//           { label: "Televisions" },
//           { label: "Refrigerators" },
//           { label: "Washing Machines" },
//           { label: "Air Conditioners" },
//         ],
//       },
//     ],
//   },
// ];

// function deepCopy(obj) {
//   // Handle primitive types and null
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   // Handle arrays separately
//   if (Array.isArray(obj)) {
//     return obj.map(deepCopy);
//   }

//   // Handle objects
//   const newObj = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] = deepCopy(obj[key]);
//     }
//   }
//   return newObj;
// }

// // Example usage:
// const originalObj = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     country: "USA",
//   },
//   hobbies: ["reading", "hiking"],
// };

// const copiedObj = deepCopy(originalObj);

// // Modify the original object
// originalObj.age = 31;
// originalObj.address.city = "Los Angeles";
// originalObj.hobbies.push("coding");

// // Log both objects to see the changes
// console.log("Original Object:", originalObj);
// console.log("Copied Object:", copiedObj);

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   size() {
//     return this.heap.length;
//   }

//   insert(val) {
//     this.heap.push(val);
//     this.heapifyUp(this.size() - 1);
//   }

//   extractMin() {
//     if (this.size() === 0) {
//       return null;
//     }
//     if (this.size() === 1) {
//       return this.heap.pop();
//     }

//     const min = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     this.heapifyDown(0);
//     return min;
//   }

//   heapifyUp(index) {
//     let parent = Math.floor((index - 1) / 2);
//     while (index > 0 && this.heap[index] < this.heap[parent]) {
//       [this.heap[index], this.heap[parent]] = [
//         this.heap[parent],
//         this.heap[index],
//       ];
//       index = parent;
//       parent = Math.floor((index - 1) / 2);
//     }
//   }

//   heapifyDown(index) {
//     let left = 2 * index + 1;
//     let right = 2 * index + 2;
//     let smallest = index;

//     if (left < this.size() && this.heap[left] < this.heap[smallest]) {
//       smallest = left;
//     }

//     if (right < this.size() && this.heap[right] < this.heap[smallest]) {
//       smallest = right;
//     }

//     if (smallest !== index) {
//       [this.heap[index], this.heap[smallest]] = [
//         this.heap[smallest],
//         this.heap[index],
//       ];
//       this.heapifyDown(smallest);
//     }
//   }
// }

// function KSorted(arr, k) {
//   let h = new MinHeap();
//   for (let i = 0; i <= k; i++) {
//     h.insert(arr[i]);
//   }

//   let index = 0;
//   for (let i = k + 1; i < arr.length; i++) {
//     arr[index] = h.extractMin();
//     index++;
//     h.insert(arr[i]);
//   }

//   while (h.size() > 0) {
//     arr[index] = h.extractMin();
//     index++;
//   }

//   return arr;
// }

// let arr = [4, 3, 2, 10, 5];
// let k = 2;
// console.log(KSorted(arr, k)); // Output: [2, 3, 4, 5, 10]

// cretae a constructor funtions
// class Car {
//   constructor(name, company, color, model) {
//     this.name = name;
//     this.company = company;
//     this.color = color;
//     this.model = model;
//   }
// }

// let car1 = new Car("S20", "BMW", "red", "SE");
// console.log(car1);

// class multipication {
//   static add(a, b) {
//     return a * b;
//   }
// }

// let multi = multipication.add(2, 2);
// console.log("multi", multi);

// const user = {
//   _name: "",
//   get name() {
//     return this._name;
//   },
//   set name(value) {
//     this._name = value;
//   },
//   set fullName(value) {
//     this._name = value;
//   },
// };

// user.fullName = "John Smith";
// console.log(user.name); // Output: John Smith

// Inharitence

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   welcome() {
//     console.log(`Hi ${this.name}`);
//   }
// }

// class Teacher extends Person {
//   constructor(name, age, sub) {
//     super(name, age);
//     this.sub = sub;
//   }
//   tech() {
//     super.welcome();
//   }
// }

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }
// }

// let person = new Person("Mozammil", 28);
// console.log(person);
// let teacher = new Teacher("Raja", 30, "IT");
// teacher.tech();
// console.log(teacher);
// let student = new Student("Aman", 32, "A+");
// console.log(student);

// function reverseWords(sentence) {
//   // Split the sentence into an array of words
//   const words = sentence.split(" ");

//   // Iterate through each word
//   const reversedWords = words.map((word) => {
//     // Split the word into an array of characters
//     const characters = word.split("");

//     // Reverse the array of characters
//     const reversedCharacters = characters.reverse();

//     // Join the characters back together to form the reversed word
//     const reversedWord = reversedCharacters.join("");
//     console.log("reversedWord", reversedWord);

//     return reversedWord;
//   });

//   // Join the reversed words back together to form the reversed sentence
//   const reversedSentence = reversedWords.join(" ");

//   return reversedSentence;
// }

// // Example usage
// const sentence = "Hello world";
// const reversedSentence = reverseWords(sentence);
// console.log(reversedSentence); // Output: olleH dlrow

// function leapYears(num) {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 4 === 0) {
//       console.log(num[i], "leap years");
//     } else {
//       console.log(num[i], "not leap years");
//     }
//   }
// }
// leapYears([2021]);

// let map = new Map();
// function memoizeOne(fn) {
//   function temp(...args) {
//     const key = args.join("_");
//     if (map.has(key)) {
//       console.log("Getting from cache");
//       return map.get(key);
//     }
//     const result = fn(...args);
//     map.set(key, result);
//     return result;
//   }
//   return temp;
// }
// const add = (a, b) => a + b;
// const add_memo = memoizeOne(add);

// console.log(add_memo(1, 4));

// let map = new Map();

// function memoizeOne(fn) {
//   function temp(...args) {
//     const key = args.join("-"); // Generate cache key by joining arguments with a special character
//     if (map.has(key)) {
//       const cachedValue = map.get(key);
//       console.log(`Getting from cache. Key: ${key}, Value: ${cachedValue}`);
//       return cachedValue;
//     }
//     const result = fn(...args);
//     map.set(key, result);
//     return result;
//   }
//   return temp;
// }

// const add = (a, b) => a + b;
// const add_memo = memoizeOne(add);

// console.log(add_memo(1, 4)); // Output: 5
// console.log(add_memo(1, 4)); // Output: Getting from cache.5

// let map = new Map();

// function memoizeOne(fn) {
//   function temp(...args) {
//     const key = JSON.stringify(args); // Generate cache key using JSON.stringify
//     if (map.has(key)) {
//       console.log("Getting from cache");
//       return map.get(key);
//     }
//     const result = fn(...args);
//     map.set(key, result);
//     return result;
//   }
//   return temp;
// }

// const add = (a, b) => a + b;
// const add_memo = memoizeOne(add);

// console.log(add_memo(1, 4));

//flatten array
// let aar = [1, 2, 3, [4, [5, 6]], [7, 8]];

// Basic example
// function* flatten(arr) {
//   for (let el of arr) {
//     if (Array.isArray(el)) {
//       yield* flatten(el);
//     } else {
//       yield el;
//     }
//   }
// }

// let arr = [1, 2, 3, [4, [5, 6]], [7, 8]];
// const flattened = [...flatten(arr)];
// console.log(flattened); // Output: [1, 2, 3, 4, 5]

// Function to flatten the nested array into a single-level array
// function flattenArray(a, flatten = []) {
//   for (let i = 0; i < a.length; i++) {
//     if (Array.isArray(a[i])) {
//       console.log(a[i], flatten);
//       flattenArray(a[i], flatten); // Recursively flatten the nested array
//     } else {
//       flatten.push(a[i]);
//     }
//   }

//   return flatten;
// }

// let a = [1, 2, 3, [4, [5, 6]], [7, 8]];
// console.log(flattenArray(a));

// let aar = [1, 2, 3, [4, [5, 6]], [7, 8]];
// function* flatten(arr) {
//   for (let val of arr) {
//     if (Array.isArray(val)) {
//       yield* flatten(val);
//     } else {
//       yield val;
//     }
//   }
// }

// let arr = [1, 2, 3, [4, [5, 6]], [7, 8]];
// const flattened = [...flatten(arr)];
// console.log(flattened); // Output: [1, 2, 3, 4, 5]

// function rotateString(s1, s2) {
//   if (s1.length != s2.length) {
//     return false;
//   }
//   return (s1 + s2).search(s2) != -1;
// }

// let s1 = "ABCD"
// let s2 = "CDAB"

// console.log(rotateString(s1,s2));

// function reverseWords(s) {
//   let str = s.toString();
//   let word = str.split(" ");
//   let rev = word.reverse().join(" ")
//   return rev;
// }

// let str = "i.like.this.program.very.much"; //Output: much.very.program.this.like.i
// console.log(reverseWords(str));

// function reverseWords(text) {
//   let str = text.split(" ");
//   str.reverse();
//   str = str.join(" ");
//   return str
// }

// let str = "i.like.this.program.very.much";
// console.log(reverseWords(str)); // Output: much.very.program.this.like.i

// // Javascript code for the above approach

// let text = "i like this program very much";
// let str = text.split(" ");
// str.reverse();
// str = str.join(" ");
// console.log(str);

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }

//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// let n = 3;
// const fibSeries = [];
// for (let i = 0; i < n; i++) {
//   fibSeries.push(fibonacci(i));
// }
// console.log(`First ${n} Fibonacci numbers:`, fibSeries);

// function fibonacci(n) {
//   const series = [0, 1];

//   for (let i = 2; i < n; i++) {
//     series[i] = series[i - 1] + series[i - 2];
//   }

//   return series;
// }

// // Example usage:
// const n = 10; // Number of Fibonacci numbers to generate
// const fibSeries = fibonacci(n);
// console.log(`First ${n} Fibonacci numbers:`, fibSeries);

// using DP
// let memo = new Array(100).fill(null);
// function fibonacci(n) {
//   if (memo[n] !== null) {
//     return memo[n];
//   }
//   if (n === 0 || n === 1) {
//     return n;
//   }
//   memo[n] = fibonacci(n - 1) + fibonacci(n - 2);

//   return memo[n];
// }
// let n = 3;
// const fibSeries = [];
// for (let i = 0; i < n; i++) {
//   fibSeries.push(fibonacci(i));
// }
// console.log(`First ${n} Fibonacci numbers:`, fibSeries);

// bottom up approach

// function fb(n) {
//   let dp = new Array(n + 1);
//   dp[0] = 0;
//   dp[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// }
// let n = 3;

// console.log(`First ${n} Fibonacci numbers:`, fb(n));

// Recursive javascript program for

// function count(coins, n, sum) {
//   // If sum is 0 then there is 1 solution
//   // (do not include any coin)
//   if (sum == 0) return 1;

//   // If sum is less than 0 then no
//   // solution exists
//   if (sum < 0) return 0;

//   // If there are no coins and sum
//   // is greater than 0, then no
//   // solution exist
//   if (n <= 0) return 0;

//   // count is sum of solutions (i)
//   // including coins[n-1] (ii) excluding coins[n-1]
//   return count(coins, n - 1, sum) + count(coins, n, sum - coins[n - 1]);
// }

// // Driver program to test above function
// var coins = [1, 2, 3];
// var n = coins.length;
// console.log(count(coins, n, 5));

// // Time Complexity: O(2sum)
// // Auxiliary Space: O(sum)

// function countWays(coins, s) {
//   let n = coins.length;
//   let dp = new Array(n + 1);

//   // Initialization
//   for (let i = 0; i <= n; i++) {
//     dp[i] = new Array(s + 1).fill(0);
//     dp[i][0] = 1;
//   }

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= s; j++) {
//       dp[i][j] = dp[i - 1][j];
//       if (coins[i - 1] <= j) {
//         dp[i][j] += dp[i][j - coins[i - 1]];
//       }
//     }
//   }

//   return dp[n][s];
// }

// // Example usage:
// const coins = [1, 2, 5];
// const amount = 11;
// console.log("Number of ways to make change:", countWays(coins, amount));

// const coin = [1, 2, 5];

// for(let item in coin) {
//   console.log('item', item)
// }

// const coins = [1, 2, 5];

// for (let item of coins) {
//   console.log("item", item);
// }

// function maxPieces(n, a, b, c) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n < 0) {
//     return -1;
//   }
//   let res = Math.max(
//     maxPieces(n - a, a, b, c),
//     maxPieces(n - b, a, b, c),
//     maxPieces(n - c, a, b, c)
//   );
//   if (res === -1) {
//     return -1;
//   }
//   return res + 1;
// }

// function maxCoins(coin, val) {
//   if (val === 0) {
//     return 0;
//   }
//   let res = -1;
//   for (let i = 0; i < coin.length; i++) {
//     if (coin[i] <= val) {
//       let subRes = maxCoins(coin, val - coin[i]);
//       if (subRes !== -1) {
//         if (res === -1 || subRes + 1 < res) {
//           res = subRes + 1;
//         }
//       }
//     }
//   }
//   return res;
// }

// let coin = [25, 10, 5];
// let val = 30;

// console.log(maxCoins(coin, val)); //Output 2

// function subsetSum(arr, sum) {
//   if (n === 0) {
//     return sum === 0 ? 1 : 0;
//   }
//   return subsetSum(arr, n - 1, sum) + subsetSum[(arr, n - 1, sum - arr[n - 1])];
// }

// function missingNumer(arr) {
//   let sum = 0;
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     sum = sum + arr[i];
//   }
//   let result = ((n + 1) * (n + 2)) / 2;
//   return result - sum;
// }
// let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(missingNumer(arr)); //output 3

// function moveZeros(nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != 0) {
//       [([nums[i], nums[count]] = [nums[count], nums[i]])];
//       count++;
//     }
//   }
//   return nums;
// }
// let number = [0, 3, 5, 6, 0, 0, 0, 0, 5, 5];
// console.log(moveZeros(number));

// function removeDuplicate(arr) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[res - 1] !== arr[i]) {
//       arr[res] = arr[i];
//       res++;
//     }
//   }
//   return res;
// }
// const arr = [1, 1, 4, 5, 6, 6, 7, 7, 8, 8];
// const resultLength = removeDuplicate(arr);
// console.log(arr.slice(0, resultLength)); // Output: [1, 4, 5, 6, 7, 8]

// let Person = {
//   Name: _name,
//   great: function () {
//     return "hello" + " " + this.Name;
//   },
// };

// let call = Person.great("moza");
// console.log(call);

// function twoSum(nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let pairIndex = target - nums[i];
//     if (map.has(pairIndex)) {
//       return [map.get(pairIndex), i];
//     }
//     map.set(nums[i], i);
//   }
//   return [];
// }

// const arr = [1, 1, 4, 5, 6, 6, 7, 7, 8, 8];
// const target = 10;
// console.log(twoSum(arr, target)); // Outputs: [2, 4]

// function isPalindrome(str) {
//   let res = str.split("").reverse().join("");
//   return res === str
// }

// console.log(isPalindrome("A man, a plan, a canal: Panama"));

// function PalindromeStrings(str) {
//   let result = str.split("").reverse().join("");
//   return result === str;
// }

// let str = "abba";
// let count = str.length;

// console.log(PalindromeStrings(str), count);

// // time complexity O(n)
// // space complexity O(n) b/c linear

// var createCounter = function (n) {
//   let count = n;
//   return function () {
//     return count++;
//   };
// };

// // Example usage:
// const counter = createCounter(10);
// console.log(counter()); // Outputs: 10
// console.log(counter()); // Outputs: 11
// console.log(counter()); // Outputs: 12
// console.log(counter()); // Outputs: 12

// function expect(val) {
//   return {
//     toBe(expected) {
//       if (val === expected) {
//         return true;
//       } else {
//         throw new Error("Not Equal");
//       }
//     },
//     notToBe(expected) {
//       if (val !== expected) {
//         return true;
//       } else {
//         throw new Error("Equal");
//       }
//     },
//   };
// }

// // Example usage:
// try {
//   console.log({ value: expect(5).toBe(5) }); // { value: true }
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   console.log({ value: expect(5).notToBe(5) }); // Error: Equal
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   console.log({ value: expect(5).toBe(6) }); // Error: Not Equal
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   console.log({ value: expect(5).notToBe(6) }); // { value: true }
// } catch (error) {
//   console.error(error.message);
// }

// var createCounter = function (init) {
//   let count = init; // 'count' is initialized to 'init'

//   function increment() {
//     return ++count; // Correctly increments and returns 'count'
//   }

//   function decrement() {
//     return --count; // Correctly decrements and returns 'count'
//   }

//   function reset() {
//     count = init; // Correctly resets 'count' to 'init'
//     return count; // Returns the reset 'count'
//   }

//   return { increment, decrement, reset }; // Returns the methods
// };

// // Example usage:
// const counter = createCounter(5);
// console.log(counter.increment()); // 6
// console.log(counter.increment()); // 7
// console.log(counter.decrement()); // 6
// console.log(counter.reset()); // 5
// console.log(counter.increment()); // 6

// function maxProfit(prices) {
//   let left = 0; //buy
//   let right = 1; //sell
//   let maxProfit = 0;

//   while (right < prices.length) {
//     if (prices[left] < prices[right]) {
//       let profit = prices[right] - prices[left];
//       maxProfit = Math.max(maxProfit, profit);
//     } else {
//       left = right;
//     }
//     right++;
//   }
//   return maxProfit;
// }

// const prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices));

// var map = function (arr, fn) {
//   let res = [];

//   arr.forEach((element, index) => {
//     res[index] = fn(element, index);
//   });
//   return res;
// };

// let arr = [1, 2, 3];
// let add = (x) => x + 1;
// let valll = map(arr, add);
// console.log(map(valll));

// var map = function (arr, fn) {
//   let res = [];

//   arr.forEach((element, index) => {
//     console.log(element, index);
//     res[index] = fn(element, index);
//   });
//   return res;
// };

// // Example array
// arr = [0, 10, 20, 30];

// // Function to be applied to each element of the array
// const newArray = filter(arr, fn); // [20, 30]
// // Using the map function
// let result = map(arr, double);
// console.log(result); // Output: [2, 4, 6]

// function isValid(s) {
//   if (s.length === 1) {
//     return false;
//   }
//   let stack = [];
//   let bracketMap = new Map([]);

//   for (const char in s) {
//     if (bracketMap.has(char)) {
//       stack.push(char);
//     } else {
//       let lastBracket = stack.pop();
//       if (bracketMap.get(lastBracket) !== char) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//     this.prev = null;
//   }
// }

// function reverseLinkedList(head) {
//   if (head === 0) {
//     return null;
//   }
//   let curr = head;
//   let temp = null;
//   while (curr != null) {
//     temp = curr.prev;
//     curr.prev = curr.next;
//     curr.next = temp;
//     curr = curr.prev;
//   }
//   if (temp != null) {
//     head = temp.prev;
//   }
//   return head;
// }

// function printList(head) {
//   let current = head;
//   let result = [];
//   while (current != null) {
//     result.push(current.data);
//     current = current.next;
//   }

//   return result;
// }

// let head = new Node(1);
// head.next = new Node(2);
// head.next.prev = head;
// head.next.next = new Node(3);
// head.next.next.prev = head.next;
// head.next.next.next = new Node(4);
// head.next.next.next.prev = head.next.next;
// console.log("Original list:", printList(head)); // Output: [1, 2, 3, 4]
// head = reverseLinkedList(head);
// console.log("Reversed list:", printList(head)); // Output: [4, 3, 2, 1]

// function missingNo(nums) {
//   let res = nums.length;
//   for (let i = 0; i < nums.length; i++) {
//     res = res + i - nums[i];
//   }
//   return res;
// }

// console.log(missingNo([1, 3, 4, 5]));

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// function nodeCount(head) {
//   let count = 0;
//   let curr = head;

//   while (curr !== null) {
//     count++;
//     curr = curr.next;
//   }
//   return count;
// }

// function printList(head) {
//   let curr = head;
//   let res = [];
//   while (curr != null) {
//     res.push(curr.data);
//     curr = curr.next;
//   }
//   return res;
// }

// let head = new Node(10);
// head.next = new Node(20);
// head.next.next = new Node(30);

// console.log(nodeCount(head));
// console.log(printList(head));

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// function inorder(node) {
//   if (node !== null) {
//     inorder(node.left);
//     console.log(node.data);
//     inorder(node.right);
//   }
// }

// let root = new Node(10);
// root.left = new Node(20);
// root.right = new Node(30);
// root.right.left = new Node(40);
// root.right.right = new Node(60);

// inorder(root);

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// function preorder(node) {
//   if (node !== null) {
//     console.log(node.data);
//     preorder(node.left);
//     preorder(node.right);
//   }
// }

// let root = new Node(10);
// root.left = new Node(20);
// root.right = new Node(30);
// root.right.left = new Node(40);
// root.right.right = new Node(60);

// preorder(root);

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// function isSameTree(p, q) {
//   if (p === null && q === null) {
//     return 0;
//   }
//   let lh = maxHeight(root.left);
//   let rh = maxHeight(root.right);
//   return Math.max(lh, rh) + 1;
// }

// let root = new Node(10);
// root.left = new Node(20);
// root.left.left = new Node(15);
// root.right = new Node(30);
// root.right.left = new Node(40);
// root.right.right = new Node(80);
// root.right.right.right = new Node(50);

// console.log(maxHeight(root)); //4

// function removeDuplicate(arr) {

// let set = new Set()
// for (const num of arr) {
//   if (set.has(num)) {
//     return num
//   }
//   set.add(num)
// }
//   return -1;
// }
// let num = [2, 4, 5, 6, 7, 3,,3];
// console.log(removeDuplicate(num));

// function search(nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     console.log("nums[i - 1]", nums[i - 1] === target, i);
//     if (nums[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(search([-1, 0, 2, 4, 6, 8], 4));

// function search(nums, target) {
//   let low = 0;
//   let high = nums.length - 1;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (nums[mid] > target) {
//       high = mid - 1;
//     } else if (nums[mid] < target) {
//       low = mid + 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1;
// }
// console.log(search([-1, 0, 2, 4, 6, 8], 4));

// //Promise Example
// const fetchData = (isSuccess) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isSuccess) {
//         resolve("fetch data");
//       } else {
//         reject("data not fetch");
//       }
//     }, 1000);
//   });
// };

// const fetchDataAsync = async (isSuccess) => {
//   try {
//     const data = await fetchData(isSuccess);
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// fetchDataAsync(false);

// function search(nums, target) {
//   let low = 0;
//   let high = nums.length;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//     return -1;
//   }
// }
// console.log(search([-1, 0, 2, 4, 6, 8], 3));

// function twoSum(nums, target) {
//   let low = 0;
//   let high = nums.length;
//   let res = [];

//   let sortedval = nums.sort((a, b) => a - b);

//   while (low < high) {
//     let num = sortedval(low )+ sortedval(high);

//     if (num === target) {
//       res.push(i, j);
//     }
//   }
//   return res;
// }

// console.log(twoSum([3, 4, 5, 6], 7));

// function removeDuplicate(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i-1] === nums[i]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(removeDuplicate([1, 2, 3,3]));

// function profit(prices) {
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       let profit = prices[j] - prices[i];
//       if (profit > maxProfit) {
//         maxProfit = profit;
//       }
//     }
//   }
//   return maxProfit;
// }

// console.log(profit([10, 1, 5, 6, 7, 1]));

// function removeDuplicate(nums) {
//   let set = new Set();
//   for (const num of nums) {
//     if (set.has(num)) {
//       return true;
//     }
//     set.add(num);
//   }
//   return false
// }

// console.log(removeDuplicate([1, 2, 3]));

// function reverseString(s) {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     [s[left], s[right]] = [s[right], s[left]];
//     left++;
//     right--;
//   }
// }

// const s = ["man", "women", "day", "non", "open"];
// reverseString(s);
// console.log(s); // Output: ["o", "l", "l", "e", "h"]

// function longestWord(sentence) {
//   const words = sentence.split(" ");
//   let longestWords = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWords.length) {
//       longestWords = words[i];
//     }
//   }
//   return longestWords;
// }

// console.log(longestWord("The quick brown fox jumps over the lazy dog"));

// function moveZeros(s) {
// let left = 0
// let right = s.length-1

// while (left !==right) {
//   [s[left], s[right]] = [s[right], s[left]];
//   left++
//   right--
// }
// return s
// }
// let nums = [0, 1, 0, 3, 12];
// console.log(moveZeros(nums));

// function removeDuplicate(nums) {
//   let set = new Set()
//   let res =[]
//   for (let i = 0; i < nums.length; i++) {
//       if (set.has(nums)) {

//         return nums[i]
//       }
//   }
//   return nums
// }
// let nums = [1, 1, 2];
// console.log(removeDuplicate(nums));

// function arrayStringEqual(s1, s2) {
//   let w1 = 0;
//   let w2 = 0;
//   let i = 0;
//   let j = 0;

//   while (w1 < s1.length && w2 < s2.length) {
//     if (s1[w1][i] !== s2[w2][j]) {
//       return false;
//     }
//   }
//   return true;
// }

// let word1 = ["a", "cb"];
// let word2 = ["ab", "c"];
// console.log(arrayStringEqual(word1, word2));

// function isPalindrome(s) {

//   let res = s.split("").reverse().join("");

//   return res === s;
// }
// let str = "A man, a plan, a canal: Panama";
// console.log(isPalindrome(str));

// class Calculator {
//   constructor(number1, number2) {
//     this.number1 = number1;
//     this.number2 = number2;
//   }
//   add() {
//     return this.number1 + this.number2;
//   }

//   subtract() {
//     return this.number1 - this.number2;
//   }

//   multiply() {
//     return this.number1 * this.number2;
//   }

//   devide() {
//     if (number2 === 0) {
//       return "Not devide by zeros";
//     }
//     return this.number1 / this.number2;
//   }
// }

// function calculator(num1, num2, operation) {
//   const calc = new Calculator(num1, num2);
//   const operations = {
//     add: calc.add,
//     subtract: calc.subtract,
//     multiply: calc.multiply,
//     devide: calc.devide,
//   };

//   const operationFuns = operations[operation];

//   return operationFuns.call(calc);
// }

// console.log(calculator(2, 5, "add"));

// function isAnagram(s, t) {
//   let s1 = s.split("").sort().join("");
//   let s2 = t.split("").sort().join("");

//   return s1 === s2;
// }
// let s = "racecar";
// let t = "carrace";

// console.log(isAnagram(s, t));

// function sameLastNo(num1,num2) {
//     let lastDigit1 = num1 % 10;
//     let lastDigit2 = num2 % 10;

// console.log('lastDigit1 === lastDigit2', lastDigit1 ,lastDigit2)
//   return lastDigit1 === lastDigit2;

// }
// let n = 333
// let n2= 443
// console.log(sameLastNo(n,n2))

// function mergedString(s1, s2) {
//   let res = [];
//   for (let i = 0; i < s1.length || s2.length; i++) {
//     if (i < s1.length) {
//       res.push(s1[i]);
//     }
//     if (i < s2.length) {
//       res.push(s2[i]);
//     }
//   }
//   return res.join("");
// }
// let word1 = "abc";
// let word2 = "pqr";
// console.log(mergedString(word1, word2));

// function mergedString(word1, word2) {
//   let n = word1.length;
//   let m = word2.length;
//   let i = 0;
//   let j = 0;
//   let res = "";

//   while (i < n && j < m) {
//     res += word1[i++];
//     res += word2[j++];
//   }
//   while (i < n) {
//     res += word1[i++];
//   }
//   while (i < m) {
//     res += word2[i++];
//   }
//   return res
// }

// let word1 = "abc";
// let word2 = "pqr";
// console.log(mergedString(word1, word2)); // "apbqcr"

// function mergedArray(nums1, m, nums2, n) {
//   for (let i = m, j = 0; j < n; i++, j++) {
//     nums1[i] = nums2[j];
//   }
//   nums1.sort((a, b) => a - b);
//   return nums1
// }

// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;

// console.log(mergedArray(nums1, m, nums2, n));

// IIFE

// const pr = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Resolve");
//     }, 1000);
//   });
// };

// (async () => {
//   let a = await pr();
//   console.log("a", a);
// })()

// function removeDuplicate(nums) {
//   if (nums.length < 2) return 0;
//   let left = 0;
//   let right = 0;
//   while (right < nums.length) {
//     let isQual = nums[left - 2] === nums[right];
//     if (!isQual) {
//       nums[left] = nums[right];
//       left += 1;
//     }
//     right += 1;
//   }
//   return left;
// }
// let nums = [1, 1, 1, 2, 2, 3];
// let newLength = removeDuplicate(nums);
// console.log(newLength); // Expected output: 5
// console.log(nums.slice(0, newLength));

// function sortArrayByParity(nums) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left < right) {
//     if (nums[left] % 2 > nums[right] % 2) {
//       [nums[left], nums[right]] = [nums[right], nums[left]];
//     }
//     if (nums[left] % 2 === 0) left++;
//     if (nums[right] % 2 === 1) right--;
//   }
//   return nums
// }

// let nums = [3, 1, 2, 4];
// console.log(sortArrayByParity(nums));

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   welcome() {
//     console.log(`welcome ${this.name}`);
//   }
// }

// class Teacher extends Person {
//   constructor(name, age, email) {
//     super(name, age);
//     this.email = email;
//   }
//   test() {
//     super.welcome;
//   }
// }

// class Student extends Teacher {
//   constructor(name, age, email, phone) {
//     super(name, age, email);
//     this.phone = phone;
//   }
// }

// const person = new Person("Mozammil", 27);
// console.log("person", person);
// const teacher = new Teacher("Raja", 27, "email.com");
// const tt = teacher.test("jjj");
// console.log(tt);

// const student = new Student("Aman", 20, "email.com", 2222222222222222);
// console.log(student);

// function reverseWords2(s) {
//   let word = s.split(" ");
//   let reverseWord = word.map((word) => word.split("").reverse().join(""));

//   return reverseWord.join(" ");
// }
// let s = "Let's take LeetCode contest";
// console.log(reverseWords2(s));

// function containsNearbyDuplicate(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] == nums[j] && Math.abs(i - j) <= target) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// let nums = [1, 2, 3, 1, 2, 3];
// let k = 2;
// console.log(containsNearbyDuplicate(nums, k));

// function containsNearbyDuplicate(nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (i - map.get(nums[i] <= target)) {
//       return true;
//     }
//     map.set(nums[i], i);
//   }
//   return false
// }
// let nums = [1, 2, 3, 1, 2, 3];
// let k = 2;
// console.log(containsNearbyDuplicate(nums, k));

// Implement using queue

// class MyStack {
//   constructor() {
//     this.queue1 = [];
//     this.queue2 = [];
//   }

//   push(x) {
//     this.queue1.push(x);
//   }
//   pop(x) {
//     while (this.queue1.length > 1) {
//       this.queue2.push(this.queue1.shift());
//     }

//     let poppedElement = this.queue1.shift();

//     [this.queue1, this.queue2] = [this.queue2, this.queue1];

//     return poppedElement;
//   }

//   top() {
//     while (this.queue1.length > 1) {
//       this.queue2.push(this.queue1.shift());
//     }
//     let topElement = this.queue1.shift();
//     this.queue2.push(topElement);

//     [this.queue1, this.queue2] = [this.queue2, this.queue1];

//     return topElement;
//   }
//   empty(x) {
//     return this.queue1.length === 0;
//   }
// }

// // Example usage:
// const myStack = new MyStack();
// console.log(myStack.push(1)); // Output: undefined
// console.log(myStack.push(2)); // Output: undefined
// console.log(myStack.top()); // Output: 2
// console.log(myStack.pop()); // Output: 2
// console.log(myStack.empty()); // Output: false

// function isPerfectSquare(nums) {
//   for (let i = 0; i < nums; i++) {
//     if (i * i === nums) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(isPerfectSquare(16));

// class Node {
//   constructor(k) {
//     this.key = k;
//     this.left = null;
//     this.right = null;
//   }
// }

// function Symetric(root) {
//   if (!root) return null;

//   if (root.left === root.right) {
//     console.log("first", root.right);
//   }

//   return root;
// }

// let root = new Node(10);
// root.left = new Node(20);
// root.right = new Node(30);
// root.right.left = new Node(40);
// root.right.right = new Node(60);

// Symetric(root);

// calback  function is a passes a argument in fuction is called  callback fuctions

// // This is the callback function that processes the data
// function processData(data) {
//   console.log("Processing data:", data);
// }

// // This function simulates fetching data and then calls the callback
// function fetchData(da) {
//   console.log("Fetching data...");

//   // Simulate a delay for fetching data
//   setTimeout(function () {
//     const data = { id: 1, name: "Alice" };
//     console.log("Data fetched");

//     // Call the callback function with the fetched data
//     da(data);
//   }, 2000); // 2 seconds delay
// }

// // Call fetchData and pass processData as the callback
// fetchData(processData);

// fetchData();

// // Define an array
// const numbers = [1, 2, 3, 4, 5];

// // Use the map method with a callback function to create a new array
// const doubled = numbers.map((number) => number * 2);

// console.log(doubled); // Output: [2, 4, 6, 8, 10]

// function call&& apply&& bind

// infinite currying

// function sum(a) {
//   return function inner(b) {
//     if (b === undefined) {
//       return a;
//     }
//     a += b;
//     return inner;
//   };
//   return inner;
// }

// console.log(sum(2)(3)(5)(1)(9)(10)()); // Output: 20

// function maxSubArray(nums) {
//   let max = nums[0];
//   let sum = 0;

//   nums.forEach((num) => {
//     sum += num;
//     max = Math.max(max, sum);
//     if (sum < 0) {
//       sum = 0;
//     }
//   });
//   return max
// }

// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// console.log(maxSubArray(nums))

// Brutforce
// function containerWithMostWater(height) {
//   let max = 0;
//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       let area = Math.min(height[i], height[j]) * (j - i);
//       max = Math.max(max, area);
//     }
//   }
//   return max;
// }

// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// console.log(containerWithMostWater(height));

// function containerWithMostWater(height) {
//   let left = 0;
//   let right = height.length - 1;
//   let max = 0;
//   while (left < right) {
//     let area = Math.min(height[left], height[right]) * (right - left);
//     max = Math.max(max, area);
//     if (height[left] < height[right]) left += 1;
//     else if (height[right] < height[left]) right -= 1;
//     else {
//       left += 1;
//       right -= 1;
//     }
//   }

//   return max;
// }

// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// console.log(containerWithMostWater(height));

// function removeDuplicate(nums) {
//   let set = new Set();
//   for (const num of nums) {
//     if (set.has(num)) {
//       return true;
//     }
//     set.add(num);
//   }
//   return false;
// }

// let nums = [1, 2, 3, 1];
// console.log(removeDuplicate(nums));

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let mid = Math.floor(arr.length / 2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);

//   let sortedLeft = mergeSort(left);
//   let sortedRight = mergeSort(right);

//   return merge(sortedLeft, sortedRight);
// }

// function merge(left, right) {
//   let res = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       res.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       res.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }
//   while (leftIndex < left.length) {
//     res.push(left[leftIndex]);
//     leftIndex++;
//   }
//   while (rightIndex < right.length) {
//     res.push(right[rightIndex]);
//     rightIndex++;
//   }

//   return res;
// }

// // Function to merge three sorted arrays
// function mergeThreeSortedArrays(arr1, arr2, arr3) {
//   const mergedFirstTwo = merge(arr1, arr2);
//   return merge(mergedFirstTwo, arr3);
// }

// // Example usage:
// const arr1 = [1, 3, 5, 7];
// const arr2 = [2, 4, 6, 8];
// const arr3 = [0, 9, 10, 11];

// console.log("Array 1 is:", arr1);
// console.log("Array 2 is:", arr2);
// console.log("Array 3 is:", arr3);

// const mergedArray = mergeThreeSortedArrays(arr1, arr2, arr3);
// console.log("Merged array is:", mergedArray); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// // const arr = [[1, 2, undefined], [[[[3, null, 4]]]][(5, [6], [7])]];
// const arr = [
//   [1, 2, undefined],
//   [[[[[3, null, 4]]]], [5, [6], [7]]],
// ];

// let res = arr.flat(Infinity);
// console.log(res);

// // using recursive methods

// function flattenArrayRecursive(arr) {
//   const flattened = [];

//   if (Array.isArray(arr)) {
//     arr.forEach((item) => {
//       const result = flattenArrayRecursive(item);
//       flattened.push(...result);
//     });
//   } else {
//     flattened.push(arr);
//   }
//   return flattened;
// }

// console.log(flattenArrayRecursive(arr));

// const obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: 3,
//   },
//   e: {
//     f: {
//       g: 4,
//       h: null,
//       i: undefined,
//     },
//   },
// };

// function flattenObjectRecursive(input) {
//   if (typeof input !== "object" || input === null) {
//     return input;
//   }

//   let flatten = {};

//   for (const key in input) {
//     const val = input[key];
//     const flatVal = flattenObjectRecursive(val);

//     if (typeof flatVal === "object" && flatVal !== null) {
//       flatten = { ...flatten, ...flatVal };
//     } else {
//       flatten[key] = flatVal;
//     }
//   }
//   return flatten;
// }

// console.log(flattenObjectRecursive(obj));

// function maxSumSubarray(nums, k) {
// if (arr.length < k) {
//   return -1;
// }
// let max = 0;

// for (let i = 0; i < arr.length - k; i++) {
//   let currSum = 0;
//   for (let j = 0; j < k; j++) {
//     currSum += arr[i + j];
//   }
//   max = Math.max(max, currSum);
// }

// let maxSum = 0;
// for (let i = 0; i < k; i++) {
//   maxSum += arr[i];
// }

// let current = maxSum;

// for (let i = k; i < arr.length; i++) {
//   current += arr[i] - arr[i - k];
//   maxSum = Math.max(maxSum, current);
// }

// return maxSum;

//   if (nums.length < k) return -1;
//   let maxSum = 0;
//   for (let i = 0; i < k; i++) {
//     maxSum += nums[i];
//   }
//   let curr = maxSum;

//   for (let i = k; i < nums.length; i++) {
//     curr += nums[i] - nums[i - k];
//     maxSum = Math.max(maxSum, curr);
//   }
//   return maxSum;
// }

// const arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
// const k = 4;
// console.log(maxSumSubarray(arr, k)); // Output: 39

// function firstNegativeIntegerBruteForce(arr, k) {
//   if (arr.length < k) return -1;

//   let result = [];
//   for (let i = 0; i <= arr.length - k; i++) {
//     let nagative = false;
//     for (let j = 0; j < k; j++) {
//       if (arr[i + j] < k) {
//         result.push(arr[i + j]);
//         nagative = true;
//         break;
//       }
//     }
//     if (!nagative) {
//       result.push(0);
//     }
//   }
//   return result;
// }

// // Example usage:
// const arr = [-8, 2, 3, -6, 10];
// const k = 2;
// console.log(firstNegativeIntegerBruteForce(arr, k));

// function firstPositiveIntegerBruteForce(arr, k) {
//   if (arr.length < k) return [];

//   let result = [];
//   for (let i = 0; i <= arr.length - k; i++) {
//     let positive = false;
//     for (let j = 0; j < k; j++) {
//       console.log(j,i)
//       if (arr[i + j] > 0) {
//         result.push(arr[i + j]);
//         positive = true;
//         break;
//       }
//     }
//     if (!positive) {
//       result.push(0);
//     }
//   }
//   return result;
// }

// const arr = [-8, 2, 3, -6, 10];
// const k = 2;
// console.log(firstPositiveIntegerBruteForce(arr, k));

// Brutforce
// function majorityElement(nums) {
//   let majority = Math.floor(nums.length / 2);
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count++;
//       }
//     }
//     if (count > majority) {
//       return nums[i];
//     }
//   }
//   return null;
// }
// let num = [3, 2, 3];
// console.log(majorityElement(num));

// function sumOfArr(num) {
//   let sum = 0;

//   for (let i = 0; i < num.length; i++) {
//     sum += num[i];
//   }
//   return sum
// }

// let n = [3,5,76,5,7,3]

// console.log(sumOfArr(n));

// function reverseDigit(nums) {
//   let reverse = 0;
//   while (nums > 0) {
//     let lastDigit = nums % 10;
//     reverse = reverse * 10 + lastDigit;

//     nums = parseInt(nums / 10);
//   }
//   return reverse
// }

// console.log(reverseDigit(332));

// function countNumbers(nums) {
//   let count = 0;
//   while (nums > 0) {
//     nums = Math.floor(nums / 10);
//     count++;
//   }
//   return count;
// }

// console.log(countNumbers(332));

// function palindromeNumbers(nums) {
//   let n = nums;
//   let reverse = 0;
//   while (nums > 0) {
//     let lastDigit = nums % 10;
//     reverse = reverse * 10 + lastDigit;
//     nums = Math.floor(nums / 10);
//   }
//   return n === reverse;
// }

// console.log(palindromeNumbers(3333));

// function clcToFarh(nums) {
//   while (nums > 0) {
//     return (nums * 9) / 5 + 32;
//   }
// }

// console.log(clcToFarh(25));

// function digitsInFactorial(num) {
//   let res = 1;
//   let count = 0;
//   for (let i = 2; i <= num; i++) {
//     res = res * i;
//   }
//   while (res > 0) {
//     res = Math.floor(res / 10);
//     count++;
//   }
//   return count;
// }

// console.log(digitsInFactorial(5));

// function isPrime(nums) {
//   for (let i = 2; i * i <= nums; i++) {
//     console.log(i * i, nums % i);
//     if (nums % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(5));

// function exactly3Deviser(num) {

// let res = Math.floor(num/10)
// console.log(res)

// }

// console.log(exactly3Deviser(60));

// function sumUnderModulo(a, b) {
//   let M = BigInt(1e9 + 7);
//   // Convert a and b to BigInt
//   let bigA = BigInt(a);
//   let bigB = BigInt(b);
//   // Calculate sum modulo M
//   return ((bigA % M) + (bigB % M)) % M;
// }

// let a = 9223372036854775807n; // Note the 'n' at the end to denote BigInt
// let b = 9223372036854775807n; // Note the 'n' at the end to denote BigInt
// console.log(sumUnderModulo(a, b).toString()); // Convert the result to string for display

//table without using loop
// function table(n) {
//   if (n >= 1) {
//     table(n-1);
//     console.log(n);
//   }
// }

// console.log(table(5));

// class RateLimiter {
//   constructor() {
//     this.requests = {};
//   }

//   isAllow(clenstId) {
//     const timeInSeconds = Math.floor(Date.now() / 1000);
//     const requestTime = timeInSeconds - 1;
//     const allRequests = this.requests[clenstId] || [];
//     const updatedRequests = allRequests.filter(
//       (timeStamp) => timeStamp > requestTime
//     );

//     if (updatedRequests.length > 1000) {
//       return false;
//     }
//     updatedRequests.push(requestTime);
//     this.requests[clenstId] = updatedRequests;
//     return true;
//   }
// }

// added this ratelimiter
// class RateLimiter {
//   constructor(limit, timeWindow) {
//     this.limit = limit;
//     this.timeWindow = timeWindow; // timeWindow in seconds
//     this.requests = {};
//   }

//   isAllow(clientId) {
//     const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
//     const timeWindowStart = currentTime - this.timeWindow;

//     if (!this.requests[clientId]) {
//       this.requests[clientId] = [];
//     }

//     // Filter out timestamps outside the time window
//     const validRequests = this.requests[clientId].filter(
//       (timestamp) => timestamp > timeWindowStart
//     );

//     if (validRequests.length >= this.limit) {
//       return false;
//     }

//     // Add the current timestamp to the list of requests
//     validRequests.push(currentTime);
//     this.requests[clientId] = validRequests;

//     return true;
//   }
// }

// // Example usage:
// const rateLimiter = new RateLimiter(1000, 1); // Limit to 1000 requests per second

// // Simulating requests from a client
// const clientId = "client1";
// console.log(rateLimiter.isAllow(clientId)); // Should print true if within the limit
// console.log(rateLimiter.isAllow(clientId)); // Should print true if within the limit

// // Simulate reaching the limit
// for (let i = 0; i < 1000; i++) {
//   rateLimiter.isAllow(clientId);
// }

// console.log(rateLimiter.isAllow(clientId)); // Should print false if over the limit

// function fetchAllApis(apis) {
//   const promises = apis.map((url) => fetch(url));
//   return Promise.allSettled(promises).then((res) => {
//     for (const result of res) {
//       if (result.status === "fulfilled") {
//         return result.value;
//       }
//     }
//     throw new Error("All promises failed");
//   });
// }

// const apiUrls = [
//   "https://jsonplaceholder.typicode.com/todos",
//   "https://jsonplaceholder.typicode.com/todos",
//   "https://jsonplaceholder.typicode.com/todos",
//   "https://jsonplaceholder.typicode.com/todos",
// ];

// fetchAllApis(apiUrls)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//table without using loop
// function table(n) {
//   let result = [];
//   if (n >= 1) {
//     table(n - 1, result);
//     result.push(n);
//   }
//   return result;
// }

// console.log(table(5));

// function table(n, result = []) {
//   if (n >= 1) {
//     table(n - 1, result);
//     result.push(n);
//   }
//   return result;
// }

// // Call the function with the desired value and join the result to a string
// const result = table(5);
// console.log(result.join(" "));

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// // let fib =[]
// // for (let i = 0; i <10; i++) {
// // fib.push(fibonacci(i))
// // }
// console.log(fibonacci(20));

// function reverseSubArraysOfSizeK(arr, k) {
//   for (let i = 0; i < arr.length; i += k) {
//     let left = i;
//     let right = Math.min(i + k - 1, arr.length - 1);

//     while (left < right) {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//       right--;
//     }
//   }
//   return arr;
// }
// let arr = [1, 2, 3, 4, 5];
// let k = 3;

// console.log(reverseSubArraysOfSizeK(arr, k)); // [3, 2, 1, 5, 4]

// function majorityWins(arr, x, y) {
//   let countx = 0;
//   let county = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//       countx++;
//     } else if (arr[i] == y) {
//       county++;
//     }
//   }

//   if (countx > county) {
//     return x;
//   } else if (countx < county) {
//     return y;
//   } else {
//     return x < y ? x : y;
//   }
// }

// let arr = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5];
// let x = 4;
// let y = 5;
// console.log(majorityWins(arr, x, y)); // Output: 4

// function medianAndMedian(arr) {
//   let sizeOfArray = arr.length;
//   let sum = 0;
//   for (let i = 0; i < sizeOfArray; i++) {
//     sum += arr[i];
//   }
//   let mean = Math.floor(sum / sizeOfArray);

//   let median;
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (sizeOfArray % 2 === 1) {
//       median = arr[Math.floor(sizeOfArray / 2)];
//     } else {
//       let mid1 = arr[sizeOfArray / 2 - 1];
//       let mid2 = arr[sizeOfArray / 2];
//       median = Math.floor((mid1 + mid2) / 2);
//     }
//   }
//   return [mean, median];
// }

// let arr = [1, 2, 19, 28, 5];
// console.log(medianAndMedian(arr));

// function evenOddFibonacci(nums) {
//   if (nums<=1) {
//     return nums
//   }
//   return  evenOddFibonacci(nums - 1) + evenOddFibonacci(nums - 2);
// }
// console.log(evenOddFibonacci(20))

// function generateFibonacci(n) {
//   let fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

// let n = 20;
// let fibonacciSeries = generateFibonacci(n);
// console.log(fibonacciSeries);

// function rotateArr(nums, d) {
//   let n = nums.length;
//   d = d % n;
//   if (d === 0) {
//     return nums;
//   }
//   const reverse = (left, right) => {
//     while (left < right) {
//       [nums[left], nums[right]] = [nums[right], nums[left]];
//       left++;
//       right--;
//     }
//   };
//   reverse(0, d - 1);
//   reverse(d, n - 1);
//   reverse(0, n - 1);
//   return nums;
// }
// let num = [5, 6, 7, 1, 2, 3, 4];
// let d = 2;
// console.log(rotateArr(num, d));

// function binarySearch(nums, target) {
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return i

//     }
//   }
//   return -1
// }
// let nums = [1, 2, 3, 4, 5];
// let target = 7;
// console.log(binarySearch(nums, target));

// function binarySearch(nums, target) {
//   let low = 0;
//   let high = nums.length - 1;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// }
// let nums = [1, 2, 3, 4, 5];
// let target = 4;
// console.log(binarySearch(nums, target));

// function binarySearch(nums, target, low = 0, high = nums.length - 1) {
//   if (low > high) {
//     return -1;
//   }
//   let mid = Math.floor((low + high) / 2);
//   if (nums[mid] === target) {
//     return mid;
//   } else if (nums[mid] > target) {
//     return binarySearch(nums, target, low, mid - 1);
//   } else {
//     return binarySearch(nums, target, mid + 1, high);
//   }
// }
// let nums = [1, 2, 3, 4, 5];
// let target = 4;
// console.log(binarySearch(nums, target));

// function binarySearch(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// let nums = [1, 1, 2, 2, 3, 4, 5, 5, 6, 7];
// let target = 1;
// console.log(binarySearch(nums, target));
// function countOnes(nums) {
//   let count = 0;
//   for (let i = 0; i <= nums.length; i++) {
//     if (nums[i] === 1) {
//       count++;
//     }
//   }
//   return count;
// }

// let nums = [1, 1, 1, 1, 1, 0, 0, 0];
// console.log(countOnes(nums));

// function countOnes(nums) {
//   let low = 0;
//   let high = nums.length;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (nums[mid] === 1) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return low
// }

// let nums = [1, 1, 1, 1, 1, 0, 0, 0];
// console.log(countOnes(nums));

// function floorSqrt(num) {
//   let low = 0;
//   let high = num;
//   let res = 1;
//   while (low < high) {
//     let mid = Math.floor((low + high) / 2);
//     if (num === mid * mid) {
//       return mid;
//     } else if (mid * mid < num) {
//       low = mid + 1;
//       res = mid;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return res;
// }
// console.log(floorSqrt(5));

// function binarySearch(num, tagret) {
//   let low = 0;
//   let high = num.length - 1;
//   while (low <= high) {
//     console.log(high-1,'t')
//     let mid = Math.floor((low + high) / 2);
//     if (num[mid] === tagret) {
//       return 1;
//     } else if (num[mid] < tagret) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); //output 4

// function findFloor(arr, x) {
//   let left = 0;
//   let right = arr.length - 1;
//   let res = [];

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === x) {
//       return arr[mid];
//     } else if (arr[mid] < x) {
//       res = arr[mid];
//       left = mid + 1;
//     } else if (arr[mid] > x) {
//       right = mid - 1;
//     }
//   }
//   return res;
// }
// let arr = [1, 2, 8, 10, 11, 12, 19];
// console.log(findFloor(arr, 5));

// function majorityElement(arr) {
//   let n = arr.length;
//   let majority = Math.floor(n / 2);

//   for (let i = 0; i < n; i++) {
//     let count = 0;
//     for (let j = 0; j < n; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     if (count > majority) {
//       return arr[i];
//     }
//   }
//   return null;
// }
// let nums = [2, 2, 1, 1, 1, 2, 2];

// console.log(majorityElement(nums));

// function majorityElement(nums) {
//   let res = nums[0];
//   let count = 1;

//   for (let i = 1; i < nums.length - 1; i++) {
//     if (nums[i] === res) {
//       count++;
//     } else if (!--count) {
//       res = nums[i + 1];
//       count = 0;
//     }
//   }
//   return res;
// }
// let arr = [6, 1, 15, 19, 9, 13, 12, 6, 7, 2, 10, 4, 1, 14, 11, 14, 14, 13];

// console.log(majorityElement(arr));

// function countOccurence(arr, k) {
//   const n = arr.length;
//   const majority = Math.floor(n / k);
//   const map = new Map();

//   // Count frequencies of each element
//   for (const num of arr) {
//     map.set(num, (map.get(num) || 0) + 1);
//   }

//   let count = 0;
//   for (const [key, value] of map) {
//     if (value > majority) {
//       count++;
//     }
//   }

//   return count;
// }

// let arr = [3, 1, 2, 2, 1, 2, 3, 3];
// let k = 4;

// console.log(countOccurence(arr, k));


// Function to merge two subarrays of arr[]
// First subarray is arr[low..mid]
// Second subarray is arr[mid+1..high]
function merge(arr, low, mid, high) {
  // Sizes of two subarrays to be merged
  let n1 = mid - low + 1;
  let n2 = high - mid;

  // Create temporary arrays
  let left = [];
  let right = [];

  // Copy data to temporary arrays left[] and right[]
  for (let i = 0; i < n1; i++) {
    left[i] = arr[low + i];
  }
  for (let j = 0; j < n2; j++) {
    right[j] = arr[mid + 1 + j];
  }

  // Initial indexes of the first and second subarrays
  let i = 0;
  let j = 0;

  // Initial index of merged subarray
  let k = low;

  // Merge the temporary arrays back into arr[low..high]
  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
    }
  }

  // Copy the remaining elements of left[], if any
  while (i < n1) {
    arr[k++] = left[i++];
  }

  // Copy the remaining elements of right[], if any
  while (j < n2) {
    arr[k++] = right[j++];
  }

  return arr;
}

// Function to implement merge sort
// arr[] is the array to be sorted, left is the starting index, right is the ending index
function mergeSort(arr, left, right) {
  if (left < right) {
    // Find the middle point to divide the array into two halves
    let mid = Math.floor((left + right) / 2);

    // Call mergeSort on the first half
    arr = mergeSort(arr, left, mid);

    // Call mergeSort on the second half
    arr = mergeSort(arr, mid + 1, right);

    // Merge the two halves sorted in the previous steps
    arr = merge(arr, left, mid, right);
  }
  return arr;
}

// Example usage
let a = [10, 5, 30, 15, 7];
let l = 0;
let r = a.length - 1;

// Sort the array using mergeSort
a = mergeSort(a, l, r);
console.log(a); // Output: [5, 7, 10, 15, 30]

