// 1636. 按照频率将数组升序排序
// 给你一个整数数组 nums ，请你将数组按照每个值的频率 升序 排序。如果有多个值的频率相同，请你按照数值本身将它们 降序 排序。 

// 请你返回排序后的数组。

// 示例 1：

// 输入：nums = [1,1,2,2,2,3]
// 输出：[3,1,1,2,2,2]
// 解释：'3' 频率为 1，'1' 频率为 2，'2' 频率为 3 。
// 示例 2：

// 输入：nums = [2,3,1,3,2]
// 输出：[1,3,3,2,2]
// 解释：'2' 和 '3' 频率都为 2 ，所以它们之间按照数值本身降序排序。
// 示例 3：

// 输入：nums = [-1,1,-6,4,5,-6,1,4,1]
// 输出：[5,-1,4,4,-6,-6,1,1,1]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
  let n = nums.length;
  
  let map = new Map();
  for (let i = 0; i < n; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }

  let pairs = [];
  for (let entry of map) {
    pairs.push(entry);
  }

  pairs.sort((a, b) => {
    if (a[1] < b[1]) {
      return -1;
    } else if (a[1] == b[1]) {
      return b[0] - a[0];
    } else {
      return 1;
    }
  })

  let res = [];
  for (let i = 0; i < pairs.length; i++) {
    for (let j = 0; j < pairs[i][1]; j++) {
      res.push(pairs[i][0]);
    }
  }
  return res;
};