// 剑指 Offer 38. 字符串的排列
// 输入一个字符串，打印出该字符串中字符的所有排列。

// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

// 示例:
// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]

function permutation(s) {
  let res = [];
  let used = [];
  function _permutation(s, index, path) {
    if (path.length == s.length) {
      if (!res.includes(path)) {
        res.push(path);
      }
      return;
    }

    for (let i = 0; i < s.length; i++) {
      if (!used[i]) {
        used[i] = true;
        _permutation(s, i + 1, path + s[i]);
        used[i] = false;
      }
    }
  }

  _permutation(s, 0, '');
  return res;
}