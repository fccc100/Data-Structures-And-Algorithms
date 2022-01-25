function coinsChange(coins, amount) {
  let dp = Array(amount + 1);
  dp.fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; i < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]]);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
}