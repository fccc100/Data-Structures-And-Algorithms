// 128. 最长连续序列
// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

// 示例 1：
// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let curNum = nums[i];

    // 如果set里面已经有当前数 - 1了，说明当前这个数肯定不能作为最长连续序列的开头数字，直接跳过
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