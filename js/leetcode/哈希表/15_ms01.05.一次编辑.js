// 面试题 01.05. 一次编辑
// 字符串有三种编辑操作:插入一个英文字符、删除一个英文字符或者替换一个英文字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。

// 示例 1:

// 输入: 
// first = "pale"
// second = "ple"
// 输出: True

// 示例 2:

// 输入: 
// first = "pales"
// second = "pal"
// 输出: False

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
// 递归
var oneEditAway = function (first, second) {

  function tryEdit(s1, s2, index1, index2, editCnt) {
    if (index1 < 0 && index2 < 0) {
      return true;
    }
    if (index1 < 0 && editCnt == 0) {
      return false;
    }
    if (index2 < 0 && editCnt == 0) {
      return false;
    }
    if (s1[index1] != s2[index2] && editCnt == 0) {
      return false;
    }

    if (s1[index1] == s2[index2]) {
      return tryEdit(s1, s2, index1 - 1, index2 - 1, editCnt);
    } else {
      return tryEdit(s1, s2, index1 - 1, index2, editCnt - 1) || tryEdit(s1, s2, index1, index2 - 1, editCnt - 1) || tryEdit(s1, s2, index1 - 1, index2 - 1, editCnt - 1);
    }
  }

  return tryEdit(first, second, first.length - 1, second.length - 1, 1);
};

// 2.记忆化搜索
var oneEditAway = function (first, second) {
  let m = first.length;
  let n = second.length;
  
  let memo = Array(m + 1);
  for (let i = 0; i <= m; i++) {
    memo[i] = Array(n + 1);
  }
  function tryEdit(s1, s2, index1, index2, editCnt) {
    
    if (index1 < 0 && index2 < 0) {
      return true;
    }
    if (index1 < 0 && editCnt == 0) {
      return false;
    }
    if (index2 < 0 && editCnt == 0) {
      return false;
    }
    if (s1[index1] != s2[index2] && editCnt == 0) {
      return false;
    }

    if (memo[index1 + 1][index2 + 1] !== undefined) {
      return memo[index1][index2];
    }

    if (s1[index1] == s2[index2]) {
      return memo[index1 + 1][index2 + 1] = tryEdit(s1, s2, index1 - 1, index2 - 1, editCnt);
    } else {
      return memo[index1 + 1][index2 + 1] = tryEdit(s1, s2, index1 - 1, index2, editCnt - 1) || tryEdit(s1, s2, index1, index2 - 1, editCnt - 1) || tryEdit(s1, s2, index1 - 1, index2 - 1, editCnt - 1);
    }
  }

  return tryEdit(first, second, first.length - 1, second.length - 1, 1);
};