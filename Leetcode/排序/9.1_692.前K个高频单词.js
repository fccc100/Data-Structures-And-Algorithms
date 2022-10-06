// 692. 前K个高频单词
// 给定一个单词列表 words 和一个整数 k ，返回前 k 个出现次数最多的单词。

// 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率， 按字典顺序 排序。

// 示例 1：
// 输入: words = ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// 输出: ["i", "love"]
// 解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
//     注意，按字母顺序 "i" 在 "love" 之前。

function topKFrequent(words, k) {
  let map = new Map();
  for (let i = 0; i < words.length; i++) {
    if (map.has(words[i])) {
      map.set(words[i], map.get(words[i]) + 1);
    } else {
      map.set(words[i], 1);
    }
  }

  let sequence = [];
  for (let val of map.values()) {
    sequence.push(val);
  }
  
  sequence.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < k; i++) {
    let top = sequence.pop();
    let cur = '~';
    for (let key of map.keys()) {
      if (map.get(key) === top) {
        if (key < cur) {
          cur = key;
        }
      }
    }
    if (cur != '~') {
      res.push(cur);
      map.set(cur, -1);
    }
  }
  return res;
}

// 堆优化