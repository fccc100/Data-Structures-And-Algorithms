// 剑指 Offer II 085. 生成匹配的括号
// 正整数 n 代表生成括号的对数，请设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 示例 1：
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

function generateParenthesis(n) {
  let res = [];
  function dfs(n, left, right, s) {
    if (s.length == n * 2) {
      res.push(s);
      return;
    }

    if (left < n) {
      dfs(n, left + 1, right, s + '(');
    }
    if (right < left) {
      dfs(n, left, right + 1, s + ')');
    }
  }

  dfs(n, 0, 0, '');
  return res;
}