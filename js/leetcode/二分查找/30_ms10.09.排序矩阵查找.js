// 面试题 10.09. 排序矩阵查找
// 给定M×N矩阵，每一行、每一列都按升序排列，请编写代码找出某元素。

// 示例:

// 现有矩阵 matrix 如下：

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// 给定 target = 5，返回 true。

// 给定 target = 20，返回 false。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 1.直接暴力搜索
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == target) {
        return true;
      }
    }
  }
  return false;
};

// 2.二分查找
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let index = binarySearch(matrix[i], target);
    if (index >= 0) {
      return true;
    }
  }
  return false;
}

// 二分查找模板
function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = l + (r - l >> 1);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}