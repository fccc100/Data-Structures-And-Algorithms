// 576. 出界的路径数
// 给你一个大小为 m x n 的网格和一个球。球的起始坐标为 [startRow, startColumn] 。
// 你可以将球移到在四个方向上相邻的单元格内（可以穿过网格边界到达网格之外）。你 最多 可以移动 maxMove 次球。

// 给你五个整数 m、n、maxMove、startRow 以及 startColumn ，找出并返回可以将球移出边界的路径数量。
// 因为答案可能非常大，返回对 109 + 7 取余 后的结果。

// 示例 1：
// 输入：m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
// 输出：6
// 示例 2：

// 输入：m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
// 输出：12

/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
// 递归，超时
var findPaths = function(m, n, maxMove, startRow, startColumn) {
  function __findPaths(m, n, maxMove, startRow, startColumn) {
    if (startRow < 0 || startColumn < 0 || startRow >= m || startColumn >= n) {
      return 1;
    }
    if (maxMove == 0) {
      return 0;
    }

    let res = 0;
    let t = __findPaths(m, n, maxMove - 1, startRow - 1, startColumn);
    let r = __findPaths(m, n, maxMove - 1, startRow, startColumn + 1);
    let b = __findPaths(m, n, maxMove - 1, startRow + 1, startColumn);
    let l = __findPaths(m, n, maxMove - 1, startRow, startColumn - 1);
    res = t + r + b + l;
    return res;
  }

  return __findPaths(m, n, maxMove, startRow, startColumn);
};

// 记忆化搜索
var findPaths = function(m, n, maxMove, startRow, startColumn) {
  let MOD = 1000000007;
  let memo = Array(m);
  for (let i = 0; i < m; i++) {
    memo[i] = Array(n);
    for (let j = 0; j < n; j++) {
      memo[i][j] = Array(maxMove + 1);
    }
  }
  function __findPaths(m, n, maxMove, startRow, startColumn) {
    if (startRow < 0 || startColumn < 0 || startRow >= m || startColumn >= n) {
      return 1;
    }
    if (maxMove == 0) {
      return 0;
    }

    if (memo[startRow][startColumn][maxMove] !== undefined) {
      return memo[startRow][startColumn][maxMove];
    }

    let res = 0;
    let t = __findPaths(m, n, maxMove - 1, startRow - 1, startColumn);
    let r = __findPaths(m, n, maxMove - 1, startRow, startColumn + 1);
    let b = __findPaths(m, n, maxMove - 1, startRow + 1, startColumn);
    let l = __findPaths(m, n, maxMove - 1, startRow, startColumn - 1);
    memo[startRow][startColumn][maxMove] = res = ((t % MOD) + (r % MOD) + (b % MOD) + (l % MOD)) % MOD;
    return memo[startRow][startColumn][maxMove];
  }

  return __findPaths(m, n, maxMove, startRow, startColumn);
};