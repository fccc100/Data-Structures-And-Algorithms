// 132. 分割回文串 II
// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文。

// 返回符合要求的 最少分割次数 。

// 示例 1：

// 输入：s = "aab"
// 输出：1
// 解释：只需一次分割就可将 s 分割成 ["aa","b"] 这样两个回文子串。
// 示例 2：

// 输入：s = "a"
// 输出：0
// 示例 3：

// 输入：s = "ab"
// 输出：1

/**
 * @param {string} s
 * @return {number}
 */
// 动态规划, isPalindrome方法是O(n)的，所以整个函数是O(n ^ 3)
var minCut = function(s) {
  let n = s.length;
  if (!n) return 0;

  // dp[i]表示字符串s在[0, i]范围的最少分割次数
  let dp = Array(n).fill(n + 1);
  dp[0] = 0;

  for (let i = 1; i < n; i++) {
    // 如果[0, i]整个就是回文，一次都不用分割
    if (isPalindrome(s, 0, i)) {
      dp[i] = 0;
    } else {
      // 如果[j + 1, i]是回文，dp[i] = min(dp[i], dp[j] + 1)
      for (let j = 0; j < i; j++) {
        if (isPalindrome(s, j + 1, i)) {
          dp[i] = Math.min(dp[i], dp[j] + 1);
        }
      }
    }
  }
  return dp[n - 1];
};

// 判断字符串s在[i, j]范围是否回文串
function isPalindrome(s, i, j) {
  let l = i;
  let r = j;
  while(l < r) {
    if (s[l] != s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}


// 2.动态规划优化，提前算好s[i, j]范围是否回文，代替isPalindrome函数
var minCut = function(s) {
  let n = s.length;
  if (!n) return 0;

  // 提前计算s[i, j]是否是回文串
  let isPalindrome = Array(n);
  for (let i = 0; i < n; i++) {
    isPalindrome[i] = Array(n).fill(false);
    isPalindrome[i][i] = true;
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] != s[j]) {
        isPalindrome[i][j] = false;
      } else {
        if (j - i <= 2) {
          isPalindrome[i][j] = true;
        } else {
          isPalindrome[i][j] = isPalindrome[i + 1][j - 1];
        }
      }
    }
  }

  // dp[i]表示字符串s在[0, i]范围的最少分割次数
  let dp = Array(n).fill(n + 1);
  dp[0] = 0;

  for (let i = 1; i < n; i++) {
    // 如果[0, i]整个就是回文，一次都不用分割
    if (isPalindrome[0][i]) {
      dp[i] = 0;
    } else {
      // 如果[j + 1, i]是回文，dp[i] = min(dp[i], dp[j] + 1)
      for (let j = 0; j < i; j++) {
        if (isPalindrome[j + 1][i]) {
          dp[i] = Math.min(dp[i], dp[j] + 1);
        }
      }
    }
  }
  return dp[n - 1];
}