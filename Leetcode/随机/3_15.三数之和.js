// 15. 三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 小于三个元素，无答案
  if (nums.length < 3) {
    return [];
  }

  // 先排序
  nums.sort((a, b) => a - b);

  // 最大值小于0或者最小值大于0，无答案
  if (nums[0] > 0 || nums[nums.length - 1] < 0) {
    return [];
  }

  let n = nums.length;
  let res = [];
  for (let i = 0; i < n; i++) {
    // 当前值大于0，与后面的数不可能组成和为0的集合了
    if (nums[i] > 0) {
      return res;
    }

    // 当前值与前一个值相同，直接跳过，避免重复
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    // 双指针开始在i位置右边查找
    let l = i + 1;
    let r = n - 1;
    while(l < r) {
      let temp = nums[i] + nums[l] + nums[r];
      if (temp > 0) {
        r--;
      } else if (temp < 0) {
        l++;
      } else {
        res.push([nums[i], nums[l], nums[r]]);

        // 跳过重复值
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
