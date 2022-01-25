// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 你可以按 任何顺序 返回答案。

function combine(n, k) {
  debugger
  let res = [];
  function backtracking(n, k, startIndex, path) {
    if (path.length == k) {
      res.push([...path]);
      return;
    }

    for (let i = startIndex; i <= n; i++) {
      path.push(i);
      backtracking(n, k, i + 1, path);
      path.pop();
    }

    return;
  }

  let path = [];
  backtracking(n, k, 1, path);
  return res;
}