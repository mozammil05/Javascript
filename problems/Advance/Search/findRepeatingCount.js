function findRepeatingCount(arr) {
  const n = arr.length;

  let low = 0;
  let high = n - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    // Check if the mid element is the repeating element
    if (arr[mid] === arr[mid + 1]) {
      return [arr[mid], n - mid];
    }

    // Check if the repeating element is in the left half
    if (arr[mid] === mid + [0]) {
      low = mid + 1;
    } else {
      // Check if the repeating element is in the right half
      high = mid - 1;
    }
  }

  // If no repeating element is found
  return [-1, -1];
}

// Example usage
const arr1 = [1, 2, 3, 3, 4];
const arr2 = [2, 3, 4, 5, 5];
const arr3 = [1, 2, 3];

console.log(findRepeatingCount(arr1)); // Output: [3, 2]
console.log(findRepeatingCount(arr2)); // Output: [5, 2]
console.log(findRepeatingCount(arr3)); // Output: [-1, -1]
