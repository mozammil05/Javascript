// function TwoSum(nums, target) {
//   const index = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (index.has(complement)) {
//       return [index.get(complement), i];
//     }
//     index.set(nums[i], i);
//   }
//   return [];
// }

// let nums = [2, 7, 11, 15];
// let target = 9;

// console.log(TwoSum(nums, target));

function TwoSum(nums, target) {
  const index = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (index.has(complement)) {
      return [index.get(complement), i];
    }
    index.set(nums[i], i);
  }
  return [];
}

let nums = [2, 7, 11, 15];
let target = 9;

console.log(TwoSum(nums, target));
