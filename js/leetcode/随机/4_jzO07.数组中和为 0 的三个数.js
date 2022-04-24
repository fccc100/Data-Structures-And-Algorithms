// 剑指 Offer II 007. 数组中和为 0 的三个数
// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？请找出所有和为 0 且 不重复 的三元组。

// 示例 1：
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 思路：从左往右遍历，固定一个数，另外两个数从右边使用对撞指针查找
  if (nums.length < 3) return [];

  // 先排序
  nums.sort((a, b) => a - b);

  // 最小值大于0或者最大值小于0，都没有答案
  let n = nums.length;
  if (nums[0] > 0 || nums[n - 1] < 0) {
    return [];
  }

  let res = [];
  for (let i = 0; i < n; i++) {
    // 当前元素已经大于0了，后面没有答案了，直接返回现有结果
    if (nums[i] > 0) {
      return res;
    }

    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = n - 1;
    while(l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        res.push([nums[i], nums[l], nums[r]]);

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
  return res;
};