// console.log(2 + "2");

const { futimes } = require("fs");

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

function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
let res = outer();
res();

function outerFunction() {
  let outerVariable = "I am outer";
  function innerFunction() {
    console.log(outerVariable); // Output: I am outer
  }
  return innerFunction;
}
const closureExample = outerFunction();
closureExample();
