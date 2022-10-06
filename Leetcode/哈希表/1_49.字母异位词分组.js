// 49. 字母异位词分组
// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

// 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

// 示例 1:

// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
// 示例 2:

// 输入: strs = [""]
// 输出: [[""]]
// 示例 3:

// 输入: strs = ["a"]
// 输出: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {
    a: 2,
    b: 3,
    c: 5,
    d: 7,
    e: 11,
    f: 13,
    g: 17,
    h: 19,
    i: 23,
    j: 29,
    k: 31,
    l: 37,
    m: 41,
    n: 43,
    o: 47,
    p: 53,
    q: 59,
    r: 61,
    s: 67,
    t: 71,
    u: 73,
    v: 79,
    w: 83,
    x: 89,
    y: 97,
    z: 101
  }
  let map1 = new Map();
  for (let i = 0; i < strs.length; i++) {
    let sum = 1;
    for (let j = 0; j < strs[i].length; j++) {
      sum *= map[strs[i][j]];
    }

    if (map1.has(sum)) {
      map1.get(sum).push(strs[i]);
    } else {
      map1.set(sum, [strs[i]]);
    }
  }

  let res = [];
  for (let val of map1.values()) {
    res.push(val);
  }
  return res;
};

// 排序
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let s = strs[i].split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
    if (map.has(s)) {
      map.get(s).push(strs[i]);
    } else {
      map.set(s, [strs[i]]);
    }
  }
  let res = [];
  for (let entry of map.values()) {
    res.push(entry);
  }
  return res;
}