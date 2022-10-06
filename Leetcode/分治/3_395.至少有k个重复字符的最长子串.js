// 395. 至少有 K 个重复字符的最长子串
// 给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。

// 示例 1：

// 输入：s = "aaabb", k = 3
// 输出：3
// 解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。
// 示例 2：

// 输入：s = "ababbc", k = 2
// 输出：5
// 解释：最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 分治，用小于k个的字符当作分割符将字符串分成两份，对两份分别求解
// 递归过程中如果某一段全部字符个数都超过k，则更新最大值
// 效率不高，击败5%
var longestSubstring = function(s, k) {
  let res = 0;

  function longestStr(s, k) {
    if (!s) return;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
      if (!map.has(s[i])) {
        map.set(s[i], 1);
      } else {
        map.set(s[i], map.get(s[i]) + 1);
      }
    }

    let min = Infinity;
    for (let entry of map) {
      min = Math.min(min, entry[1]);
    }
    if (min >= k) {
      res = Math.max(res, s.length);
    }

    for (let i = 0; i < s.length; i++) {
      if (map.get(s[i]) < k) {
        longestStr(s.substring(0, i), k);
        longestStr(s.substring(i + 1, s.length), k);
        break;
      }
    }
  }

  longestStr(s, k);
  return res;
};

// 2. 优化的分治
var longestSubstring = function(s, k) {
  // 先统计每个字符出现的次数
  let map = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    map[s[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  // 找到第一个出现次数小于k的字符索引
  let index = 0;
  while (index < s.length && map[s[index].charCodeAt() - 'a'.charCodeAt()] >= k) {
    index++;
  }

  // 如果直接找到最后了，说明整个字符就是满足条件的，返回其长度
  if (index == s.length) {
    return s.length;
  }

  // 递归处理上面找到字符的左边
  let l = longestSubstring(s.substring(0, index), k);

  // 处于中间的 出现次数小于k个的字符都可以跳过，然后处理右边区间
  while (index < s.length && map[s[index].charCodeAt() - 'a'.charCodeAt()] < k) {
    index++;
  }

  let r = longestSubstring(s.substring(index), k);

  // 返回左右区间的较大值
  return Math.max(l, r);
}
