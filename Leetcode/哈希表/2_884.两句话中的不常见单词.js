// 884. 两句话中的不常见单词
// 句子 是一串由空格分隔的单词。每个 单词 仅由小写字母组成。

// 如果某个单词在其中一个句子中恰好出现一次，在另一个句子中却 没有出现 ，那么这个单词就是 不常见的 。

// 给你两个 句子 s1 和 s2 ，返回所有 不常用单词 的列表。返回列表中单词可以按 任意顺序 组织。

 

// 示例 1：

// 输入：s1 = "this apple is sweet", s2 = "this apple is sour"
// 输出：["sweet","sour"]
// 示例 2：

// 输入：s1 = "apple apple", s2 = "banana"
// 输出：["banana"]

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
  let s1Arr = s1.split(' ');
  let s2Arr = s2.split(' ');
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < s1Arr.length; i++) {
    if (map1.has(s1Arr[i])) {
      map1.set(s1Arr[i], map1.get(s1Arr[i]) + 1);
    } else {
      map1.set(s1Arr[i], 1);
    }
  }
  for (let i = 0; i < s2Arr.length; i++) {
    if (map2.has(s2Arr[i])) {
      map2.set(s2Arr[i], map2.get(s2Arr[i]) + 1);
    } else {
      map2.set(s2Arr[i], 1);
    }
  }

  let res = [];
  for (let entry of map1) {
    if (entry[1] == 1 && !map2.has(entry[0])) {
      res.push(entry[0]);
    }
  }
  for (let entry of map2) {
    if (entry[1] == 1 && !map1.has(entry[0])) {
      res.push(entry[0]);
    }
  }
  return res;
};