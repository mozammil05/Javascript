// function SecondLargestNumbers(arr) {
//   let max = arr[0];
//   let secondMax = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       secondMax = max;
//       max = arr[i];
//     } else if (arr[i] > secondMax && arr[i] !== max) {
//       secondMax = arr[i];
//     }
//   }
//   return secondMax;
// }

// let arr = [1, 43, 5, 6, 68, 68, 6];

// console.log(SecondLargestNumbers(arr));


function SecondLargestNumbers(arr) {
  // Sort the array in descending order
  const sortedArray = arr.sort((a, b) => b - a);

  // Return the second element (index 1) of the sorted array
  return sortedArray[2];
}

let arr = [1, 43, 5, 6, 68, 68, 6];

console.log(SecondLargestNumbers(arr));
