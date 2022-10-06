// 剑指 Offer II 036. 后缀表达式
// 根据 逆波兰表示法，求该后缀表达式的计算结果。

// 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

// 说明：

// 整数除法只保留整数部分。
// 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

// 示例 1：

// 输入：tokens = ["2","1","+","3","*"]
// 输出：9
// 解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
// 示例 2：

// 输入：tokens = ["4","13","5","/","+"]
// 输出：6
// 解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
// 示例 3：

// 输入：tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// 输出：22
// 解释：
// 该算式转化为常见的中缀算术表达式为：
//   ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!stack.length) {
      stack.push(tokens[i]);
    } else {
      if (!isNaN(tokens[i])) {
        stack.push(tokens[i]);
      } else {
        let v2 = stack.pop() * 1;
        let v1 = stack.pop() * 1;
        if (tokens[i] == '+') {
          stack.push(v1 + v2);
        } else if (tokens[i] == '-') {
          stack.push(v1 - v2);
        } else if (tokens[i] == '*') {
          stack.push(v1 * v2);
        } else if (tokens[i] == '/') {
          let v = v1 / v2;
          stack.push(v > 0 ? Math.floor(v) : Math.ceil(v));
        }
      }
    }
  }
  return stack[0];
};