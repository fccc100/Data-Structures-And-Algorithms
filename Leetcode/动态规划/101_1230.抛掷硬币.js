// 1230. 抛掷硬币
// 有一些不规则的硬币。在这些硬币中，prob[i] 表示第 i 枚硬币正面朝上的概率。

// 请对每一枚硬币抛掷 一次，然后返回正面朝上的硬币数等于 target 的概率。

// 示例 1：

// 输入：prob = [0.4], target = 1
// 输出：0.40000
// 示例 2：

// 输入：prob = [0.5,0.5,0.5,0.5,0.5], target = 0
// 输出：0.03125

/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
var probabilityOfHeads = function(prob, target) {
  let n = prob.length;
  if (!n) return 0;
  
  // dp[i][j]表示前i枚硬币正面朝上数量为j的概率
  let dp = Array(n + 1);
  dp[0] = Array(target + 1).fill(0);
  // 前0枚硬币正面朝上数量为0的概率为1
  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    dp[i] = Array(target + 1).fill(0);
    dp[i][0] = dp[i - 1][0] * (1 - prob[i - 1]);
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i && j <= target; j++) {
      dp[i][j] = dp[i - 1][j] * (1 - prob[i - 1]) + dp[i - 1][j - 1] * prob[i - 1];
    }
  }
  return dp[n][target];
};

