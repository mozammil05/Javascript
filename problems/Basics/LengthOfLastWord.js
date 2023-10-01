// function lengthOfLastWord(s) {
//   const words = s.trim().split(" ");

//   if (words.length === 0) {
//     return 0;
//   }

//   return words[words.length - 1].length;
// }
// const s1 = "Hello World";
// console.log(lengthOfLastWord(s1)); // Output: 5

// const s2 = "   fly me   to   the moon  ";
// console.log(lengthOfLastWord(s2)); // Output: 4

// const s3 = "luffy is still joyboy";
// console.log(lengthOfLastWord(s3)); // Output: 6

// reverse word
function reverseWords(s) {
  // Split the string into words using spaces as delimiters, trim leading/trailing spaces
  const words = s.trim().split(/\s+/).reverse().join(" ");

  // Reverse the array of words and join them with a single space
  return words;
}
const s1 = "Hello World";
console.log(reverseWords(s1)); // Output: 5

const s2 = "   fly me   to   the moon  ";
console.log(reverseWords(s2)); // Output: 4

const s3 = "luffy is still joyboy";
console.log(reverseWords(s3)); // Output: 6
