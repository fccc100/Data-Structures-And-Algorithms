// 540. 有序数组中的单一元素
// 给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。

// 请你找出并返回只出现一次的那个数。

// 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。

// 1.使用亦或,时间复杂度O(n)
function singleNonDuplicate(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;
}