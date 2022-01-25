// 131. 分割回文串
// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

// 回文串 是正着读和反着读都一样的字符串。

// 示例 1：

// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]
function partition(s) {
  let res = [];
  if (!s) return res;
  function backtracking(s, startIndex, path) {
    if (startIndex == s.length - 1) {
      res.push(path);
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      subS += s[i];
      backtracking(s, i + 1, subS);
      subS = subS.slice(0, subS.length - 1);
    }
    return;
  }

  let path = [];
  backtracking(s, 0, path);
  return res;
}

function palindrome(s) {
  if (!s) return false;
  let l = 0;
  let r = s.length - 1;
  while(l < r) {
    if (s[l] != s[r]) {
      return false;
    }
  }
  return true;
}