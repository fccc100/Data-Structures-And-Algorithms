// 962. 最大宽度坡
// 给定一个整数数组 A，坡是元组 (i, j)，其中  i < j 且 A[i] <= A[j]。这样的坡的宽度为 j - i。

// 找出 A 中的坡的最大宽度，如果不存在，返回 0 。

// 示例 1：

// 输入：[6,0,8,2,1,5]
// 输出：4
// 解释：
// 最大宽度的坡为 (i, j) = (1, 5): A[1] = 0 且 A[5] = 5.
// 示例 2：

// 输入：[9,8,1,0,1,9,4,0,4,1]
// 输出：7
// 解释：
// 最大宽度的坡为 (i, j) = (2, 9): A[2] = 1 且 A[9] = 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[j] >= nums[i]) {
        res = Math.max(res, j - i);
        break;
      }
    }
  }
  return res;
};

// 2.排序
var maxWidthRamp = function(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    nums[i] = [i, nums[i]];
  }

  nums.sort((a, b) => a[1] - b[1]);

  // 排序之后就是买卖股票最佳时机的思路
  let minIndex = nums[0][0];
  let res = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i][0] < minIndex) {
      minIndex = nums[i][0];
    } else {
      res = Math.max(res, nums[i][0] - minIndex);
    }
  }
  return res;
}

//          [6,  0,  8,  2,  1,  5]
//  stack   [8,  2,  1,  ]
//          [2,  2,  6,  5,  5,  6]
//           2   1   0   2