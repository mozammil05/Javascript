function vowelCheck(str) {
  let count = 0;
  let res = []
  for (let i = 0; i <= str.length; i++) {
    if ("aeiou".includes(str[i])) {
      count++;
      res.push(str[i])
      console.log('res', res)
    }
  }
  return res;
}
console.log(vowelCheck("geeks"));