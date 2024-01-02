function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const charMap = Array(256).fill(0);

  for (let i = 0; i < s.length; i++) {
    charMap[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    charMap[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  return charMap.every((count) => count === 0);
}

const str1 = "listen";
const str2 = "silent";

if (isAnagram(str1, str2)) {
  console.log(`${str1} and ${str2} are anagrams.`);
} else {
  console.log(`${str1} and ${str2} are not anagrams.`);
}
