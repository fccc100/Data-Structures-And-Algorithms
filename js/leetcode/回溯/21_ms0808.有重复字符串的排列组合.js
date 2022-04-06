// 面试题 08.08. 有重复字符串的排列组合
// 有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。

// 示例1:

//  输入：S = "qqe"
//  输出：["eqq","qeq","qqe"]

function permutation(S) {
  let res = [];
  let used = [];
  function _permutation(s, index, path) {
    if (path.length == s.length) {
      res.push(path);
      return;
    }

    for (let i = 0; i < s.length; i++) {
      if (i > 0 && s[i] == s[i - 1] && !used[i - 1]) continue;
      if (!used[i]) {
        used[i] = true;
        _permutation(s, i + 1, path + s[i]);
        used[i] = false;
      }
    }
  }

  let temp = [];
  for (let i = 0; i < S.length; i++) {
    temp.push(S[i]);
  }

  temp.sort((a, b) => a.charCodeAt() - b.charCodeAt());
  _permutation(temp, 0, '');
  return res;
}