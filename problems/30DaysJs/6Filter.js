function filter(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
}
const arr = [0, 10, 20, 30];
const greaterThan10 = function (n) {
  return n > 10;
};

const filteredArr = filter(arr, greaterThan10);
console.log(filteredArr); // Output: [20, 30]
