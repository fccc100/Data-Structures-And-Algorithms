// 6188. 按身高排序
// 给你一个字符串数组 names ，和一个由 互不相同 的正整数组成的数组 heights 。两个数组的长度均为 n 。

// 对于每个下标 i，names[i] 和 heights[i] 表示第 i 个人的名字和身高。

// 请按身高 降序 顺序返回对应的名字数组 names 。

// 示例 1：

// 输入：names = ["Mary","John","Emma"], heights = [180,165,170]
// 输出：["Mary","Emma","John"]
// 解释：Mary 最高，接着是 Emma 和 John 。
// 示例 2：

// 输入：names = ["Alice","Bob","Bob"], heights = [155,185,150]
// 输出：["Bob","Alice","Bob"]
// 解释：第一个 Bob 最高，然后是 Alice 和第二个 Bob 。

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let n = names.length;

  for (let i = 0; i < names.length; i++) {
    names[i] = [names[i], heights[i]];
  }

  names.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < n; i++) {
    names[i] = names[i][0];
  }
  return names;
};