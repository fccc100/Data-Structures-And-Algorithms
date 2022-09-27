// 758. 字符串中的加粗单词
// 给定一个关键词集合 words 和一个字符串 s，将所有 s 中出现的关键词 words[i] 加粗。所有在标签 < b > 和 < b > 中的字母都会加粗。

// 加粗后返回 s 。返回的字符串需要使用尽可能少的标签，当然标签应形成有效的组合。

// 示例 1:

// 输入: words = ["ab", "bc"], s = "aabcd"
// 输出: "a<b>abc</b>d"
// 解释: 注意返回 "a<b>a<b>b</b>c</b>d" 会使用更多的标签，因此是错误的。
// 示例 2:

// 输入: words = ["ab", "cb"], s = "aabcd"
// 输出: "a<b>ab</b>cd"


/**
 * @param {string[]} words
 * @param {string} s
 * @return {string}
 */
var boldWords = function (words, s) {
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