// 剑指 Offer II 119. 最长连续序列
// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 示例 1：
// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  // 先将所有数字放入一个set中
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  // 遍历每个数字，求以每个数字开头的最长连续序列的长度
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let curNum = nums[i];
    if (set.has(curNum - 1)) {
      continue;
    }

    let curLen = 1;
    while(set.has(curNum + 1)) {
      curLen++;
      curNum = curNum + 1;
    }
    res = Math.max(res, curLen);
  }
  return res;
};