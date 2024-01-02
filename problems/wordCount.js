function wordCount(str) {
  let words = str.split(" ");
  let reverseWords = words.reverse();
  let reversedSentence = reverseWords.join(" ");
  let wordCount = words.length;

  console.log(`Number of words in the reversed sentence: ${wordCount}`);

  return reversedSentence;
}

console.log(wordCount("mozammil raja"));
