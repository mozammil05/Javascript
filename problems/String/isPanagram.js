function isPanagram(str) {
  str = str.toLowerCase();
  const uniqueChars = new Set();

  for (let i = 0; i < str.length; i++) {
    if (/^[a-z]$/.test(str[i])) {
      uniqueChars.add(str[i]);
    }
  }

  return uniqueChars.size === 26;
}

const inputString = "The quick brown fox jumps over the lazy dog";
const result = isPanagram(inputString);
console.log(result);
