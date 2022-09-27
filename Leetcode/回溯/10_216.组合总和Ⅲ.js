// 216. 组合总和 III
// 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：

// 只使用数字1到9
// 每个数字 最多使用一次 
// 返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

// 示例 1:
// 输入: k = 3, n = 7
// 输出: [[1,2,4]]
// 解释:
// 1 + 2 + 4 = 7
// 没有其他符合的组合了。

function combinationSum3(k, n) {
  let res = [];
  function _combinationSum3(k, n, index, path) {
    if (path.length == k) {
      if (n == 0) {
        res.push([...path]);
      }
      return;
    }
    if (n < 0) return;

    for (let i = index; i <= 9; i++) {
      path.push(i);
      _combinationSum3(k, n - i, i + 1, path);
      path.pop();
    }
  }

  _combinationSum3(k, n, 1, []);
  return res;
}