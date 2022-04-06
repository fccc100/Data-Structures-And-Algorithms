// 面试题 08.09. 括号
// 括号。设计一种算法，打印n对括号的所有合法的（例如，开闭一一对应）组合。

// 说明：解集不能包含重复的子集。

// 例如，给出 n = 3，生成结果为：
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

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