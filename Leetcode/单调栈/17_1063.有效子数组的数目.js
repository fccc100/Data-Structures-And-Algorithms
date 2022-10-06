// 1063. 有效子数组的数目
// 给定一个整数数组 nums ，返回满足下面条件的 非空、连续 子数组的数目：

// 子数组 是数组的 连续 部分。
// 子数组最左边的元素不大于子数组中的其他元素 。

// 示例 1：

// 输入：nums = [1,4,2,5,3]
// 输出：11
// 解释：有 11 个有效子数组，分别是：[1],[4],[2],[5],[3],[1,4],[2,5],[1,4,2],[2,5,3],[1,4,2,5],[1,4,2,5,3] 。
// 示例 2：

// 输入：nums = [3,2,1]
// 输出：3
// 解释：有 3 个有效子数组，分别是：[3],[2],[1] 。
// 示例 3：

// 输入：nums = [2,2,2]
// 输出：6
// 解释：有 6 个有效子数组，分别为是：[2],[2],[2],[2,2],[2,2],[2,2,2] 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarrays = function (nums) {
  let n = nums.length;

  let rightMin = Array(n);
  let stack = [];
  for (let i = 0; i < n; i++) {
    if (!stack.length) {
      stack.push(i);
    } else {
      while (stack.length && nums[i] < nums[stack[stack.length - 1]]) {
        rightMin[stack.pop()] = i;
      }
      stack.push(i);
    }
  }

  while (stack.length) {
    rightMin[stack.pop()] = n;
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    res += rightMin[i] - i;
  }
  return res;
};

//                     [1, 4, 2, 5, 3]
//  右边第一个小的元素   [5, 2, 5, 4, 5]
//  选择方案数           5  1  3  1  1