// 442. 数组中重复的数据
// 给你一个长度为 n 的整数数组 nums ，其中 nums 的所有整数都在范围 [1, n] 内，且每个整数出现 一次 或 两次 。
// 请你找出所有出现 两次 的整数，并以数组形式返回。

// 你必须设计并实现一个时间复杂度为 O(n) 且仅使用常量额外空间的算法解决此问题。

// 示例 1：

// 输入：nums = [4,3,2,7,8,2,3,1]
// 输出：[2,3]
// 示例 2：

// 输入：nums = [1,1,2]
// 输出：[1]
// 示例 3：

// 输入：nums = [1]
// 输出：[]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 1.哈希表统计，但是题目要求O(1)空间复杂度
var findDuplicates = function(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }

  let res = [];
  for (let entry of map) {
    if (entry[1] == 2) {
      res.push(entry[0]);
    }
  }
  return res;
};