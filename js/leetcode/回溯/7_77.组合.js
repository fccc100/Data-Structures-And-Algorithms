// 77. 组合
// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 你可以按 任何顺序 返回答案。

// 示例 1：
// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

function combine(n, k) {
  let res = [];
  function _combine(n, k, index, path) {
    if (path.length == k) {
      res.push([...path]);
      return;
    }

    for (let i = index; i <= n; i++) {
      path.push(i);
      _combine(n, k, i + 1, path);
      path.pop();
    }
  }

  _combine(n, k, 1, []);
  return res;
}

// 剪枝
function combine(n, k) {
  let res = [];
  function _combine(n, k, index, path) {
    if (k == path.length) {
      res.push([...path]);
      return;
    }

    // 还需要放 k-path.length 个元素
    for (let i = index; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      _combine(n, k, i + 1, path);
      path.pop();
    }
  }

  _combine(n, k, 1, []);
  return res;
}