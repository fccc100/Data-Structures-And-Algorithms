// 1793. 好子数组的最大分数
// 给你一个整数数组 nums （下标从 0 开始）和一个整数 k 。

// 一个子数组 (i, j) 的 分数 定义为 min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1) 。一个 好 子数组的两个端点下标需要满足 i <= k <= j 。

// 请你返回 好 子数组的最大可能 分数 。

// 示例 1：

// 输入：nums = [1,4,3,7,4,5], k = 3
// 输出：15
// 解释：最优子数组的左右端点下标是 (1, 5) ，分数为 min(4,3,7,4,5) * (5-1+1) = 3 * 5 = 15 。
// 示例 2：

// 输入：nums = [5,5,4,5,4,1,1,1], k = 0
// 输出：20
// 解释：最优子数组的左右端点下标是 (0, 4) ，分数为 min(5,5,4,5,4) * (4-0+1) = 4 * 5 = 20 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maximumScore = function(nums, k) {

  let n = nums.length;

  // 左边第一个小的元素
  let leftMin = Array(n);

  // 单调递增栈
  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    if (!stack.length) {
      stack.push(i);
    } else {
      while (stack.length && nums[i] < nums[stack[stack.length - 1]]) {
        leftMin[stack.pop()] = i;
      }
      stack.push(i);
    }
  }
  while (stack.length) {
    leftMin[stack.pop()] = -1;
  }

  // 右边第一个小于i的元素
  let rightMin = Array(n);
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

  // 以i位置为最小值的子数组中能取到的最大值，逐个更新全局最大值
  let res = -Infinity;
  for (let i = 0; i < n; i++) {
    if (leftMin[i] + 1 <= k && rightMin[i] - 1 >= k) {
      res = Math.max(res, ((rightMin[i] - 1) - (leftMin[i] + 1) + 1) * nums[i]);
    }
  }
  return res;
};

//                         0  1  2  3  4  5 
//                        [1, 4, 3, 7, 4, 5]
//   leftMin              -1, 0  0  2  2  4
//   rightMin              6  2  6  4  6  6         