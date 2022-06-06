// 剑指 Offer II 017. 含有所有字符的最短字符串
// 给定两个字符串 s 和 t 。返回 s 中包含 t 的所有字符的最短子字符串。如果 s 中不存在符合条件的子字符串，则返回空字符串 "" 。

// 如果 s 中存在多个符合条件的子字符串，返回任意一个。

// 注意： 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。

// 示例 1：

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC" 
// 解释：最短子字符串 "BANC" 包含了字符串 t 的所有字符 'A'、'B'、'C'
// 示例 2：

// 输入：s = "a", t = "a"
// 输出："a"
// 示例 3：

// 输入：s = "a", t = "aa"
// 输出：""
// 解释：t 中两个字符 'a' 均应包含在 s 的子串中，因此没有符合条件的子字符串，返回空字符串。

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 先用map记录下t中每个字符出现的次数
  let tMap = new Map();
  for (let i = 0; i < t.length; i++) {
    if (tMap.has(t[i])) {
      tMap.set(t[i], tMap.get(t[i]) + 1);
    } else {
      tMap.set(t[i], 1);
    }
  }

  // 用另一个map记录当前滑动窗口中每个字符出现的次数
  let cntMap = new Map();

  // 滑动窗口开始
  let l = 0;
  let r = -1;
  let minLen = Infinity;
  let resL = -1;
  let resR = -1;
  // 右边界超出边界 终止
  while (r < s.length) {
    r++
    if (r < s.length && tMap.has(s[r])) {
      if (cntMap.has(s[r])) {
        cntMap.set(s[r], cntMap.get(s[r]) + 1);
      } else {
        cntMap.set(s[r], 1);
      }
    }

    // 移动左窗口
    // 如果t中的字符在当前窗口中都有了，左窗口右移
    while (check(tMap, cntMap) && l <= r) {
      if (r - l + 1 < minLen) {
        minLen = r - l + 1;
        resL = l;
        resR = r + 1;
      }
      if (cntMap.has(s[l])) {
        cntMap.set(s[l], cntMap.get(s[l]) - 1);
        if (cntMap.get(s[l]) == 0) {
          cntMap.delete(s[l]);
        }
      }
      l++;
    }
  }

  return resL == -1 ? '' : s.substring(resL, resR);
}

// 判断t中的每个字符是否都在当前窗口
function check(tMap, cntMap) {
  for (let entry of tMap) {
    let key = entry[0];
    let val = entry[1];

    if (!cntMap.has(key) || cntMap.get(key) < val) {
      return false;
    }
  }
  return true;
}