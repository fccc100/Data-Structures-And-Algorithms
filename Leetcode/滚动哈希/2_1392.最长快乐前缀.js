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
  let n = s.length;

  let prefixHash = 0;
  let suffixHash = 0;

  const BASE = 26;
  const MOD = 1000000007;
  let mul = 1;
  let happyIndex = 0;
  for (let i = 1; i < n; i++) {
    prefixHash = (prefixHash * BASE + (s[i - 1].charCodeAt() - 'a'.charCodeAt())) % MOD;
    suffixHash = (suffixHash + (s[n - i].charCodeAt() - 'a'.charCodeAt()) * mul) % MOD;

    if (prefixHash == suffixHash) {
      happyIndex = i;
    }
    mul = mul * BASE % MOD;
  }
  return s.substring(0, happyIndex);
}