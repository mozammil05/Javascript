function getMaxOccuringChar(str) {
  const charCount = {};
  let maxChar = str[0];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;

    if (
      charCount[char] > charCount[maxChar] ||
      (charCount[char] === charCount[maxChar] && char < maxChar)
    ) {
      maxChar = char;
    }
  }

  return maxChar;
}

// Example usage:
const inputStr1 = "testsample";
const output1 = getMaxOccuringChar(inputStr1);
console.log(output1); // Output: "e"

const inputStr2 = "output";
const output2 = getMaxOccuringChar(inputStr2);
console.log(output2); // Output: "t"
