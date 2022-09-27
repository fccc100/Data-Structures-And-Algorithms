// 931. 下降路径最小和
// 给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。

// 下降路径 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。具体来说，位置 (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1) 。

function minFallingPathSum(matrix) {
  let n = matrix.length;

  // 递归函数定义：matrix到达[i, j]的路径最小和
  function _minFallingPathSum(matrix, i, j) {
    if (i < 0) {
      return 0;
    }
    if (j < 0 || j >= matrix.length) {
      return Infinity;
    }
    return Math.min(_minFallingPathSum(matrix, i - 1, j - 1), _minFallingPathSum(matrix, i - 1, j), _minFallingPathSum(matrix, i - 1, j + 1)) + matrix[i][j];
  }

  let min = Infinity;
  for (let i = 0; i < n; i++) {
    min = Math.min(min, _minFallingPathSum(matrix, n - 1, i));
  }

  return min;
}

// 记忆化搜索
function minFallingPathSum(matrix) {
  let n = matrix.length;
  let memo = Array(n);
  for (let i = 0; i < n; i++) {
    memo[i] = Array(n);
  }

  function _minFallingPathSum(matrix, i, j) {
    if (i < 0) {
      return 0;
    }
    if (j < 0 || j >= n) {
      return Infinity;
    }

    if (memo[i][j] !== undefined) {
      return memo[i][j];
    }

    memo[i][j] = Math.min(_minFallingPathSum(matrix, i - 1, j - 1), _minFallingPathSum(matrix, i - 1, j), _minFallingPathSum(matrix, i - 1, j + 1)) + matrix[i][j];
    return memo[i][j];
  }

  let min = Infinity;
  for (let i = 0; i < n; i++) {
    min = Math.min(min, _minFallingPathSum(matrix, n - 1, i));
  }

  return min;
}

// 动态规划
function minFallingPathSum(matrix) {
  let n = matrix.length;
  let dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n);
    dp[0][i] = matrix[0][i];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = Math.min(j - 1 < 0 ? Infinity : dp[i - 1][j - 1], dp[i - 1][j], j + 1 >= n ? Infinity : dp[i - 1][j + 1]) + matrix[i][j];
    }
  }

  let min = Infinity;
  for (let i = 0; i < n; i++) {
    min = Math.min(dp[n - 1][i], min);
  }

  return min;
}

// 动态规划优化：原数组进行状态转移, 空间复杂度从O(n^2)降为O(1)
function minFallingPathSum(matrix) {
  let n = matrix.length;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = Math.min(j - 1 < 0 ? Infinity : matrix[i - 1][j - 1], matrix[i - 1][j], j + 1 >= n ? Infinity : matrix[i - 1][j + 1]) + matrix[i][j];
    }
  }

  let min = Infinity;
  for (let i = 0; i < n; i++) {
    min = Math.min(matrix[n - 1][i], min);
  }

  return min;
}