// 2334. 元素值大于变化阈值的子数组
// 给你一个整数数组 nums 和一个整数 threshold 。

// 找到长度为 k 的 nums 子数组，满足数组中 每个 元素都 大于 threshold / k 。

// 请你返回满足要求的 任意 子数组的 大小 。如果没有这样的子数组，返回 -1 。

// 子数组 是数组中一段连续非空的元素序列。

// 示例 1：

// 输入：nums = [1,3,4,3,1], threshold = 6
// 输出：3
// 解释：子数组 [3,4,3] 大小为 3 ，每个元素都大于 6 / 3 = 2 。
// 注意这是唯一合法的子数组。
// 示例 2：

// 输入：nums = [6,5,6,5,8], threshold = 7
// 输出：1
// 解释：子数组 [8] 大小为 1 ，且 8 > 7 / 1 = 7 。所以返回 1 。
// 注意子数组 [6,5] 大小为 2 ，每个元素都大于 7 / 2 = 3.5 。
// 类似的，子数组 [6,5,6] ，[6,5,6,5] ，[6,5,6,5,8] 都是符合条件的子数组。
// 所以返回 2, 3, 4 和 5 都可以。

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
// 1.单调栈
var validSubarraySize = function (nums, threshold) {
  let n = nums.length;

  // leftMin[i]表示i位置左边第一个严格小于i位置值的索引
  let leftMin = Array(n);

  // rightMin[i]表示i位置右边第一个严格小于i位置值的索引
  let rightMin = Array(n);

  // 求左边小于当前值的索引
  let stack1 = [];
  for (let i = n - 1; i >= 0; i--) {
    if (!stack1.length) {
      stack1.push(i);
    } else {
      while (stack1.length && nums[i] < nums[stack1[stack1.length - 1]]) {
        let prev = stack1.pop();
        leftMin[prev] = i;
      }
      stack1.push(i);
    }
  }

  while (stack1.length) {
    leftMin[stack1.pop()] = -1;
  }

  // 求右边小于当前值的最小索引
  let stack2 = [];
  for (let i = 0; i < n; i++) {
    if (!stack2.length) {
      stack2.push(i);
    } else {
      while (stack2.length && nums[i] < nums[stack2[stack2.length - 1]]) {
        let prev = stack2.pop();
        rightMin[prev] = i;
      }
      stack2.push(i);
    }
  }
  while (stack2.length) {
    rightMin[stack2.pop()] = n;
  }

  // 以每个位置为最小值，求最小值是否大于threshold / k 
  for (let i = 0; i < n; i++) {
    let k = rightMin[i] - leftMin[i] - 1;
    if (nums[i] > threshold / k) {
      return k;
    }
  }
  return -1;
};