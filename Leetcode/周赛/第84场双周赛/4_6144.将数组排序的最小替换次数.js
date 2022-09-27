// 6144. 将数组排序的最少替换次数
// 给你一个下表从 0 开始的整数数组 nums 。每次操作中，你可以将数组中任何一个元素替换为 任意两个 和为该元素的数字。

// 比方说，nums = [5,6,7] 。一次操作中，我们可以将 nums[1] 替换成 2 和 4 ，将 nums 转变成 [5,2,4,7] 。
// 请你执行上述操作，将数组变成元素按 非递减 顺序排列的数组，并返回所需的最少操作次数。

// 示例 1：

// 输入：nums = [3,9,3]
// 输出：2
// 解释：以下是将数组变成非递减顺序的步骤：
// - [3,9,3] ，将9 变成 3 和 6 ，得到数组 [3,3,6,3] 
// - [3,3,6,3] ，将 6 变成 3 和 3 ，得到数组 [3,3,3,3,3] 
// 总共需要 2 步将数组变成非递减有序，所以我们返回 2 。
// 示例 2：

// 输入：nums = [1,2,3,4,5]
// 输出：0
// 解释：数组已经是非递减顺序，所以我们返回 0 。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 最后一个数肯定不能拆
// 从倒数第二个数往前拆
// 拆的时候使它拆完后尽量的大
var minimumReplacement = function(nums) {
  let n = nums.length;
  let res = 0;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] > nums[i + 1]) {
      let count = Math.floor((nums[i] - 1) / nums[i + 1]);
      res += count;
      nums[i] = Math.floor(nums[i] / (count + 1));
    }
  }
  return res;
};


var minimumReplacement = function(nums) {
  let n = nums.length;
  let res = 0;
  let last = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] <= last) {
      last = nums[i];
    } else {
      // 把nums[i] 分成last 可分成的份数k
      let k = Math.ceil(nums[i] / last);
      // 分成k份需要k - 1次操作
      res += k - 1;

      // 把nums[i]分成k份后最小的那个数
      last = Math.floor(nums[i] / k);
    }
  }
  return res;
}