// 18. 四数之和
// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。
// 请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

// 0 <= a, b, c, d < n
// a、b、c 和 d 互不相同
// nums[a] + nums[b] + nums[c] + nums[d] == target
// 你可以按 任意顺序 返回答案 。

// 示例 1：

// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// 示例 2：

// 输入：nums = [2,2,2,2,2], target = 8
// 输出：[[2,2,2,2]]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
  let res = [];

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] > 0 && nums[i] > target) {
      break;
    }
    if (i >= 1 && nums[i] == nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (nums[j] > 0 && nums[i] + nums[j] > target) {
        break;
      }
      if (j >= i + 2 && nums[j] == nums[j - 1]) {
        continue;
      }

      let l = j + 1;
      let r = nums.length - 1;

      while (l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r];

        if (sum == target) {
          res.push([nums[i], nums[j], nums[l], nums[r]]);

          let leftVal = nums[l];
          while (nums[l] == leftVal) {
            l++;
          }

          let rightVal = nums[r];
          while (nums[r] == rightVal) {
            r--;
          }
        } else if (sum < target) {
          l++;
        } else {
          r--;
        }
      }
    }
  }

  return res;
};