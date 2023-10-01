// const arr = [1, 3, 4, 6, 6, 3, 1];

// function sortDec(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// const result = sortDec(arr);

// console.log(result);

// isprime numbers

// function isprime(x) {
//   return x.toString.split("").reverse().join("");
//   // return str.split("");
// }
// console.log(isprime(10));

// function isPlindrome(x) {
//   if (x < 0) return false;
//   return x.toString().split("").reverse().join("");
// }

// console.log(isPlindrome("raja"));

// const fib = (n) => {
//   const arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr[n];
// };

// fib(5);

// using recusrion

// const fib = (n) => {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// };

// const result = fib(5);
// console.log(result); // Output: 5

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
