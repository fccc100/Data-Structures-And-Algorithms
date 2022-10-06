// 面试题 17.19. 消失的两个数字
// 给定一个数组，包含从 1 到 N 所有的整数，但其中缺了两个数字。你能在 O(N) 时间内只用 O(1) 的空间找到它们吗？

// 以任意顺序返回这两个数字均可。

// 示例 1:

// 输入: [1]
// 输出: [2,3]
// 示例 2:

// 输入: [2,3]
// 输出: [1,4]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 先排序再求两个数字 O(nlogn)
var missingTwo = function (nums) {
  let n = nums.length;
  nums.sort((a, b) => a - b);

  let first = -1;
  let curSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1 && first < 0) {
      first = i + 1;
    }

    curSum += nums[i];
  }

  if (first < 0) {
    return [nums[n - 1] + 1, nums[n - 1] + 2];
  }

  let sum = (n + 2) * (1 + n + 2) / 2;
  return [first, sum - curSum - first];
};

// 2.位运算，1 - n 消失两个数，往数组中再添加 1 - n 每个数字一次
// 这样就变成所有数字出现两次，两个数字出现一次，于是思路和剑指Offer56一样了
var missingTwo = function (nums) {
  let n = nums.length + 2;

  // 求出数组中所有数字的异或
  let c = nums[0];
  for (let i = 1; i < nums.length; i++) {
    c ^= nums[i];
  }

  // 再与1 - n每个数字异或
  for (let i = 1; i <= n; i++) {
    c ^= i;
  }

  // 求最后一位1
  let p = 1;
  while ((p & c) == 0) {
    p <<= 1;
  }

  let a = 0, b = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] & p) != 0) {
      a ^= nums[i];
    } else {
      b ^= nums[i];
    }
  }

  for (let i = 1; i <= n; i++) {
    if ((i & p) != 0) {
      a ^= i;
    } else {
      b ^= i;
    }
  }
  return [a, b];
}