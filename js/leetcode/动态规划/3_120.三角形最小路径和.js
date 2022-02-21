// 120. 三角形最小路径和
// 给定一个三角形 triangle ，找出自顶向下的最小路径和。

// 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

// 1.使用递归求解，时间复杂度O(2^n)
function minimumTotal(triangle) {
  function _minimumTotal(triangle, i, j) {
    if (i == triangle.length - 1) {
      return triangle[i][j];
    }

    return Math.min(_minimumTotal(triangle, i + 1, j), _minimumTotal(triangle, i + 1, j + 1)) + triangle[i][j];
  }

  return _minimumTotal(triangle, 0, 0);
}

// 2.使用记忆化搜索
function minimumTotal(triangle) {
  let n = triangle.length;
  let memo = Array(n);
  memo.fill(Array(n))
  function _minimumTotal(triangle, i, j) {
    if (i == triangle.length) {
      return 0;
    }

    if (memo[i][j] !== undefined) {
      return memo[i][j];
    }
    
    return memo[i][j] = Math.min(_minimumTotal(triangle, i + 1, j), _minimumTotal(triangle, i + 1, j + 1)) + triangle[i][j];
  }

  return _minimumTotal(triangle, 0, 0);
}


// 3.动态规划, dp数组从最后一行往前推，dp[i][j] = min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
function minimumTotal(triangle) {
  let n = triangle.length;
  let dp = Array(n);
  dp.fill(Array(n));
  dp[n - 1] = triangle[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return dp[0][0];
}

// 4.动态规划状态压缩, 由于计算dp[i][j]时只需要dp[i + 1][j] 和 dp[i + 1][j + 1]，所以只需要一维数组记录第i + 1行即可
// 将空间复杂度由O(n^2)压缩至O(n)
function minimumTotal(triangle) {
  let n = triangle.length;
  let dp = triangle[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
}