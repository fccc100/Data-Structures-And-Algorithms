// 18. 四数之和
// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

// 0 <= a, b, c, d < n
// a、b、c 和 d 互不相同
// nums[a] + nums[b] + nums[c] + nums[d] == target
// 你可以按 任意顺序 返回答案 。

// 示例 1：
// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  // 长度小于4，没有答案
  if (nums.length < 4) return [];

  // 先排序
  nums.sort((a, b) => a - b);

  // 这里与三数之和不一样，多个大于target的负数是可以组成target的，不能做这个判断
  // if (nums[0] > target) return [];

  let n = nums.length;
  let res = [];
  for (let i = 0; i < n; i++) {
    // 这里也与三数之和不一样，多个大于target的负数是可以组成target的
    // if (nums[i] > target) {
    //   return res;
    // }

    // 跳过相同元素
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    // 固定第二个数
    for (let j = i + 1; j < n; j++) {
      // 这里也与三数之和不一样，多个大于target的负数是可以组成target的
      // if (nums[i] + nums[j] > target) {
      //   break;
      // }

      // 跳过相同元素
      if (j > i + 1 && nums[j] == nums[j - 1]) {
        continue;
      }

      // 开始找第三个和第四个数
      let l = j + 1;
      let r = n - 1;
      while(l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum < target) {
          l++;
        } else if (sum > target) {
          r--;
        } else {
          res.push([nums[i], nums[j], nums[l], nums[r]]);

          // 跳过相同元素
          while(l < r && nums[l] == nums[l + 1]) {
            l++;
          }
          while(l < r && nums[r] == nums[r - 1]) {
            r--;
          }
          l++;
          r--;
        }
      }
    }
  }
  return res;
};