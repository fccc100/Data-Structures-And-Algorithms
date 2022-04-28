// 剑指 Offer 48. 最长不含重复字符的子字符串
// 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let j = i;
    while(true) {
      if (j >= s.length || set.has(s[j])) {
        res = Math.max(res, j - i);
        set.clear();
        break;
      } else {
        set.add(s[j]);
        j++;
      }
    }
  }

  return res;
};

var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let n = s.length;
  
  let r = -1;
  let res = 0;
  // 从第一个字符开始往后遍历
  for (let i = 0; i < n; i++) {
    // 除第一个字符外，左指针每移动一位就把移出的这位字符从set中删除
    if (i > 0) {
      set.delete(s.charAt(i - 1));
    }

    // 左指针每来到一个新字符，右指针就要开始往后试探，如果后一个字符不存在set中，就往后移
    while(r + 1 < n && !set.has(s.charAt(r + 1))) {
      set.add(s.charAt(r + 1));
      r++;
    }

    // 同时记录每轮得到的字符串长度最大值
    res = Math.max(res, r - i + 1);
  }
  return res;
};

