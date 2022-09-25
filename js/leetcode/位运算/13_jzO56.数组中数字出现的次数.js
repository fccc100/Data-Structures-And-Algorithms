// 剑指 Offer 56 - I. 数组中数字出现的次数
// 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

// 示例 1：

// 输入：nums = [4,1,4,6]
// 输出：[1,6] 或 [6,1]
// 示例 2：

// 输入：nums = [1,2,10,4,1,4,3,3]
// 输出：[2,10] 或 [10,2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 1.直接使用map统计
var singleNumbers = function (nums) {
  let n = nums.length;

  let map = new Map();
  for (let i = 0; i < n; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }

  let res = [];
  for (let [key, val] of map) {
    if (val == 1) {
      res.push(key);
    }
  }
  return res;
};

// 2.位运算
// 先所有数字异或，异或结果为 a ^ b
var singleNumbers = function (nums) {
  let n = nums.length;

  // c的结果就是a ^ b
  let c = nums[0];
  for (let i = 1; i < n; i++) {
    c ^= nums[i];
  }

  // 把所有数字分为两组，相同的数字放在同一组，并且把a b分别分到两组中去再进行异或，得到的结果就分别是a、b
  // 怎么分到不同的组中
  // 从a ^ b的结果中，找到一个是1的位数，根据这一位是0还是1来分
  
  // 先找到第一个是1的位
  let p = 1;
  while ((p & c) == 0) {
    p = p << 1;
  }

  let a = 0, b = 0;
  for (let i = 0; i < n; i++) {
    if ((p & nums[i]) != 0) {
      a ^= nums[i];
    } else {
      b ^= nums[i];
    }
  }
  
  return [a, b];
}