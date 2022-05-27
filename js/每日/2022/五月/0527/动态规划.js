/**
 * 0526
 */
// 322. 零钱兑换
// 凑成amount最少需要多少个硬币
var coinChange = function(coins, amount) {
  // dp[i]表示凑成i金额最少需要的金币个数
  let dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
}

// 518. 零钱兑换Ⅱ
// 凑成amount金额有多少种凑法
var change = function(amount, coins) {
  // dp[i]表示凑成i金额的方法数
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }
  return dp[amount];
}

/**
 * 0527
 */
//  279. 完全平方数
// 组成n的最少的完全平方数的个数
var numSquares = function(n) {
  // dp[i]表示组成i需要的最少的完全平方数的个数
  let dp = Array(n + 1).fill(n + 1);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
};

// 651. 4键键盘
var maxA = function (n) {
  // dp[i]表示按键i次最多可以显示 A 的个数
  let dp = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    // 遍历前面可能的Ctrl A后Ctrl V
    // 要在i位置按下Ctrl V，那最晚也是在i - 2的地方按下Ctrl A
    // 如果在j位置按下了Ctrl A，那在i位置可以产生A的个数是 j位置A的个数 * i - j - 1次粘贴 
    for (let j = 0; j < i - 1; j++) {
      dp[i] = Math.max(dp[i], dp[j] * (i - j - 1));
    }
  }
  return dp[n];
};

// 474.一和零
var findMaxForm = function(strs, m, n) {
  let l = strs.length;

  // dp[i][j][k] 表示前i个字符串包含j个0 k个1时的最大子集长度
  let dp = Array(l + 1);
  for (let i = 0; i <= l; i++) {
    dp[i] = Array(m + 1);
    for (let j = 0; j <= m; j++) {
      dp[i][j] = Array(n + 1).fill(0);
    }
  }

  // 遍历字符串数组
  for (let i = 1; i <= l; i++) {
    // 获取字符串 0 和 1的个数
    let counts = getCounts(strs[i - 1]);
    let zeros = counts[0];
    let ones = counts[1];

    // 遍历0的个数
    for (let j = 0; j <= m; j++) {

      // 遍历1的个数
      for (let k = 0; k <= n; k++) {
        // 假设0超出个数了或者1超出个数了，直接取i - 1处的dp值
        dp[i][j][k] = dp[i - 1][j][k];

        if (j >= zeros && k >= ones) {
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - zeros][k - ones] + 1);
        }
      }
    }
  }

  return dp[l][m][n];
};

function getCounts(str) {
  let res = Array(2).fill(0);
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '0') {
      res[0]++;
    } else {
      res[1]++;
    }
  }
  return res;
}
