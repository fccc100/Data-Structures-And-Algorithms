/**
 * 前一日
 */
// 983.最低票价
var mincostTickets = function(days, costs) {
  let set = new Set();
  for (let i = 0; i < days.length; i++) {
    set.add(days[i]);
  }

  let memo = Array(365);

  function __mincostTickets(day) {
    if (day > 365) {
      return 0;
    }

    if (memo[day] !== undefined) {
      return memo[day];
    }

    if (set.has(day)) {
      memo[day] = Math.min(__mincostTickets(day + 1) + costs[0], __mincostTickets(day + 7) + costs[1], __mincostTickets(day + 30) + costs[2]);
    } else {
      memo[day] = __mincostTickets(day + 1);
    }

    return memo[day];
  }

  return __mincostTickets(1);
}

// 368. 最大整除子集
var largestDivisibleSubset = function(nums) {
  let n = nums.length;
  if (n == 0) return [];

  nums.sort((a, b) => a - b);

  // dp[i]表示以i为最大数的最大整除子集的个数
  let dp = Array(n).fill(1);
  dp[0] = 1;
  let max = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
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

  // dp[i]表示以i结尾的最长递增子序列的长度
  let dp = Array(n).fill(1);
  // count[i]表示i位置最长递增子序列的个数
  let count = Array(n).fill(1);
  // 最长递增子序列的长度
  let max = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // 找到比i小的值，可以构成递增序列
      if (nums[j] < nums[i]) {
        // 找到更长的子序列
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 == dp[i]) {
          // 找到了长度相等的子序列
          count[i] += count[j];
        }
      }
      max = Math.max(max, dp[i]);
    }
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (dp[i] == max) {
      ans += count[i];
    }
  }
  return ans;
}

/**
 * 0518
 */

//  5. 最长回文子串
var longestPalindrome = function(s) {
  let n = s.length;
  if (n == 0) return s;

  // dp[i][j]表示字符串s在[i, j]的最长回文子串的长度
  let dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n);
    dp[i][i] = true;
  }

  let maxLen = 1;
  let start = 0;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] != s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i + 1 <= 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        start = i;
      }
    }
  }

  return s.substr(start, maxLen);
}

// 647. 回文子串
// 统计回文子串个数
var countSubstrings = function(s) {
  let n = s.length;
  if (n == 0) return 0;

  let dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n);
    dp[i][i] = true;
  }

  let ans = 0;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (s[i] != s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i + 1 <= 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j]) {
        ans ++;
      }
    }
  }
  return ans;
}