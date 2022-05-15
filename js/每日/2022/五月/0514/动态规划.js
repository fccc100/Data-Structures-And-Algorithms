/**
 * 0514
 */
// 1746. 经过一次操作后的最大子数组和
var maxSumAfterOperation = function(nums) {
  let dp = Array(nums.length);
  dp[0] = Array(2);
  dp[0][0] = nums[0];
  dp[0][1] = nums[0] * nums[0];

  let ans = dp[0][1];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Array(2);
    dp[i][0] = Math.max(dp[i - 1][0] + nums[i], nums[i]);
    dp[i][1] = Math.max(dp[i - 1][1] + nums[i], dp[i - 1][0] + nums[i] * nums[i], nums[i] * nums[i]);

    ans = Math.max(ans, dp[i][1]);
  }
  return ans;
}

// 1230. 抛掷硬币
var probabilityOfHeads = function(prob, target) {
  let n = prob.length;
  if (n == 0) return 0;
  let dp = Array(n + 1);
  dp[0] = Array(target + 1).fill(0);
  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    dp[i] = Array(target + 1).fill(0);
    dp[i][0] = dp[i - 1][0] * (1 - prob[i - 1]);
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      dp[i][j] = dp[i - 1][j] * (1 - prob[i - 1]) + dp[i - 1][j - 1] * prob[i - 1]; 
    }
  }
  return dp[n][target];
};

/**
 * 0515
 */
// 1143. 最长公共子序列
var longestCommonSubsequence = function(text1, text2) {
  let m = text1.length;
  let n = text2.length;
  let dp = Array(m);
  dp[0] = Array(n);
  dp[0][0] = text1[0] == text2[0] ? 1 : 0;
  for (let i = 1; i < m; i++) {
    dp[i] = Array(n);
    dp[i][0] = text1[i] == text2[0] ? 1 : dp[i - 1][0];
  }
  for (let i = 1; i < n; i++) {
    dp[0][i] = text1[0] == text2[i] ? 1 : dp[0][i - 1];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = text1[i] == text2[j] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
}

// 多开一个空间
var longestCommonSubsequence = function(text1, text2) {
  let m = text1.length;
  let n = text2.length;
  let dp = Array(m + 1);
  dp[0] = Array(n + 1).fill(0);

  for (let i = 1; i <= m; i++) {
    dp[i] = Array(n + 1).fill(0);
    for (let j = 1; j <= n; j++) {
      dp[i][j] = text1[i - 1] == text2[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
}

// 1035. 不相交的线
var maxUncrossedLines = function(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let dp = Array(m);
  dp[0] = Array(n);
  dp[0][0] = nums1[0] == nums2[0] ? 1 : 0;
  for (let i = 1; i < m; i++) {
    dp[i] = Array(n);
    dp[i][0] = nums1[i] == nums2[0] ? 1 : dp[i - 1][0];
  }
  for (let i = 1; i < n; i++) {
    dp[0][i] = nums1[0] == nums2[i] ? 1 : dp[0][i - 1];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = nums1[i] == nums2[j] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
};

// 多开一个空间
var maxUncrossedLines = function(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let dp = Array(m + 1);
  dp[0] = Array(n + 1).fill(0);

  for (let i = 1; i <= m; i++) {
    dp[i] = Array(n + 1).fill(0);
    for (let j = 1; j <= n; j++) {
      dp[i][j] = nums1[i - 1] == nums2[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
};

// 712. 两个字符串的最小ASCII删除和
var minimumDeleteSum = function(s1, s2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < s1.length; i++) {
    sum1 += s1[i].charCodeAt();
  }
  for (let i = 0; i < s2.length; i++) {
    sum2 += s2[i].charCodeAt();
  }

  let dp = Array(s1.length + 1);
  for (let i = 0; i <= s1.length; i++) {
    dp[i] = Array(s2.length + 1).fill(0);
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + s1[i - 1].charCodeAt();
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return sum1 + sum2 - 2 * dp[s1.length][s2.length];
};

// 300. 最长递增子序列
var lengthOfLIS = function(nums) {
  let n = nums.length;
  if (n == 0) return 0;

  let dp = Array(n).fill(1);
  dp[0] = 1;
  let max = dp[0];
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        max = Math.max(max, dp[i]);
      }
    }
  }
  return max;
}