// 491. 递增子序列
// 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。

// 数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。

// 示例 1：
// 输入：nums = [4,6,7,7]
// 输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

function findSubsequences(nums) {
  // let res = [];
  // function _findSubsequences(nums, index, path) {
  //   if (path.length >= 2) {
  //     res.push([...path]);
  //   }

  //   if (index == nums.length) return;

  //   if (nums[index] > path[path.length - 1]) {
  //     path.push(nums[index]);
  //     _findSubsequences(nums, index + 1, path);
  //   }

  //   _findSubsequences(nums, index + 1, path);
  // }

  // _findSubsequences(nums, 0, []);
  // return res;


  // let res = [];
  // function _findSubsequences(nums, index, path) {
  //   if (path.length >= 2) {
  //     res.push([...path]);
  //     return;
  //   }
  //   if (index == nums.length) return;

  //   for (let i = index; i < nums.length; i++) {
  //     if (!path.length || nums[i] > path[path.length - 1]) {
  //       path.push(nums[i]);
  //       _findSubsequences(nums, i + 1, path);
  //       path.pop();
  //     }
  //   }
  // }

  // _findSubsequences(nums, 0, []);
  // return res;
}