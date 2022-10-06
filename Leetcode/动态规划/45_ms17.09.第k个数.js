// 面试题 17.09. 第 k 个数
// 有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，5，7，9，15，21。

function getKthMagicNumber(k) {
  // function _getKthMagicNumber(k) {
  //   if (k == 1) {
  //     return 1;
  //   }
  //   if (k == 2) {
  //     return 3;
  //   }
  //   if (k == 3) {
  //     return 5;
  //   }
  //   if (k == 4) {
  //     return 7;
  //   }

  //   return 3 * _getKthMagicNumber(k - 3);
  // }

  // return _getKthMagicNumber(k);
}

// 动态规划
function getKthMagicNumber(k) {
  let p3 = 0;
  let p5 = 0;
  let p7 = 0;
  let dp = Array(k);
  dp[0] = 1;

  for (let i = 1; i < k; i++) {
    dp[i] = Math.min(dp[p3] * 3, Math.min(dp[p5] * 5, dp[p7] * 7));
    if (dp[i] == dp[p3] * 3) p3 ++;
    if (dp[i] == dp[p5] * 5) p5 ++;
    if (dp[i] == dp[p7] * 7) p7 ++;
  }

  return dp[k - 1];
}