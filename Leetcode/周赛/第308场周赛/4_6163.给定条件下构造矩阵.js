// 6163. 给定条件下构造矩阵
// 给你一个 正 整数 k ，同时给你：

// 一个大小为 n 的二维整数数组 rowConditions ，其中 rowConditions[i] = [abovei, belowi] 和
// 一个大小为 m 的二维整数数组 colConditions ，其中 colConditions[i] = [lefti, righti] 。
// 两个数组里的整数都是 1 到 k 之间的数字。

// 你需要构造一个 k x k 的矩阵，1 到 k 每个数字需要 恰好出现一次 。剩余的数字都是 0 。

// 矩阵还需要满足以下条件：

// 对于所有 0 到 n - 1 之间的下标 i ，数字 abovei 所在的 行 必须在数字 belowi 所在行的上面。
// 对于所有 0 到 m - 1 之间的下标 i ，数字 lefti 所在的 列 必须在数字 righti 所在列的左边。
// 返回满足上述要求的 任意 矩阵。如果不存在答案，返回一个空的矩阵。

// 示例 1：

// 输入：k = 3, rowConditions = [[1,2],[3,2]], colConditions = [[2,1],[3,2]]
// 输出：[[3,0,0],[0,0,1],[0,2,0]]
// 解释：上图为一个符合所有条件的矩阵。
// 行要求如下：
// - 数字 1 在第 1 行，数字 2 在第 2 行，1 在 2 的上面。
// - 数字 3 在第 0 行，数字 2 在第 2 行，3 在 2 的上面。
// 列要求如下：
// - 数字 2 在第 1 列，数字 1 在第 2 列，2 在 1 的左边。
// - 数字 3 在第 0 列，数字 2 在第 1 列，3 在 2 的左边。
// 注意，可能有多种正确的答案。
// 示例 2：

// 输入：k = 3, rowConditions = [[1,2],[2,3],[3,1],[2,3]], colConditions = [[2,1]]
// 输出：[]
// 解释：由前两个条件可以得到 3 在 1 的下面，但第三个条件是 3 在 1 的上面。
// 没有符合条件的矩阵存在，所以我们返回空矩阵。

/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function (k, rowConditions, colConditions) {
  let res = Array(k);
  for (let i = 0; i < res.length; i++) {
    res[i] = Array(k).fill(0);
  }

  // 使用拓扑排序生成数字放入的序列
  let rowRes = build(k, rowConditions);
  let colRes = build(k, colConditions);
  
  if (!rowRes || !colRes) return [];
  if (rowRes.length < k || colRes.length < k) return [];

  let rowIndex = Array(k + 1);
  let colIndex = Array(k + 1);

  // 生成行索引和列索引
  for (let i = 0; i < rowRes.length; i++) {
    rowIndex[rowRes[i]] = i;
  }
  for (let i = 0; i < colRes.length; i++) {
    colIndex[colRes[i]] = i;
  }

  for (let i = 1; i <= k; i++) {
    res[rowIndex[i]][colIndex[i]] = i;
  }

  return res;
};

function build(k, edges) {
  // 拓扑排序
  let graph = Array(k + 1);
  let degree = Array(k + 1).fill(0);
  for (let i = 0; i <= k; i++) {
    graph[i] = new Set();
  }

  for (let i = 0; i < edges.length; i++) {
    if (!graph[edges[i][0]].has(edges[i][1])) {
      degree[edges[i][1]]++;
    }

    graph[edges[i][0]].add(edges[i][1]);
  }

  let queue = [];
  let res = [];
  for (let i = 1; i < degree.length; i++) {
    if (degree[i] == 0) {
      queue.push(i);
      res.push(i)
    }
  }
  
  if (!queue.length) {
    return false;
  }

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let cur = queue.shift();

      for (let w of graph[cur]) {
        degree[w]--;

        if (degree[w] == 0) {
          res.push(w);
          queue.push(w);
        }
      }
    }
  }
  return res;
}