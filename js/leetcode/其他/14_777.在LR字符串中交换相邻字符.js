// 777. 在LR字符串中交换相邻字符
// 在一个由 'L' , 'R' 和 'X' 三个字符组成的字符串（例如"RXXLRXRXL"）中进行移动操作。一次移动操作指用一个"LX"替换一个"XL"，或者用一个"XR"替换一个"RX"。现给定起始字符串start和结束字符串end，请编写代码，当且仅当存在一系列移动操作使得start可以转换成end时， 返回True。

// 示例 :

// 输入: start = "RXXLRXRXL", end = "XRLXXRRLX"
// 输出: True
// 解释:
// 我们可以通过以下几步将start转换成end:
// RXXLRXRXL ->
// XRXLRXRXL ->
// XRLXRXRXL ->
// XRLXXRRXL ->
// XRLXXRRLX

/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
  let n = start.length;

  // 首先求出去掉 _ 之后的字符串
  let s1 = '';
  let s2 = '';
  for (let i = 0; i < start.length; i++) {
    if (start[i] == 'L' || start[i] == 'R') {
      s1 += start[i];
    }
  }
  for (let i = 0; i < end.length; i++) {
    if (end[i] == 'L' || end[i] == 'R') {
      s2 += end[i];
    }
  }
  // 如果去掉 _ 后两个字符串不相等直接返回false
  if (s1.length != s2.length || s1 != s2) {
    return false;
  }

  // 对start的每个位置，左边的L必须小于end中这个位置左边的L个数，因为多了的话没法往右推
  // 同理，对start的每个位置，左边的R必须大于end中这个位置左边的R个数， 因为少了说明右边多了R，多了没法往左推
  let s_l = 0;
  let s_r = 0;
  let t_l = 0;
  let t_r = 0;

  for (let i = 0; i < n; i++) {
    if (start[i] == 'L') {
      s_l++;
    } else if (start[i] == 'R') {
      s_r++;
    }

    if (end[i] == 'L') {
      t_l++;
    } else if (end[i] == 'R') {
      t_r++;
    }

    if (s_l > t_l) {
      return false;
    }
    if (s_r < t_r) {
      return false;
    }
  }
  return true;
};