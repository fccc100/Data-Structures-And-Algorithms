// 918. 环形子数组的最大和
// 给定一个长度为 n 的环形整数数组 nums ，返回 nums 的非空 子数组 的最大可能和 。

// 环形数组 意味着数组的末端将会与开头相连呈环状。形式上， nums[i] 的下一个元素是 nums[(i + 1) % n] ， nums[i] 的前一个元素是 nums[(i - 1 + n) % n] 。

// 子数组 最多只能包含固定缓冲区 nums 中的每个元素一次。形式上，对于子数组 nums[i], nums[i + 1], ..., nums[j] ，不存在 i <= k1, k2 <= j 其中 k1 % n == k2 % n 。

// 示例 1：
// 输入：nums = [1,-2,3,-2]
// 输出：3
// 解释：从子数组 [3] 得到最大和 3

// 递归
function maxSubarraySumCircular(nums) {
  function _maxSubarraySumCircular(nums, index) {
    if (index == 0) {
      return nums[0];
    }

    return Math.max(_maxSubarraySumCircular(nums, index - 1) + nums[index], nums[index]);
  }
  function _minSubarraySumCircular(nums, index) {
    if (index == 0) {
      return nums[0];
    }

    return Math.min(_minSubarraySumCircular(nums, index - 1) + nums[index], nums[index]);
  }

  // 求不带环的最大子数组和与最小子数组和
  // 环形子数组的最大和就是不带环的最大子数组和 和 sum - 不带环的最小子数组和中的较大者
  // 全是负数的情况只考虑不带环的最大子数组和
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  let positive = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive = true;
    }
    sum += nums[i];
    max = Math.max(max, _maxSubarraySumCircular(nums, i));
    min = Math.min(min, _minSubarraySumCircular(nums, i));
  }

  return positive ? Math.max(max, sum - min) : max;
}

// 记忆化搜索
function maxSubarraySumCircular(nums) {
  let minMemo = Array(nums.length);
  let maxMemo = Array(nums.length);
  function _maxSubarraySumCircular(nums, index) {
    if (index == 0) {
      return nums[0];
    }
    if (maxMemo[index] !== undefined) {
      return maxMemo[index];
    }

    return maxMemo[index] = Math.max(_maxSubarraySumCircular(nums, index - 1) + nums[index], nums[index]);
  }
  function _minSubarraySumCircular(nums, index) {
    if (index == 0) {
      return nums[0];
    }
    if (minMemo[index] !== undefined) {
      return minMemo[index];
    }

    return minMemo[index] = Math.min(_minSubarraySumCircular(nums, index - 1) + nums[index], nums[index]);
  }

  // 求不带环的最大子数组和与最小子数组和
  // 环形子数组的最大和就是不带环的最大子数组和 和 sum - 不带环的最小子数组和中的较大者
  // 全是负数的情况只考虑不带环的最大子数组和
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  let positive = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive = true;
    }
    sum += nums[i];
    max = Math.max(max, _maxSubarraySumCircular(nums, i));
    min = Math.min(min, _minSubarraySumCircular(nums, i));
  }

  return positive ? Math.max(max, sum - min) : max;
}

// 动态规划
// 求环形子数组的最大和，要么是普通子数组的最大和，要么是sum - 普通子数组的最小和，从两者中取较大值即可
function maxSubarraySumCircular(nums) {
  // 状态定义：minDp[i] 表示以第i项结尾的子数组的最小和
  // maxDp[i]表示以第i项结尾的子数组的最大和
  let minDp = Array(nums.length);
  let maxDp = Array(nums.length);
  minDp[0] = nums[0];
  maxDp[0] = nums[0];

  let max = maxDp[0];
  let min = minDp[0];
  let sum = nums[0];
  let positive = nums[0] > 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive = true;
    }
    sum += nums[i];
    maxDp[i] = Math.max(nums[i], maxDp[i - 1] + nums[i]);
    minDp[i] = Math.min(nums[i], minDp[i - 1] + nums[i]);

    max = Math.max(max, maxDp[i]);
    min = Math.min(min, minDp[i]);
  }

  // 如果都是负数，则直接取普通子数组的最大和，如果存在正数，则取两者较大值
  return positive ? Math.max(max, sum - min) : max;
}