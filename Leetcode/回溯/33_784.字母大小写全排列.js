// 784. 字母大小写全排列
// 给定一个字符串 s ，通过将字符串 s 中的每个字母转变大小写，我们可以获得一个新的字符串。

// 返回 所有可能得到的字符串集合 。以 任意顺序 返回输出。

// 示例 1：
// 输入：s = "a1b2"
// 输出：["a1b2", "a1B2", "A1b2", "A1B2"]

function letterCasePermutation(s) {
  let res = [];
  function dfs(s, index, cur) {
    if (index == s.length) {
      if (cur.length == s.length) {
        res.push(cur);
      }
      return;
    }

    if (isNaN(s[index])) {
      // 转大写
      dfs(s, index + 1, cur + s[index].toUpperCase());

      // 转小写
      dfs(s, index + 1, cur + s[index].toLowerCase());
    } else {
      dfs(s, index + 1, cur + s[index]);
    }
  }

  dfs(s, 0, '');
  return res;
}