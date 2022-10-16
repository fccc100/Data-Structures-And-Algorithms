// 6201. 找出前缀异或的原始数组
// 给你一个长度为 n 的 整数 数组 pref 。找出并返回满足下述条件且长度为 n 的数组 arr ：

// pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
// 注意 ^ 表示 按位异或（bitwise-xor）运算。

// 可以证明答案是 唯一 的。

// 示例 1：

// 输入：pref = [5,2,0,3,1]
// 输出：[5,7,2,3,2]
// 解释：从数组 [5,7,2,3,2] 可以得到如下结果：
// - pref[0] = 5
// - pref[1] = 5 ^ 7 = 2
// - pref[2] = 5 ^ 7 ^ 2 = 0
// - pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3
// - pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1
// 示例 2：

// 输入：pref = [13]
// 输出：[13]
// 解释：pref[0] = arr[0] = 13

/**
* @param {number[]} pref
* @return {number[]}
*/
var findArray = function (pref) {
  let n = pref.length;
  let res = Array(n);
  res[0] = pref[0];

  let cur = res[0];
  for (let i = 1; i < n; i++) {
    res[i] = cur ^ pref[i];
    cur = cur ^ res[i];
  }
  return res;
};