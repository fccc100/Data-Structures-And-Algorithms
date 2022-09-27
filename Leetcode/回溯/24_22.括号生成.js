// 22. 括号生成
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 示例 1：
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

function generateParenthesis(n) {
  let res = [];
  function _generateParenthesis(n, left, right, s) {
    if (s.length == n * 2) {
      res.push(s);
      return;
    }

    if (left < n) {
      _generateParenthesis(n, left + 1, right, s + '(');
    }

    if (right < left) {
      _generateParenthesis(n, left, right + 1, s + ')');
    }
  }

  _generateParenthesis(n, 0, 0, '');
  return res;
}