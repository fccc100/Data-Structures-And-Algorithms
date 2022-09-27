// 562. 矩阵中最长的连续1线段
var longestLine = function(mat) {
  let m = mat.length;
  if (m == 0) return 0;
  let n = mat[0].length;

  // 横向dp
  let dp1 = Array(m);
  // 纵向dp
  let dp2 = Array(m);
  // 左上 - 右下对角线dp
  let dp3 = Array(m);
  // 右上 - 左下对角线dp
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
        dp1[i][j] = j > 0 ? dp1[i][j - 1] + 1 : 1;
        dp2[i][j] = i > 0 ? dp2[i - 1][j] + 1 : 1;
        dp3[i][j] = i > 0 && j > 0 ? dp3[i - 1][j - 1] + 1 : 1;
        dp4[i][j] = i > 0 && j + 1 <= n - 1 ? dp4[i - 1][j + 1] + 1 : 1;
      }
      ans = Math.max(ans, dp1[i][j], dp2[i][j], dp3[i][j], dp4[i][j])
    }
  }
  return ans;
}

/**
 * 0521
 */
//  343. 整数拆分
var integerBreak = function(n) {
  // dp[i]表示整数i能拆分的最大乘积
  let dp = Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  // 遍历整数
  for (let i = 2; i <= n; i++) {
    // 拆分成j * (i - j)
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }
  return dp[n];
}

// 238. 除自身以外数组的乘积
var productExceptSelf = function(nums) {
  let n = nums.length;
  if (n == 0) return 0;
  let left = Array(n);
  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  let right = Array(n);
  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  let res = Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = left[i] * right[i];
  }
  return res;
};

// 优化O(1)空间复杂度
var productExceptSelf = function(nums) {
  let n = nums.length;

  // 省略左/右数组，直接在结果数组中操作
  let ans = Array(n);
  ans[0] = 1;
  for (let i = 1; i < n; i++) {
    ans[i] = nums[i - 1] * ans[i - 1];
  }

  let r = 1;
  for (let i = n - 1; i >= 0; i--) {
    ans[i] = ans[i] * r;
    r = r * nums[i];
  }
  return ans;
}

var groupAnagrams = function(strs) {
  let map = {
    a: 2,
    b: 3,
    c: 5,
    d: 7,
    e: 11,
    f: 13,
    g: 17,
    h: 19,
    i: 23,
    j: 29,
    k: 31,
    l: 37,
    m: 41,
    n: 43,
    o: 47,
    p: 53,
    q: 59,
    r: 61,
    s: 67,
    t: 71,
    u: 73,
    v: 79,
    w: 83,
    x: 89,
    y: 91,
    z: 97
  }
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let sum = 0;
    for (let j = 0; j < strs[i].length; j++) {
      sum *= map[strs[i][j]];
    }
    if (map.has(sum)) {
      map.get(sum).push(strs[i]);
    } else {
      map.set(sum, [strs[i]]);
    }
  }
  let res = [];
  for (let val of map.values()) {
    res.push(val);
  }
  return res;
}