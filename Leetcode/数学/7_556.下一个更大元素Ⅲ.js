// 556. 下一个更大元素 III
// 给你一个正整数 n ，请你找出符合条件的最小整数，其由重新排列 n 中存在的每位数字组成，并且其值大于 n 。如果不存在这样的正整数，则返回 -1 。

// 注意 ，返回的整数应当是一个 32 位整数 ，如果存在满足题意的答案，但不是 32 位整数 ，同样返回 -1 。

// 示例 1：

// 输入：n = 12
// 输出：21
// 示例 2：

// 输入：n = 21
// 输出：-1

/**
 * @param {number} n
 * @return {number}
 */
 var nextGreaterElement = function(n) {
  let s = n + '';
  let nums = [];
  for (let i = 0; i < s.length; i++) {
    nums.push(s[i]);
  }

  // 变成数组后与下一个排列思路一样
  let firstLessIndex = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      firstLessIndex = i;
      break;
    }
  }
  if (firstLessIndex < 0) return -1;

  let firstMoreIndex = nums.length;
  for (let i = nums.length - 1; i > firstLessIndex; i--) {
    if (nums[i] > nums[firstLessIndex]) {
      firstMoreIndex = i;
      break;
    }
  }

  swap(nums, firstLessIndex, firstMoreIndex);

  reverse(nums, firstLessIndex + 1, nums.length - 1);

  let res = '';
  for (let i = 0; i < nums.length; i++) {
    res += nums[i];
  }

  let max = 2147483647;
  if (Number(res) > max) {
    return -1;
  }
  return res;

};

function reverse(nums, l, r) {
  while (l < r) {
    swap(nums, l, r);
    l++;
    r--;
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}