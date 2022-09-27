// 22. 括号生成
var generateParenthesis = function(n) {
  let res = [];
  function __generateParenthesis(n, left, right, s) {
    if (s.length == 2 * n) {
      res.push(s);
      return;
    }

    if (left < n) {
      __generateParenthesis(n, left + 1, right, s + '(');
    }

    if (right < left) {
      __generateParenthesis(n, left, right + 1, s + ')');
    }
  }

  __generateParenthesis(n, 0, 0, '');
  return res;
}

// 415. 字符串相加
var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let res = '';
  let mod = 0;
  while(i >= 0 || j >= 0 || mod != 0) {
    let x = i >= 0 ? Number(num1[i]) : 0;
    let y = j >= 0 ? Number(num2[j]) : 0;
    let sum = x + y + mod;

    res = String(sum % 10) + res;
    mod = Math.floor(sum / 10);
    i--;
    j--;
  }
  return res;
};