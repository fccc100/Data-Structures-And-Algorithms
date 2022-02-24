// 1646. 获取生成数组中的最大值
// 给你一个整数 n 。按下述规则生成一个长度为 n + 1 的数组 nums ：

// nums[0] = 0
// nums[1] = 1
// 当 2 <= 2 * i <= n 时，nums[2 * i] = nums[i]
// 当 2 <= 2 * i + 1 <= n 时，nums[2 * i + 1] = nums[i] + nums[i + 1]
// 返回生成数组 nums 中的 最大 值。

// 示例 1：
// 输入：n = 7
// 输出：3
// 解释：根据规则：
//   nums[0] = 0
//   nums[1] = 1
//   nums[(1 * 2) = 2] = nums[1] = 1
//   nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2
//   nums[(2 * 2) = 4] = nums[2] = 1
//   nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3
//   nums[(3 * 2) = 6] = nums[3] = 2
//   nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3
// 因此，nums = [0,1,1,2,1,3,2,3]，最大值 3

// 递归
function getMaximumGenerated(n) {
  // let max = -Infinity;
  // function _getMaximumGenerated(n) {
  //   if (n == 0) {
  //     return 0;
  //   }
  //   if (n == 1) {
  //     return 1;
  //   }

  //   if (n % 2 == 0) {
  //     let res = _getMaximumGenerated(n / 2);
  //     max = Math.max(max, res)
  //     return res;
  //   } else {
  //     let res = _getMaximumGenerated(Math.floor(n / 2)) + _getMaximumGenerated(Math.floor(n / 2) + 1);
  //     max = Math.max(max, res);
  //     return res;
  //   }
  // }
  // _getMaximumGenerated(n);
  // return max;
}

// 动态规划
function getMaximumGenerated(n) {
  // 状态定义：dp[i]表示第i个数
  let dp = Array(n + 1);
  dp[0] = [0];
  dp[1] = 1;
  let max = n == 0 ? 0 : 1;
  for (let i = 2; i <= n; i++) {
    let k = i % 2;
    if (k == 0) {
      dp[i] = dp[i / 2];
    } else {
      dp[i] = dp[Math.floor(i / 2)] + dp[Math.floor(i / 2) + 1];
    }
    max = Math.max(max, dp[i]);
  }

  return max;
}
