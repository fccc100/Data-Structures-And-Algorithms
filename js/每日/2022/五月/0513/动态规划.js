/**
 * 复习前一天
 */
// 487. 最大连续1的个数 II
var findMaxConsecutiveOnes = function(nums) {
  // dp[i][0]表示不使用操作的最大长度
  // dp[i][1]表示使用操作的最大长度
  let dp = Array(nums.length);
  dp[0] = Array(2);
  dp[0][0] = nums[0];
  dp[0][1] = 1;

  let ans = 1;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Array(2);
    dp[i][0] = nums[i] == 0 ? 0 : dp[i - 1][0] + 1;
    dp[i][1] = nums[i] == 0 ? dp[i - 1][0] + 1 : dp[i - 1][1] + 1;
    ans = Math.max(ans, dp[i][1]);
  }
  return ans;
}

// 376. 摆动序列
var wiggleMaxLength = function(nums) {
  let n = nums.length;
  if (n == 0) return 0;

  // upDp[i]表示i位置上升的最大长度
  // downDp[i]表示i位置下降的最大长度
  let upDp = Array(n);
  let downDp = Array(n);

  upDp[0] = 1;
  downDp[0] = 1;
  let ans = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      // 上升
      upDp[i] = downDp[i - 1] + 1;
      downDp[i] = downDp[i - 1];
    } else if (nums[i] < nums[i - 1]) {
      // 下降
      downDp[i] = upDp[i - 1] + 1;
      upDp[i] = upDp[i - 1];
    } else {
      downDp[i] = downDp[i - 1];
      upDp[i] = upDp[i - 1];
    }

    ans = Math.max(ans, downDp[i], upDp[i]);
  }
  return ans;
}

// 1746. 经过一次操作后的最大子数组和
var maxSumAfterOperation = function(nums) {
  let n = nums.length;
  if (n == 0) return 0;

  // dp[i][0]表示以i结尾不使用操作的最大和
  // dp[i][1]表示以i结尾使用操作的最大和
  let dp = Array(n);
  dp[0] = Array(2);
  dp[0][0] = nums[0];
  dp[0][1] = nums[0] * nums[0];

  let ans = dp[0][1];
  for (let i = 1; i < n; i++) {
    dp[i] = Array(2);
    dp[i][0] = Math.max(dp[i - 1][0] + nums[i], nums[i]);
    dp[i][1] = Math.max(dp[i - 1][1] + nums[i], dp[i - 1][0] + nums[i] * nums[i], nums[i] * nums[i]);

    ans = Math.max(ans, dp[i][1]);
  }
  return ans;
}

/**
 * -----------------------------------------------------------------------------------分割线---------------------------------------------------------------------
 * -----------------------------------------------------------------------------------分割线---------------------------------------------------------------------
 * 0513
 */

// 1230.抛掷硬币
var probabilityOfHeads = function(prob, target) {
  let n = prob.length;
  if (n == 0) return 0;

  // dp[i][j]表示前i枚硬币正面朝上的数量为j的概率
  let dp = Array(n + 1);
  dp[0] = Array(target + 1).fill(0);
  dp[0][0] = 1;

  // 前i枚硬币0枚朝上的概率 = 前i - 1枚硬币0枚朝上的概率 * 第i枚硬币反面朝上的概率
  for (let i = 1; i <= n; i++) {
    dp[i] = Array(target + 1).fill(0);
    dp[i][0] = dp[i - 1][0] * (1 - prob[i - 1]);
  }

  // 前i枚硬币j枚朝上的概率 = 前i - 1枚硬币j枚朝上的概率 * 第i枚硬币反面朝上的概率 + 前i - 1枚硬币j - 1枚朝上的概率 * 第i枚硬币正面朝上的概率。
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i && j <= target; j++) {
      dp[i][j] = dp[i - 1][j] * (1 - prob[i - 1]) + dp[i - 1][j - 1] * prob[i - 1];
    }
  }

  return dp[n][target];
}