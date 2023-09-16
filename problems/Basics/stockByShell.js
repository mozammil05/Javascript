function stockByShell(prices) {
  let maxProfit = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (buy < prices[i]) {
      maxProfit = Math.max(maxProfit, prices[i] - buy);
      continue;
    }
    buy = prices[i];
  }
  return maxProfit;
}

let prices1 = [7, 1, 5, 3, 6, 4];
let prices2 = [7, 6, 4, 3, 1];
let prices3 = [3,1,4,8,7,2,5];


console.log("Max Profit for prices1:", stockByShell(prices1));
console.log("Max Profit for prices2:", stockByShell(prices2));
console.log("Max Profit for prices2:", stockByShell(prices3));

