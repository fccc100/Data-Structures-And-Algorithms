// 854. 相似度为 K 的字符串
// 字符串 s1 和 s2 是 k 相似 的(对于某些非负整数 k )，如果我们可以交换 s1 中两个字母的位置正好 k 次，使结果字符串等于 s2 。

// 给定两个字谜游戏 s1 和 s2 ，返回 s1 和 s2 与 k 相似 的最小 k 。

// 示例 1：

// 输入：s1 = "ab", s2 = "ba"
// 输出：1
// 示例 2：

// 输入：s1 = "abc", s2 = "bca"
// 输出：2

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
// 暴力，超时
var kSimilarity = function(s1, s2) {
  if (s1 == s2) {
    return 0;
  }

  let queue = [];
  queue.push(s1);

  let visited = new Map();
  visited.set(s1, 0);

  while(queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let curStr = queue.shift();

      let nexts = getNexts(curStr, s2);

      for (let j = 0; j < nexts.length; j++) {
        if (!visited.has(nexts[j])) {
          queue.push(nexts[j]);
          visited.set(nexts[j], visited.get(curStr) + 1);

          if (nexts[j] == s2) {
            return visited.get(nexts[j]);
          }
        }
      }
    }
  }
  return -1;
};

function getNexts(s1, s2) {
  let set = new Set();
  for (let i = 0; i < s1.length; i++) {
    for (let j = i + 1; j < s1.length; j++) {
      if ((s1[i] != s2[i] && s1[j] != s2[j]) && (s1[j] != s2[i] && s1[j] != s2[j])) {
        continue;
      }
      if (s1[j] == s1[j - 1]) {
        continue;
      }
      set.add(swap(s1, i, j));
    }
  }
  return [...set];
}

function swap(s, i, j) {
  let arr = s.split('');
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr.join('');
}

// 
var kSimilarity = function(s1, s2) {

}