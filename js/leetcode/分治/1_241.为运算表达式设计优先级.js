// 241. 为运算表达式设计优先级
// 给你一个由数字和运算符组成的字符串 expression ，按不同优先级组合数字和运算符，计算并返回所有可能组合的结果。
// 你可以 按任意顺序 返回答案。

// 生成的测试用例满足其对应输出值符合 32 位整数范围，不同结果的数量不超过 104 。

// 示例 1：

// 输入：expression = "2-1-1"
// 输出：[0,2]
// 解释：
// ((2-1)-1) = 0 
// (2-(1-1)) = 2
// 示例 2：

// 输入：expression = "2*3-4*5"
// 输出：[-34,-14,-10,-10,10]
// 解释：
// (2*(3-(4*5))) = -34 
// ((2*3)-(4*5)) = -14 
// ((2*(3-4))*5) = -10 
// (2*((3-4)*5)) = -10 
// (((2*3)-4)*5) = 10

/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  let res = [];
  let len = expression.length;

  // 找到第一个运算符
  let start;
  for (start = 0; start < len; start++) {
    if (expression[start] == '+' || expression[start] == '-' || expression[start] == '*') {
      break;
    }
  }

  if (start == len) {
    res.push(Number(expression));
  }

  // 从第一个运算符开始遍历
  for (let i = start; i < len; i++) {
    // 数字跳过，只关注运算符
    if (!isNaN(expression[i])) {
      continue;
    }

    let operator = expression[i];
    let leftRes = diffWaysToCompute(expression.substring(0, i));
    let rightRes = diffWaysToCompute(expression.substring(i + 1, len));

    for (let i = 0; i < leftRes.length; i++) {
      for (let j = 0; j < rightRes.length; j++) {
        if (operator == '+') {
          res.push(leftRes[i] + rightRes[j]);
        } else if (operator == '-') {
          res.push(leftRes[i] - rightRes[j]);
        } else if (operator == '*') {
          res.push(leftRes[i] * rightRes[j]);
        }
      }
    }
  }
  return res;
};


// 分治
var diffWaysToCompute = function (expression) {
  let res = [];
  let len = expression.length;

  // 找到第一个运算符
  let start;
  for (start = 0; start < len; start++) {
    if (isNaN(expression[start])) {
      break;
    }
  }

  // 没有运算符了，整个expression就是一个数字
  if (start >= len) {
    res.push(Number(expression));
  }

  // 从第一个运算符开始遍历
  for (let i = start; i < len; i++) {
    if (!isNaN(expression[i])) {
      continue;
    }

    // 当前操作符
    let operator = expression[i];
    // 求左边子expression的结果集
    let leftRes = diffWaysToCompute(expression.substring(0, i));
    // 求右边子expression的结果集
    let rightRes = diffWaysToCompute(expression.substring(i + 1, len));

    // 左右两边的结果交叉求最终结果
    for (let i = 0; i < leftRes.length; i++) {
      for (let j = 0; j < rightRes.length; j++) {
        if (operator == '+') {
          res.push(leftRes[i] + rightRes[j]);
        } else if (operator == '-') {
          res.push(leftRes[i] - rightRes[j]);
        } else if (operator == '*') {
          res.push(leftRes[i] * rightRes[j]);
        }
      }
    }
  }

  return res;
}