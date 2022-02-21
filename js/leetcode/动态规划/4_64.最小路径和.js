// 64. 最小路径和
// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

// 1.使用递归求解
function minPathSum(grid) {

  // 递归函数，返回从i， j处到达右下角的路径最小和
  function _minPathSum(grid, i, j) {

    // 到达右下角的点，路径最小和为该点本身
    if (i >= grid.length - 1 && j >= grid[0].length - 1) {
      return grid[i][j];
    }

    // i到达最后一行，只能往右走
    if (i >= grid.length - 1) {
      return _minPathSum(grid, i, j + 1) + grid[i][j];
    }

    // j到达最后一列，只能往下走
    if (j >= grid[0].length - 1) {
      return _minPathSum(grid, i + 1, j) + grid[i][j];
    }

    // 从i，j + 1 / i + 1, j处继续求最小值
    return Math.min(_minPathSum(grid, i, j + 1), _minPathSum(grid, i + 1, j)) + grid[i][j];
  }

  return _minPathSum(grid, 0, 0);
}

// 2.使用动态规划
function minPathSum(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
  }

  // 不能使用这种方式因为fill方法填充的数组引用了同一个
  // let dp = Array(m);
  // dp.fill([]);

  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
}