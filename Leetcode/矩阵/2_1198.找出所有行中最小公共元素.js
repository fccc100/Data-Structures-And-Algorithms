// 1198. 找出所有行中最小公共元素
// 给你一个 m x n 的矩阵 mat，其中每一行的元素均符合 严格递增 。请返回 所有行中的 最小公共元素 。

// 如果矩阵中没有这样的公共元素，就请返回 -1。

// 示例 1：

// 输入：mat = [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]
// 输出：5
// 示例 2:

// 输入：mat = [[1,2,3],[2,3,4],[2,3,5]]
// 输出： 2

/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
  let m = mat.length;
  if (m == 0) return -1;
  let n = mat[0].length;

  let set = new Set();
  for (let i = 0; i < m; i++) {
    let curSet = new Set();
    for (let j = 0; j < n; j++) {
      if (i == 0) {
        set.add(mat[i][j]);
      } else {
        if (set.has(mat[i][j])) {
          curSet.add(mat[i][j]);
        }
      }
    }
    if (i > 0) {
      set = curSet;
    }
  }

  let res = Infinity;
  for (let key of set) {
    res = Math.min(res, key);
  }
  return res == Infinity ? -1 : res;
};