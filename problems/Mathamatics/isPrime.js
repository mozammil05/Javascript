// // neive methods

// function isprime(n) {
//   if (n === 1) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }

// console.log(isprime(3));
// // TC o(1)

// efficient method

function isprime(n) {
  if (n === 1) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i < n; i = i + 6) {
    if (n % i === 0 || n % (n + 2) === 0) return false;
  }
  return true;
}
console.log(isprime(3));
