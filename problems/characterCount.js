function characterCount(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let result = str[i];
    if (count[result]) {
      count[result]++;
    } else {
      count[result] = 1;
    }
  }
  return count;
}
console.log(characterCount("mozammil raja"));
