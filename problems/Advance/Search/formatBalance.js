function formatBalance(balance) {
  const abbreviations = ["", "K", "M", "B", "T"];

  let index = 0;
  while (balance >= 1000 && index < abbreviations.length - 1) {
    balance /= 1000;
    index++;
  }

  const formattedBalance = balance.toFixed(2);
  return `${formattedBalance}${abbreviations[index]}`;
}

// Example usage:
const balance1 = 1500;
const formattedBalance1 = formatBalance(balance1);
console.log(formattedBalance1); // Output: "1.50K"
