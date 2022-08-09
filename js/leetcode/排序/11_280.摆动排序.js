// 280. 摆动排序
// 给你一个的整数数组 nums, 将该数组重新排序后使 nums[0] <= nums[1] >= nums[2] <= nums[3]... 

// 输入数组总是有一个有效的答案。

// 示例 1:

// 输入：nums = [3,5,2,1,6,4]
// 输出：[3,5,1,6,2,4]
// 解释：[1,6,2,5,3,4]也是有效的答案
// 示例 2:

// 输入：nums = [6,6,5,6,3,8]
// 输出：[6,6,5,6,3,8]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 另开数组解法
var wiggleSort = function(nums) {
  nums.sort((a, b) => a - b);

  let res = [];
  let l = 0;
  let r = nums.length - 1;
  let cur = l;

  while (l <= r) {
    res.push(nums[cur]);
    if (cur == l) {
      l++;
      cur = r;
    } else {
      r--;
      cur = l;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i];
  }
};

// 2.原地修改
var wiggleSort = function(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i += 2) {
    if (i + 1 < nums.length) {
      swap(nums, i, i + 1);
    }
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 3.一次遍历
var wiggleSort = function(nums) {
  let less = true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (less) {
      if (nums[i] > nums[i + 1]) {
        swap(nums, i, i + 1);
      }
    } else {
      if (nums[i] < nums[i + 1]) {
        swap(nums, i, i + 1);
      }
    }
    less = !less;
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// [3,5,2,1,6,4]

// [1, 2, 3, 4, 5, 6]
// [1, 3, 2, 5, 4, 6]

// [1, 2, 3, 4, 5, 6, 7]
// [1, 3, 2, 4, 5, 6, 7]
// [1, 3, 2, 5, 4, 6, 7]
// [1, 3, 2, 5, 4, 7, 6]