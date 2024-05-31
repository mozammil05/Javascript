function map(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
}
const arr = [1, 2, 3];
const plusOne = function plusOne(n) {
  return n + 1;
};

const newArray = map(arr, plusOne);
console.log(newArray); // Output: [2, 3, 4]
