// 616. 给字符串添加加粗标签
// 给你一个字符串 s 和一个字符串列表 words ，你需要将在字符串列表中出现过的 s 的子串添加加粗闭合标签 <b> 和 </b> 。

// 如果两个子串有重叠部分，你需要把它们一起用一对闭合标签包围起来。同理，如果两个子字符串连续被加粗，那么你也需要把它们合起来用一对加粗标签包围。

// 返回添加加粗标签后的字符串 s 。

// 示例 1：

// 输入： s = "abcxyz123", words = ["abc","123"]
// 输出："<b>abc</b>xyz<b>123</b>"
// 示例 2：

// 输入：s = "aaabbcc", words = ["aaa","aab","bc"]
// 输出："<b>aaabbc</b>c"

/**
 * @param {string} s
 * @param {string[]} words
 * @return {string}
 */
var addBoldTag = function (s, words) {
  let intervals = [];
  for (let i = 0; i < words.length; i++) {

    let searchIndex = 0;
    while (s.indexOf(words[i], searchIndex) > -1) {
      let idx = s.indexOf(words[i], searchIndex);

      intervals.push([idx, idx + words[i].length - 1]);

      searchIndex = idx + 1;
    }
  }

  intervals = merge(intervals);

  if (!intervals.length) return s;

  let startSet = new Set();
  let endSet = new Set();
  for (let i = 0; i < intervals.length; i++) {
    startSet.add(intervals[i][0]);
    endSet.add(intervals[i][1]);
  }

  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (startSet.has(i)) {
      res += '<b>'
    }

    res += s[i];
    if (endSet.has(i)) {
      res += '</b>';
    }
  }
  return res;
};

/**
* @param {number[][]} intervals
* @return {number[][]}
*/
var merge = function (intervals) {
  let res = [];
  if (!intervals.length) return res;

  intervals.sort((a, b) => a[0] - b[0]);

  res.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    let top = res[res.length - 1][1];
    if (intervals[i][0] > top + 1) {
      res.push(intervals[i]);
      continue;
    }

    if (intervals[i][0] <= top && intervals[i][1] <= top) {
      continue;
    }

    if (intervals[i][0] - 1 <= top && intervals[i][1] > top) {
      res[res.length - 1][1] = intervals[i][1];
    }
  }
  return res;
};