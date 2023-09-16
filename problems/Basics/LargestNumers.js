function LargestNumbers(arr) {
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  return { maxIndex, max };
}

let arr = [1, 43, 5, 6, 68, 68, 6];

console.log(LargestNumbers(arr));
