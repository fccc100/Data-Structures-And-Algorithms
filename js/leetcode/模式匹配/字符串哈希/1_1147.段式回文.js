// 1147. 段式回文
// 你会得到一个字符串 text 。你应该把它分成 k 个子字符串 (subtext1, subtext2，…， subtextk) ，要求满足:

// subtexti 是非空字符串
// 所有子字符串的连接等于 text ( 即subtext1 + subtext2 + ... + subtextk == text )
// subtexti == subtextk - i + 1 表示所有 i 的有效值( 即 1 <= i <= k )
// 返回k可能最大值。
 
// 示例 1：
// 输入：text = "ghiabcdefhelloadamhelloabcdefghi"
// 输出：7
// 解释：我们可以把字符串拆分成 "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)"。

// 暴力算法
function longestDecomposition(text) {
  return _longestDecomposition(text, 0, text.length - 1);
}

// 求text在[l, r]区间的的k
function _longestDecomposition(text, l, r) {
  if (l > r) return 0;
  for (let i = l, j = r; i < j; i++, j--) {
    if (equals(text, l, i, j, r)) {
      return 2 + _longestDecomposition(text, i + 1, j - 1);
    }
  }
  return 1;
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
function longestDecomposition(text) {
  let mod = 1e9 + 7;
  function _longestDecomposition(text, l, r) {
    if (l > r) return 0;
    let lHash = 0;
    let rHash = 0;
    for (let i = l, j = r; i < r; i++, j--) {
      lHash = (lHash * 26 + (text[i].charCodeAt() - 'a'.charCodeAt())) % mod;
      rHash = ((text[j].charCodeAt() - 'a'.charCodeAt()) * Math.pow(26, r - j) + rHash) % mod;
      if (lHash == rHash && equals(text, l, i, j, r)) {
        return 2 + _longestDecomposition(text, i + 1, j - 1);
      }
    }

    return 1;
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
  return _longestDecomposition(text, 0, text.length - 1);
}