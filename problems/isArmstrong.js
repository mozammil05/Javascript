function isArmstrong(n) {
  let sume = 0;
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    let result = parseInt(str[i], 10);
    sume += Math.pow(result, str.length);
  }
  return n === sume;
}
console.log(isArmstrong(153));
