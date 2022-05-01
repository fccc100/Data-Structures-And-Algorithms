// 剑指 Offer II 018. 有效的回文
// 给定一个字符串 s ，验证 s 是否是 回文串 ，只考虑字母和数字字符，可以忽略字母的大小写。

// 本题中，将空字符串定义为有效的 回文串 。

// 示例 1:

// 输入: s = "A man, a plan, a canal: Panama"
// 输出: true
// 解释："amanaplanacanalpanama" 是回文串

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let l = 0;
  let r = s.length - 1;

  while(l < r) {
    let lCode = s[l].charCodeAt();
    let rCode = s[r].charCodeAt();
    if (!((lCode >= 97 && lCode <= 122) || (lCode >= 48 && lCode <= 57) || (lCode >= 65 && lCode <= 90))) {
      l++;
      continue;
    }
    if (!((rCode >= 97 && rCode <= 122) || (rCode >= 48 && rCode <= 57) || (rCode >= 65 && rCode <= 90))) {
      r--;
      continue;
    }
    if (s[l].toUpperCase() != s[r].toUpperCase()) {
      return false;
    } else {
      l++;
      r--;
    }
  }
  return true;
};