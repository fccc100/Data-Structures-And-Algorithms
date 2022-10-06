// 930. 和相同的二元子数组
// 给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。

// 子数组 是数组的一段连续部分。

// 示例 1：

// 输入：nums = [1,0,1,0,1], goal = 2
// 输出：4
// 解释：
// 有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]
// 示例 2：

// 输入：nums = [0,0,0,0,0], goal = 0
// 输出：15

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
  // let l = 0;
  // let r = -1;

  // let sum = 0;
  // let res = 0;
  // while (r < nums.length) {
  //   if (sum < goal) {
  //     r++;
  //     sum += nums[r];
  //   } else if (sum > goal) {
  //     sum -= nums[l];
  //     l++;
  //   } else {
  //     res++;
  //     if (nums[l] == 0) {
  //       l++;
  //     } else {
  //       r++;
  //       sum += nums[r];
  //     }
  //   }
  // }
  // return res;
};