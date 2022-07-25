// 6125. 相等行列对
// 给你一个下标从 0 开始、大小为 n x n 的整数矩阵 grid ，返回满足 Ri 行和 Cj 列相等的行列对 (Ri, Cj) 的数目。

// 如果行和列以相同的顺序包含相同的元素（即相等的数组），则认为二者是相等的。

// 示例 1：

// 输入：grid = [[3,2,1],[1,7,6],[2,7,7]]
// 输出：1
// 解释：存在一对相等行列对：
// - (第 2 行，第 1 列)：[2,7,7]
// 示例 2：

// 输入：grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
// 输出：3
// 解释：存在三对相等行列对：
// - (第 0 行，第 0 列)：[3,1,2,2]
// - (第 2 行, 第 2 列)：[2,4,2,2]
// - (第 3 行, 第 2 列)：[2,4,2,2]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let n = grid.length;

  let temp = Array(n);
  for (let i = 0; i < n; i++) {
    temp[i] = [];
  }

  for (let i = 0; i < n; i++) {
    let cur = [];
    for (let j = 0; j < n; j++) {
      cur.push(grid[j][i]);
    }
    temp[i] = cur;
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i].toString() == temp[j].toString()) {
        res++;
      }
    }
  }
  return res;
};