// 1392. 最长快乐前缀
// 「快乐前缀」 是在原字符串中既是 非空 前缀也是后缀（不包括原字符串自身）的字符串。

// 给你一个字符串 s，请你返回它的 最长快乐前缀。如果不存在满足题意的前缀，则返回一个空字符串 "" 。

// 暴力
function longestPrefix(s) {
  for (let i = s.length - 1; i >= 0; i--) {
    if (equals(s, 0, i - 1, s.length - i, s.length - 1)) {
      return s.substr(0, i);
    }
  }
  return '';
}

function equals(text, l1, l2, r1, r2) {
  if (l2 - l1 !== r2 - r1) {
    return false;
  }
  for (let i = l1, j = r1; i <= l2; i++, j++) {
    if (text[i] != text[j]) {
      return false;
    }
  }
  return true;
}

// 字符串哈希
function longestPrefix(s) {
  let mod = 1e9 + 7;
  function equals(text, l1, l2, r1, r2) {
    if (l2 - l1 !== r2 - r1) {
      return false;
    }
    for (let i = l1, j = r1; i <= l2; i++, j++) {
      if (text[i] != text[j]) {
        return false;
      }
    }
    return true;
  }

  let res = '';
  let lHash = 0;
  let rHash = 0;
  for (let i = 0; i < s.length - 1; i++) {
    lHash = lHash + (s[i].charCodeAt() - 'a'.charCodeAt()) % mod;
    rHash = ((s[s.length - i - 1].charCodeAt() - 'a'.charCodeAt()) + rHash) % mod;
    if (lHash == rHash && equals(s, 0, i, s.length - i - 1, s.length - 1)) {
      res = s.substr(0, i + 1);
    }
  }
  return res;
}