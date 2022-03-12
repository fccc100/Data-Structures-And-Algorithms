// 673. 最长递增子序列的个数
// 给定一个未排序的整数数组 nums ， 返回最长递增子序列的个数 。

// 注意 这个数列必须是 严格 递增的。

// 先求最长递增子序列 
function findNumberOfLIS(nums) {
  // 定义状态：dp[i]表示以i位置结尾的最长递增子序列的个数
  let dp = Array(nums.length);

  // 状态初始化：以第一个数结尾的最长递增子序列是其本身，个数为1
  // 每个位置以自己作为序列都构成递增子序列，个数为1，顺便完成基础问题状态初始化
  dp.fill(1);

  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    // 遍历i前面的数，如果发现比i位置小的数，则说明把i放在其后面构成新的递增子序列，长度+1
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);

        // 记录最长递增子序列
        max = Math.max(max, dp[i]);
      }
    }
  }

  // 统计有多少个最长递增子序列

  // 不是这样统计
  // let count = 0;
  // for (let i = 0; i < dp.length; i++) {
  //   if (dp[i] == max) {
  //     count ++;
  //   }
  // }

  return count;
}

// 动态规划
findNumberOfLIS(nums) {
  let dp = Array(nums.length).fill(1);

  let counts = Array(nums.length).fill(1);
  let count = counts[0];
  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          counts[i] = counts[j];
        } else if (dp[j] + 1 == dp[i]) {
          counts[i] += counts[j]
        }
      }
    }
    if (dp[i] > max) {
      max = dp[i];
      count = counts[i];
    } else if (dp[i] == max) {
      count += counts[i];
    }
  }

  return count;
}