/**
 * 复习前一日
 */

//  300. 最长递增子序列
var lengthOfLIS = function(nums) {
  let n = nums.length;
  if (n == 0) return 0;

  // dp[i]表示以i结尾的子数组的最长递增子序列的长度
  let dp = Array(n).fill(1);
  dp[0] = 1;

  let ans = dp[0];
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        ans = Math.max(ans, dp[i]);
      }
    }
  }
  return ans;
}

// 712. 两个字符串的最小ASCII删除和
/**
 * 本题可以使用最长公共子序列思路求解，求出最大ASCII和的公共子序列，再用两个字符串的ASCII编码和减去两倍的公共子序列和的ASCII码
 */
var minimumDeleteSum = function(s1, s2) {
  let m = s1.length;
  let n = s2.length;

  let sum1 = 0;
  for (let i = 0; i < m; i++) {
    sum1 += s1[i].charCodeAt();
  }
  let sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum2 += s2[i].charCodeAt();
  }

  let dp = Array(m + 1);
  dp[0] = Array(n + 1).fill(0);

  let max = 0;
  for (let i = 1; i <= m; i++) {
    dp[i] = Array(n + 1).fill(0);
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + s1[i - 1].charCodeAt();
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }

      max = Math.max(max, dp[i][j]);
    }
  }

  return sum1 + sum2 - max * 2;
}

/**
 * 0516
 */
// 1048.最长字符串链
var longestStrChain = function(words) {
  let n = words.length;
  if (n == 0) return 0;
  // 先以长度排序
  words.sort((a, b) => a.length - b.length);

  // dp[i]表示以i结尾的最长字符串链
  let dp = Array(n).fill(1);
  dp[0] = 1;
  let ans = dp[0];
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      // 如果是前身，更新最大长度
      if (isMatch(words[i], words[j])) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
      ans = Math.max(ans, dp[i]);
    }
  }

  return ans;
};

// 判断s2是否是s1的前身
function isMatch(s1, s2) {
  if (s1.length != s2.length + 1) return false;

  let index = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] == s2[index]) {
      index++;
    }
  }
  if (index == s2.length) {
    return true;
  }
  return false;
}