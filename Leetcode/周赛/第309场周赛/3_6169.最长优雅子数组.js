// 6169. 最长优雅子数组
// 给你一个由 正 整数组成的数组 nums 。

// 如果 nums 的子数组中位于 不同 位置的每对元素按位 与（AND）运算的结果等于 0 ，则称该子数组为 优雅 子数组。

// 返回 最长 的优雅子数组的长度。

// 子数组 是数组中的一个 连续 部分。

// 注意：长度为 1 的子数组始终视作优雅子数组。

// 示例 1：

// 输入：nums = [1,3,8,48,10]
// 输出：3
// 解释：最长的优雅子数组是 [3,8,48] 。子数组满足题目条件：
// - 3 AND 8 = 0
// - 3 AND 48 = 0
// - 8 AND 48 = 0
// 可以证明不存在更长的优雅子数组，所以返回 3 。
// 示例 2：

// 输入：nums = [3,1,5,11,13]
// 输出：1
// 解释：最长的优雅子数组长度为 1 ，任何长度为 1 的子数组都满足题目条件。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 竞赛时的解法，滑动窗口，同时判断窗口中的所有数字是不是有二进制相同位数是1的数
var longestNiceSubarray = function (nums) {
  let n = nums.length;

  for (let i = 0; i < nums.length; i++) {
    nums[i] = Number(nums[i]).toString(2);
  }

  let l = 0;
  let r = -1;

  let res = 1;

  let used = Array(32).fill(false);
  while (l < n && r < n) {

    if (r + 1 < n && canFill(used, nums[r + 1])) {
      r++;
      if (r >= n) break;
      fill(used, nums[r]);
      res = Math.max(res, r - l + 1);
    } else {
      unFill(used, nums[l]);
      l++;
    }
  }
  return res;
};

function unFill(used, num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] == 1) {
      used[num.length - 1 - i] = false;
    }
  }
}

function fill(used, num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] == 1) {
      used[num.length - 1 - i] = true;
    }
  }
}

function canFill(used, num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] == 1 && used[num.length - 1 - i]) {
      return false;
    }
  }

  return true;
}