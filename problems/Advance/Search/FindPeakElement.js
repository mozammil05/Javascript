// function findPeakElement(arr) {
//   let n = arr.length;
//   if (n === 1) {
//     return arr[0];
//   }
//   if (arr[0] >= arr[1]) {
//     return arr[0];
//   }
//   if (arr[n - 1] >= arr[n - 2]) {
//     return arr[n - 1];
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
//       return arr[i];
//     }
//   }
// }

// const exampleArray = [1, 3, 20, 4, 1, 0];
// const peakElement = findPeakElement(exampleArray);

// console.log("Peak Element:", peakElement);

function findPeakElement(arr) {
  let low = 0;
  let n = arr.length;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (
      (mid === 0 || arr[mid - 1] <= arr[mid]) &&
      (mid === n - 1 || arr[mid + 1] <= arr[mid])
    ) {
      return arr[mid];
    } else if (mid > 0 && arr[mid - 1] >= arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
}

const exampleArray = [1, 3, 20, 4, 1, 0];
const peakElement = findPeakElement(exampleArray);

console.log("Peak Element:", peakElement);
