var addTwoPromises = async function (promise1, promise2) {
  // Wait for both promises to resolve
  const value1 = await promise1;
  const value2 = await promise2;

  // Return the sum of the resolved values
  return value1 + value2;
};

// Example usage
let promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
let promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then((result) => {
  console.log(result); // Outputs: 7
});
