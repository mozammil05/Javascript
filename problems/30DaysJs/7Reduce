function reduce(nums, fn, init) {
  let result = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }
  return result;
}
const nums = [1, 2, 3, 4];
const sum = function (accum, curr) {
  return accum + curr;
};
const init = 0;

const finalResult = reduce(nums, sum, init);
console.log(finalResult); // Output: 10
