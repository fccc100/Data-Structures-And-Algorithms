// 回溯算法求组合
// 从1 - n的数中求长度为k的组合
function combine(n, k) {
  let res = [];

  // 递归函数，
  function backtracking(n, k, startIndex, path) {
    // path的长度已经等于收集的长度k了，将path放进结果集中
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