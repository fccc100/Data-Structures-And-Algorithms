/**
 * 复习
 */

// 516. 最长回文子序列
var longestPalindromeSubseq = function(s) {
  let n = s.length;
  if (n == 0) return 0;

  // dp[i][j]表示字符s[i, j]范围的最长回文子序列
  let dp = Array(n);
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = Array(n).fill(0);
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      if (s[i] == s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][n - 1];
}

// 646. 最长数对链
// 动态规划O(n^2)
var findLongestChain = function(pairs) {
  let n = pairs.length;
  if (n == 0) return 0;
  pairs.sort((a, b) => a[0] - b[0]);

  let dp = Array(n).fill(1);
  dp[0] = 1;
  let ans = 1;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (pairs[j][1] < pairs[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
      ans = Math.max(ans, dp[i]);
    }
  }
  return ans;
}

// 贪心
var findLongestChain = function(pairs) {
  let n = pairs.length;
  if (n == 0) return 0;
  pairs.sort((a, b) => a[1] - b[1]);

  let cur = pairs[0][1]
  let res = 1;
  for (let i = 1; i < n; i++) {
    if (pairs[i][0] > cur) {
      res++;
      cur = pairs[i][1];
    }
  }
  return res;
}

// 368. 最大整除子集

// nums	2	 4	7	 8	9	 12	 16	 20
// dp	  1	 2	1	 3	1	 3	 4	 3

var largestDivisibleSubset = function(nums) {
  let n = nums.length;
  if (n == 0) return [];

  nums.sort((a, b) => a - b);

  // dp[i]表示以i为最大数字的最大整除子集的个数
  let dp = Array(n).fill(1);
  dp[0] = 1;

  let max = 1;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] == 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
      max = Math.max(max, dp[i]);
    }
  }

  let res = [];
  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] == max) {
      if (!res.length || res[0] % nums[i] == 0) {
        res.unshift(nums[i]);
        max--;
      }
    }
  }
  return res;
}

// 673. 最长递增子序列的个数
var findNumberOfLIS = function(nums) {
  let n = nums.length;
  if (n <= 1) return n;

  // dp[i]表示[0, i]范围内的最长递增子序列的长度
  let dp = Array(n).fill(1);

  // count[i]表示以i结尾的最长递增子序列的个数
  let count = Array(n).fill(1);
  let max = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // 如果从[0, i - 1]找到小于i位置的数，更新dp
      if (nums[j] < nums[i]) {
        // 如果dp[j] + 1 > dp[i], 说明找到了更长的递增子序列，更新dp，并且当前的个数更新为j位置的个数
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 == dp[i]) {
          // 相等时，说明找到了长度一样的递增子序列，累加
          count[i] += count[j];
        }
      }
      // 记录最长递增子序列的长度
      max = Math.max(max, dp[i]);
    }
  }

  // dp[i]的值为最长递增子序列的长度时，累加count[i]
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (dp[i] == max) {
      res += count[i];
    }
  }
  return res;
}