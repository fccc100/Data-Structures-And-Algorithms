// 3. 无重复字符的最长子串
/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let max = 0;
  let r = -1;
  for (let i = 0; i < s.length; i++) {
    if (i > 0 ) {
      set.delete(s[i - 1]);
    }
    // 当找到一个r之后，下一次遍历在i+1到r这段区间是肯定不存在重复元素的，所以不用挨个遍历，时间复杂度为O(n)
    while(r + 1 < s.length && !set.has(s[r + 1])) {
      set.add(s[r + 1]);
      r++;
    }
    max = Math.max(max, r - i + 1);
  }
  return max;
};

// 动态规划
var lengthOfLongestSubstring = function(s) {
  if (!s.length) return 0;
  // dp[i]表示以i位置结尾的无重复字符最长长度
  let dp = Array(s.length);
  dp[0] = 1;

  let map = Array(256).fill(-1);
  map[s[0].charCodeAt()] = 0;

  let max = 1;
  for (let i = 1; i < s.length; i++) {
    dp[i] = Math.min(dp[i - 1] + 1, i - map[s[i].charCodeAt()]);

    map[s[i].charCodeAt()] = i;
    max = Math.max(max, dp[i]);
  }
  return max;
}

// 滚动数组优化
var lengthOfLongestSubstring = function(s) {
  if (!s.length) return 0;

  let map = Array(256).fill(-1);
  map[s[0].charCodeAt()] = 0;
  let pre = 1;
  let cur = 1;
  let max = 1;
  for (let i = 1; i < s.length; i++) {
    cur = Math.min(pre + 1, i - map[s[i].charCodeAt()]);
    map[s[i].charCodeAt()] = i;

    max = Math.max(max, cur);
    pre = cur;
  }
  return max;
}

// 322. 零钱兑换
var coinChange = function(coins, amount) {
  // dp[i]表示凑齐金额i需要的硬币数
  let dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
      }
    }
  }
  return dp[amount] < amount + 1 ? dp[amount] : -1;
};

// 1. 两数之和
var twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

// 562. 矩阵中最长的连续1线段
var longestLine = function(mat) {
  let m = mat.length;
  if (m == 0) return 0;
  let n = mat[0].length;
  // 横向直线dp
  let dp1 = Array(m);
  // 纵向直线dp
  let dp2 = Array(m);
  // 左下-右上 对角线dp
  let dp3 = Array(m);
  // 左上-右下 对角线dp
  let dp4 = Array(m);

  let ans = 0;
  for (let i = 0; i < m; i++) {
    dp1[i] = Array(n);
    dp2[i] = Array(n);
    dp3[i] = Array(n);
    dp4[i] = Array(n);
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 0) {
        dp1[i][j] = 0;
        dp2[i][j] = 0;
        dp3[i][j] = 0;
        dp4[i][j] = 0;
      } else {
        dp1[i][j] = j > 0 ? dp1[i][j - 1] + 1 : mat[i][j];
        dp2[i][j] = i > 0 ? dp2[i - 1][j] + 1 : mat[i][j];
        dp3[i][j] = (i > 0 && j + 1 < n) ? dp3[i - 1][j + 1] + 1 : mat[i][j];
        dp4[i][j] = (i > 0 && j > 0) ? dp4[i - 1][j - 1] + 1 : mat[i][j];
      }

      ans = Math.max(ans, dp1[i][j], dp2[i][j], dp3[i][j], dp4[i][j]);
    }
  }
  return ans;
}
