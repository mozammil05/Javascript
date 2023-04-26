const arr = [1,1,2,2,3,4,4,5,5,6,7,8,8];
const hashTable = {};
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (!hashTable[arr[i]]) {
    hashTable[arr[i]] = true;
    count++;
  }
}

console.log(count); // Output: 8
