function binarySearch(arr, low, high, x) {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

function infiniteSizeArray(arr, x) {
  if (arr[0] == x) return 0;

  let i = 1;

  while (arr[i] < x) i = i * 2;

  if (arr[i] == x) return i;

  return binarySearch(arr, i / 2 + 1, i - 1, x);
}

let arr = [1, 2, 3, 5, 5];
let x = 2;

console.log(infiniteSizeArray(arr, x));
