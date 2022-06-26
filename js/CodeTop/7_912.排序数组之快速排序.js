// 912. 排序数组
// 给你一个整数数组 nums，请你将该数组升序排列。

// 示例 1：

// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]
// 示例 2：

// 输入：nums = [5,1,1,2,0,0]
// 输出：[0,0,1,1,2,5]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }

  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, l, p);
  
  let j = l;
  for (let i = j + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}