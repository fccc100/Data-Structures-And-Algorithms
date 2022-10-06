// 面试题 08.07. 无重复字符串的排列组合
// 无重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。

// 示例1:

//  输入：S = "qwe"
//  输出：["qwe", "qew", "wqe", "weq", "ewq", "eqw"]

function permutation(S) {
  let res = [];
  let used = [];
  function _permutation(s, index, path) {
    if (path.length == s.length) {
      res.push(path);
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

  _permutation(S, 0, '');
  return res;
}