// 422. 有效的单词方块
// 给你一个单词序列，判断其是否形成了一个有效的单词方块。

// 有效的单词方块是指此由单词序列组成的文字方块的 第 k 行 和 第 k 列 (0 ≤ k < max(行数, 列数)) 所显示的字符串完全相同。

// 注意：

// 给定的单词数大于等于 1 且不超过 500。
// 单词长度大于等于 1 且不超过 500。
// 每个单词只包含小写英文字母 a-z。

// 示例 1：

// 输入：
// [
//   "abcd",
//   "bnrt",
//   "crmy",
//   "dtye"
// ]

// 输出：
// true

// 解释：
// 第 1 行和第 1 列都是 "abcd"。
// 第 2 行和第 2 列都是 "bnrt"。
// 第 3 行和第 3 列都是 "crmy"。
// 第 4 行和第 4 列都是 "dtye"。

// 因此，这是一个有效的单词方块。

// 示例 2：

// 输入：
// [
//   "abcd",
//   "bnrt",
//   "crm",
//   "dt"
// ]

// 输出：
// true

// 解释：
// 第 1 行和第 1 列都是 "abcd"。
// 第 2 行和第 2 列都是 "bnrt"。
// 第 3 行和第 3 列都是 "crm"。
// 第 4 行和第 4 列都是 "dt"。

// 因此，这是一个有效的单词方块。
 
// 示例 3：

// 输入：
// [
//   "ball",
//   "area",
//   "read",
//   "lady"
// ]

// 输出：
// false

// 解释：
// 第 3 行是 "read" ，然而第 3 列是 "lead"。

// 因此，这 不是 一个有效的单词方块。

/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {
  let m = words.length;
  if (m == 0) return true;
  let n = words[0].length;

  let row = Array(m).fill('');
  let col = Array(500).fill('');

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      row[i] += words[i][j] ? words[i][j] : '';
      col[j] += words[i][j] ? words[i][j] : '';
    }
  }

  for (let i = 0; i < m; i++) {
    if (row[i] != col[i]) {
      return false;
    }
  }
  for (let i = m; i < col.length; i++) {
    if (col[i] != '') {
      return false;
    }
  }
  return true;
};

// 2.
var validWordSquare = function(words) {
  let m = words.length;
  if (m == 0) return true;

  for (let i = 0; i < m; i++) {
    let len = words[i].length;
    for (let j = 0; j < len; j++) {
      // 总行没有总列多
      if (m <= j) {
        return false;
      }

      if (words[j].length <= i) {
        return false;
      }

      if (words[i][j] != words[j][i]) {
        return false;
      }
    }
  }
  return true;
};

// [
//   "abc",
//   "bde",
//   "cefg"
// ]