// function TargetSum(arr, x) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (arr[i] + arr[j] === x) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// let arr = [2, 5, 8, 12];
// let x = 17;
// let result = TargetSum(arr, x);
// console.log(result);

function isPairSum(arr, x) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === x) {
      return true;
    } else if (arr[i] + arr[j] < x) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}

let arr = [2, 3, 5, 8, 9, 10, 11];

let val = 17;

var result = isPairSum(arr, val);

console.log(result);

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
