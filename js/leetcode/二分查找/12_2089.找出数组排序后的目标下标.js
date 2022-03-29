// 2089. 找出数组排序后的目标下标
// 给你一个下标从 0 开始的整数数组 nums 以及一个目标元素 target 。

// 目标下标 是一个满足 nums[i] == target 的下标 i 。

// 将 nums 按 非递减 顺序排序后，返回由 nums 中目标下标组成的列表。如果不存在目标下标，返回一个 空 列表。返回的列表必须按 递增 顺序排列。

// 示例 1：
// 输入：nums = [1,2,5,2,3], target = 2
// 输出：[1,2]
// 解释：排序后，nums 变为 [1,2,2,3,5] 。
// 满足 nums[i] == 2 的下标是 1 和 2 。

// 1.排序后线性查找
function targetIndices(nums, target) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      res.push(i);
    }
  }
  return res;
}

// 2.统计个数
function targetIndices(nums, target) {
  // 小于target的元素个数
  let lt = 0;
  // 等于target元素的个数
  let et = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      lt++;
    }
    if (nums[i] == target) {
      et++;
    }
  }

  let res = [];
  for (let i = 0; i < et; i++) {
    res.push(lt);
    lt++;
  }
  return res;
}