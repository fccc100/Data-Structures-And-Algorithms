// 312. 戳气球
// 有 n 个气球，编号为0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。

// 现在要求你戳破所有的气球。戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。 
// 这里的 i - 1 和 i + 1 代表和 i 相邻的两个气球的序号。如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。

// 求所能获得硬币的最大数量。

// 示例 1：
// 输入：nums = [3,1,5,8]
// 输出：167
// 解释：
// nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
// coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
// 示例 2：

// 输入：nums = [1,5]
// 输出：10

/**
 * @param {number[]} nums
 * @return {number}
 */
// 递归，超时
var maxCoins = function(nums) {
  let n = nums.length;

  let vals = Array(n + 2).fill(1);
  for (let i = 1; i <= n; i++) {
    vals[i] = nums[i - 1];
  }

  function f(l, r) {
    if (l >= r - 1) {
      return 0;
    }

    let max = 0;
    for (let i = l + 1; i < r; i++) {
      let sum = vals[l] * vals[i] * vals[r];
      sum += f(l, i) + f(i, r);
      max = Math.max(max, sum);
    }
    return max;
  }

  return f(0, n + 1);
};

// 记忆化搜索
var maxCoins = function(nums) {
  let n = nums.length;

  // 首尾添加1
  let vals = Array(n + 2).fill(1);
  for (let i = 1; i <= n; i++) {
    vals[i] = nums[i - 1];
  }

  // 记忆化数组
  let memo = Array(n + 2);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = Array(n + 2).fill(-1);
  }

  function f(l, r) {
    if (l >= r - 1) {
      return 0;
    }

    if (memo[l][r] != -1) {
      return memo[l][r];
    }
    
    for (let i = l + 1; i < r; i++) {
      let sum = vals[l] * vals[i] * vals[r];
      sum += f(l, i) + f(i, r);
      memo[l][r] = Math.max(memo[l][r], sum);
    }
    return memo[l][r];
  }

  // 求(0, n + 1)范围能得到的最大硬币个数
  return f(0, n + 1);
}

// 动态规划
var maxCoins = function(nums) {
  let n = nums.length;
}