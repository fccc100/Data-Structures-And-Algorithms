// 17. 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 示例 1：
// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

function letterCombinations(digits) {
  const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let res = [];
  function _letterCombinations(digits, index, s) {
    if (s.length == digits.length) {
      res.push(s);
      return;
    }
    let letters = map[digits[index]];

    for (let i = 0; i < letters.length; i++) {
      _letterCombinations(digits, index + 1, s + letters[i]);
    }
  }

  if (!digits.length) return res;

  _letterCombinations(digits, 0, '');
  return res;
}