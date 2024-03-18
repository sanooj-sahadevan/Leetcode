const prices = [8, 4, 6, 2, 3];
Output: [4, 2, 4, 2, 3];

for (i = 0; i < prices.length; i++) {
  for (j = i + 1; j < prices.length; j++) {
    if (prices[i] >= prices[j]) {
      prices[i] = prices[i] - prices[j];
      break;
    }
  }
}

console.log(prices);
