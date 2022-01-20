var combine = function (n, k) {
  debugger
  let res = [];
  function helper(n, k, startIndex, path) {
    if (path.length == k) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i <= n; i++) {
      path.push(i);
      helper(n, k, i + 1, path);
      path.pop();
    }
  }
  let path = [];
  helper(n, k, 1, path);
  return res;
};