// 1289. 下降路径最小和  II
// 给你一个 n x n 整数矩阵 arr ，请你返回 非零偏移下降路径 数字和的最小值。

// 非零偏移下降路径 定义为：从 arr 数组中的每一行选择一个数字，且按顺序选出来的数字中，相邻数字不在原数组的同一列。

// 示例 1：

// 输入：arr = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：13
// 解释：
// 所有非零偏移下降路径包括：
// [1,5,9], [1,5,7], [1,6,7], [1,6,8],
// [2,4,8], [2,4,9], [2,6,7], [2,6,8],
// [3,4,8], [3,4,9], [3,5,7], [3,5,9]
// 下降路径中数字和最小的是 [1,5,7] ，所以答案是 13 。

var minFallingPathSum = function(grid) {
  let n = grid.length;
  let dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n);
  }
  dp[0] = grid[0];

  // 遍历行
  for (let i = 1; i < n; i++) {
    // 遍历列
    for (let j = 0; j < n; j++) {
      // 遍历前一列找到最小值
      let min = Infinity;
      for (let k = 0; k < n; k++) {
        if (j != k) {
          min = Math.min(min, dp[i - 1][k]);
        }
      }
      dp[i][j] = grid[i][j] + min;
    }
  }

  let min = dp[n - 1][0];
  for (let i = 0; i < n; i++) {
    min = Math.min(min, dp[n - 1][i]);
  }
  return min;
};

// 优化：找上一行非当前列的最小值：可以优化成保存前一行的最小值和次小值
// 如果前一行的值就是最小值，那就与次小值相加
var minFallingPathSum = function(grid) {
  let n = grid.length;
  let dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n);
  }
  dp[0] = grid[0];
  
  // 遍历行
  for (let i = 1; i < n; i++) {

    // 先找到前一行的最小值和次小值
    // 最小值
    let min1 = Infinity;
    // 次小值
    let min2 = Infinity;
    for (let j = 0; j < n; j++) {
      if (dp[i - 1][j] <= min1) {
        min2 = min1;
        min1 = dp[i - 1][j];
      } else if (dp[i - 1][j] < min2) {
        min2 = dp[i - 1][j];
      }
    }

    // 遍历列， dp[i] 等于当前值+最小值或者当前值+次小值
    for (let j = 0; j < n; j++) {
      if (dp[i - 1][j] != min1) {
        dp[i][j] = grid[i][j] + min1;
      } else {
        dp[i][j] = grid[i][j] + min2;
      }
    }
  }

  let min = dp[n - 1][0];
  for (let i = 0; i < n; i++) {
    min = Math.min(min, dp[n - 1][i]);
  }
  return min;
};

// 461.汉明距离
// 计算两个数字二进制值不同的位数
var hammingDistance = function(x, y) {
  // 分别获取x、y的二进制字符串
  let s1 = getBinary(x);
  let s2 = getBinary(y);

  // 求不同位数
  let res = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i]) {
      res++;
    }
  }
  return res;
};

function getBinary(n) {
  let res = '';
  // 用n 与 上 1 往左移对应位数就能知道这一位是0还是1
  for (let i = 31; i >= 0; i--) {
    res += (n & (1 << i)) == 0 ? '0' : '1';
  }
  return res;
}
