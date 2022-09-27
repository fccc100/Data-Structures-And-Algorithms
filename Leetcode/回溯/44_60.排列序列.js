// 60. 排列序列
// 给出集合 [1,2,3,...,n]，其所有元素共有 n! 种排列。

// 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// 给定 n 和 k，返回第 k 个排列。

// 示例 1：

// 输入：n = 3, k = 3
// 输出："213"
// 示例 2：

// 输入：n = 4, k = 9
// 输出："2314"
// 示例 3：

// 输入：n = 3, k = 1
// 输出："123"

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// 回溯挨个找，勉强过
var getPermutation = function (n, k) {
  let res = [];
  let used = Array(n + 1).fill(false);
  let cur = 0;

  // 使用全排列的思路，但是不找所有的排列，只找到第k个排列时就终止
  function dfs(n, path) {
    // 找到第k个排列了，终止
    if (cur == k) {

      return true;
    }

    // 与全排列方法一样
    if (path.length == n) {
      cur++;
      res.push([...path]);
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!used[i]) {
        used[i] = true;
        path.push(i);
        // 找到第k个排列了，跳出循环
        let f = dfs(n, path);
        if (f) break;
        used[i] = false;
        path.pop();
      }
    }
  }
  dfs(n, []);

  // res里最后一个就是第k个排列
  let path = res[res.length - 1];
  let str = ''
  for (let i = 0; i < path.length; i++) {
    str = str + path[i];
  }
  return str;
};