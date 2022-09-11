// 6176. 出现最频繁的偶数元素
// 给你一个整数数组 nums ，返回出现最频繁的偶数元素。

// 如果存在多个满足条件的元素，只需要返回 最小 的一个。如果不存在这样的元素，返回 -1 。

// 示例 1：

// 输入：nums = [0,1,2,2,4,4,1]
// 输出：2
// 解释：
// 数组中的偶数元素为 0、2 和 4 ，在这些元素中，2 和 4 出现次数最多。
// 返回最小的那个，即返回 2 。
// 示例 2：

// 输入：nums = [4,4,4,9,2,4]
// 输出：4
// 解释：4 是出现最频繁的偶数元素。
// 示例 3：

// 输入：nums = [29,47,21,41,13,37,25,7]
// 输出：-1
// 解释：不存在偶数元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      if (!map.has(nums[i])) {
        map.set(nums[i], 1);
      } else {
        map.set(nums[i], map.get(nums[i]) + 1);
      }
    }
  }

  let res = [];

  for (let entry of map) {
    res.push(entry);
  }
  if (!res.length) return -1;

  res.sort((a, b) => b[1] - a[1]);
  console.log(res)

  let max = res[0][1];
  let ans = res[0][0];
  for (let i = 1; i < res.length; i++) {
    if (res[i][1] < max) {
      break;
    }

    if (res[i][1] == max) {
      ans = Math.min(ans, res[i][0]);
    }
  }
  return ans;
};

// 2.
var mostFrequentEven = function (nums) {
  nums.sort((a, b) => a - b);

  let map = new Map();
  let res = -1;
  let maxCnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      if (!map.has(nums[i])) {
        map.set(nums[i], 1);
      } else {
        map.set(nums[i], map.get(nums[i]) + 1);
      }

      if (map.get(nums[i]) > maxCnt) {
        res = nums[i];
        maxCnt = map.get(nums[i]);
      }
    }
  }
  return res;
}