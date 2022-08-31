// 2104. 子数组范围和
// 给你一个整数数组 nums 。nums 中，子数组的 范围 是子数组中最大元素和最小元素的差值。

// 返回 nums 中 所有 子数组范围的 和 。

// 子数组是数组中一个连续 非空 的元素序列。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：4
// 解释：nums 的 6 个子数组如下所示：
// [1]，范围 = 最大 - 最小 = 1 - 1 = 0 
// [2]，范围 = 2 - 2 = 0
// [3]，范围 = 3 - 3 = 0
// [1,2]，范围 = 2 - 1 = 1
// [2,3]，范围 = 3 - 2 = 1
// [1,2,3]，范围 = 3 - 1 = 2
// 所有范围的和是 0 + 0 + 0 + 1 + 1 + 2 = 4
// 示例 2：

// 输入：nums = [1,3,3]
// 输出：4
// 解释：nums 的 6 个子数组如下所示：
// [1]，范围 = 最大 - 最小 = 1 - 1 = 0
// [3]，范围 = 3 - 3 = 0
// [3]，范围 = 3 - 3 = 0
// [1,3]，范围 = 3 - 1 = 2
// [3,3]，范围 = 3 - 3 = 0
// [1,3,3]，范围 = 3 - 1 = 2
// 所有范围的和是 0 + 0 + 0 + 2 + 0 + 2 = 4
// 示例 3：

// 输入：nums = [4,-2,-3,4,1]
// 输出：59
// 解释：nums 中所有子数组范围的和是 59

/**
 * @param {number[]} nums
 * @return {number}
 */

// 原数组                [ 1,  2,   3]
// 以i位置为min子数组个数   3   2    1
// 以i位置为max子数组个数   1   2    3

// 求上面两个个数使用单调栈分别求出
// 1.i位置左边比其小的元素的索引
// 2.i位置左边比其大的元素的索引
// 3.i位置右边比其小的元素的索引
// 4.i位置右边比其大的元素的索引

// sum -1 * 3 + -2 * 2 + -3 * 1 + 1 * 1 + 2 * 2 + 3 * 3
// sum   -3 + -4 + -3 + 1 + 4 + 9
// sum 4

var subArrayRanges = function (nums) {
  let n = nums.length;

  // i左边比i位置小的第一个元素
  let leftMin = Array(n);
  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    if (!stack.length) {
      stack.push(i);
    } else {
      while (stack.length && nums[i] < nums[stack[stack.length - 1]]) {
        let top = stack.pop();
        leftMin[top] = i;
      }
      stack.push(i);
    }
  }
  while (stack.length) {
    leftMin[stack.pop()] = -1;
  }

  // i右边比i位置小的第一个元素
  let rightMin = Array(n);
  for (let i = 0; i < n; i++) {
    if (!stack.length) {
      stack.push(i);
    } else {
      while (stack.length && nums[i] <= nums[stack[stack.length - 1]]) {
        let top = stack.pop();
        rightMin[top] = i;
      }
      stack.push(i);
    }
  }
  while (stack.length) {
    rightMin[stack.pop()] = n;
  }

  // i左边比i位置大的第一个元素
  let leftMax = Array(n);
  for (let i = n - 1; i >= 0; i--) {
    if (!stack.length) {
      stack.push(i);
    } else {
      while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
        let top = stack.pop();
        leftMax[top] = i;
      }
      stack.push(i);
    }
  }
  while (stack.length) {
    leftMax[stack.pop()] = -1;
  }

  // i右边比i位置大的第一个元素
  let rightMax = Array(n);
  for (let i = 0; i < n; i++) {
    if (!stack.length) {
      stack.push(i);
    } else {
      while (stack.length && nums[i] >= nums[stack[stack.length - 1]]) {
        let top = stack.pop();
        rightMax[top] = i;
      }
      stack.push(i);
    }
  }
  while (stack.length) {
    rightMax[stack.pop()] = n;
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    // 当前值作为最小值的子数组个数
    let minCnt = (i - leftMin[i]) * (rightMin[i] - i);

    // 当前值作为最大值的子数组个数
    let maxCnt = (i - leftMax[i]) * (rightMax[i] - i);

    res += (minCnt * (-nums[i])) + (maxCnt * nums[i]);
  }
  return res;
};

//          [ 1,  2,  3]
// 以i为min   3   2    1
// 以i为max   1   2    3

// sum -1 * 3 + -2 * 2 + -3 * 1 + 1 * 1 + 2 * 2 + 3 * 3
// sum   -3 + -4 + -3 + 1 + 4 + 9
// sum 4