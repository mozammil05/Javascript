function countingPower(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = result * x;
  }
  return result;
}

// console.log(countingPower(2, 3));

function mypower(x, n) {
  if (n === 0) return 1;

  let temp = mypower(x, Math.floor(n / 2));
  temp = temp * temp;
  if (n % 2 === 0) return temp;

  return temp * x;
}

console.log(mypower(2, 3)); //   o/p =8
