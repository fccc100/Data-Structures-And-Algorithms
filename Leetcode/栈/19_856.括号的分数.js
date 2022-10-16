// 856. 括号的分数
// 给定一个平衡括号字符串 S，按下述规则计算该字符串的分数：

// () 得 1 分。
// AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
// (A) 得 2 * A 分，其中 A 是平衡括号字符串。
 
// 示例 1：

// 输入： "()"
// 输出： 1
// 示例 2：

// 输入： "(())"
// 输出： 2
// 示例 3：

// 输入： "()()"
// 输出： 2
// 示例 4：

// 输入： "(()(()))"
// 输出： 6

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
  let n = s.length;
  if (n == 0) return 0;
  if (n == 2) {
    return 1;
  }

  let stack = [];
  let matchIndex = -1;
  for (let i = 0; i < n; i++) {
    if (!stack.length) {
      stack.push(s[i]);
    } else {
      if (s[i] == '(') {
        stack.push(s[i]);
      } else {
        stack.pop();

        if (!stack.length) {
          matchIndex = i;
          break;
        }
      }
    }
  }
  if (matchIndex == n - 1) {
    return 2 * scoreOfParentheses(s.substring(1, n - 1));
  } else {
    return scoreOfParentheses(s.substring(0, matchIndex + 1)) + scoreOfParentheses(s.substring(matchIndex + 1, n));
  }
};