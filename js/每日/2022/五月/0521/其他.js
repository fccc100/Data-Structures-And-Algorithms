// 49. 字母异位词分组
// 用质数表示每个字母，字母异位词 字母乘积一定相等
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

// 438. 找到字符串中所有字母异位词
var findAnagrams = function(s, p) {
  
};