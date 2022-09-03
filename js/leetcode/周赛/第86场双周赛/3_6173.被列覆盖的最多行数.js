// 6173. 被列覆盖的最多行数
// 给你一个下标从 0 开始的 m x n 二进制矩阵 mat 和一个整数 cols ，表示你需要选出的列数。

// 如果一行中，所有的 1 都被你选中的列所覆盖，那么我们称这一行 被覆盖 了。

// 请你返回在选择 cols 列的情况下，被覆盖 的行数 最大 为多少。

// 示例 1：

// 输入：mat = [[0,0,0],[1,0,1],[0,1,1],[0,0,1]], cols = 2
// 输出：3
// 解释：
// 如上图所示，覆盖 3 行的一种可行办法是选择第 0 和第 2 列。
// 可以看出，不存在大于 3 行被覆盖的方案，所以我们返回 3 。
// 示例 2：

// 输入：mat = [[1],[0]], cols = 1
// 输出：2
// 解释：
// 选择唯一的一列，两行都被覆盖了，原因是整个矩阵都被覆盖了。
// 所以我们返回 2 。

/**
 * @param {number[][]} mat
 * @param {number} cols
 * @return {number}
 */
// 数据量很小，先求出所有选择的组合，再求解
var maximumRows = function (mat, cols) {
  let m = mat.length;
  let n = mat[0].length;

  let map = Array(m);
  for (let i = 0; i < m; i++) {
    map[i] = new Set();
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 1) {
        map[i].add(j);
      }
    }
  }

  let combineRes = combine(n, cols);

  let res = 0;
  for (let i = 0; i < combineRes.length; i++) {
    let cur = 0;
    for (let k = 0; k < m; k++) {
      let allExist = true;
      let oneCount = 0;
      for (let j = 0; j < combineRes[i].length; j++) {

        if (mat[k][combineRes[i][j]] == 1) {
          oneCount++;
        }

      }
      if (oneCount >= map[k].size) {
        cur++;
      }

    }

    res = Math.max(res, cur);
  }
  return res;
};

var combine = function (n, k) {
  let res = [];

  function __combine(n, k, index, path) {
    if (path.length == k) {
      res.push([...path]);
      return;
    }

    for (let i = index; i <= n; i++) {
      path.push(i);
      __combine(n, k, i + 1, path);
      path.pop();
    }
  }
  __combine(n, k, 0, []);
  return res;
};