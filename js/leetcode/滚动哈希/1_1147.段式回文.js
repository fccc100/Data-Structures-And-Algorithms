// 1147. 段式回文
// 你会得到一个字符串 text 。你应该把它分成 k 个子字符串 (subtext1, subtext2，…， subtextk) ，要求满足:

// subtexti 是 非空 字符串
// 所有子字符串的连接等于 text ( 即subtext1 + subtext2 + ... + subtextk == text )
// subtexti == subtextk - i + 1 表示所有 i 的有效值( 即 1 <= i <= k )
// 返回k可能最大值。

// 示例 1：

// 输入：text = "ghiabcdefhelloadamhelloabcdefghi"
// 输出：7
// 解释：我们可以把字符串拆分成 "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)"。
// 示例 2：

// 输入：text = "merchant"
// 输出：1
// 解释：我们可以把字符串拆分成 "(merchant)"。
// 示例 3：

// 输入：text = "antaprezatepzapreanta"
// 输出：11
// 解释：我们可以把字符串拆分成 "(a)(nt)(a)(pre)(za)(tpe)(za)(pre)(a)(nt)(a)"。

/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
  return _longestDecomposition(text, 0, text.length - 1);
};

// 求字符串text在[l, r]区间的最大段式回文个数
function _longestDecomposition(text, l, r) {
  if (l > r) return 0;

  for (let i = l, j = r; i < j; i++, j--) {
    if (equals(text, l, i, j, r)) {
      return 2 + _longestDecomposition(text, i + 1, j - 1);
    }
  }
  return 1;
}

function equals(text, l1, r1, l2, r2) {
  if (r1 - l1 != r2 - l2) {
    return false;
  }

  for (let i = l1, j = l2; i <= r1; i++, j++) {
    if (text[i] != text[j]) {
      return false;
    }
  }
  return true;
}

// 2.字符串哈希, 没有处理哈希冲突，冲突的几率非常小，应对一般的算法题可以通过，但是从逻辑上如果产生哈希冲突会得到错误的结果
var longestDecomposition = function(text) {
  return _longestDecomposition(text, 0, text.length - 1);
}

function _longestDecomposition(text, l, r) {
  if (l > r) return 0;

  let MOD = 1e9 + 7;
  let B = 26;
  let ACODE = 'a'.charCodeAt();

  let lHash = 0;
  let rHash = 0;
  let mul = 1;
  for (let i = l, j = r; i < j; i++, j--) {
    lHash = (lHash * B + text[i].charCodeAt() - ACODE) % MOD;
    rHash = ((text[j].charCodeAt() - ACODE) * mul + rHash) % MOD;

    if (lHash == rHash) {
      return 2 + _longestDecomposition(text, i + 1, j - 1);
    }

    mul = B * mul % MOD;
  }
  return 1;
}

// 3.
var longestDecomposition = function(text) {
  let n = text.length;
  let l = 0;
  let r = n - 1;
  let ls = '';
  let rs = '';
  let res = 0;
  while (l < r) {
    ls = ls + text[l];
    rs = text[r] + rs;

    if (ls == rs) {
      res += 2;
      ls = '';
      rs = '';
    }
    l++;
    r--;
  }
  return res + ((l == r || ls != '') ? 1 : 0);
}
