var compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};
const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];

const composedFunction = compose(functions);
const result = composedFunction(4);

console.log(result); // Output: 65
