// 719. 找出第 K 小的数对距离
// 数对 (a,b) 由整数 a 和 b 组成，其数对距离定义为 a 和 b 的绝对差值。

// 给你一个整数数组 nums 和一个整数 k ，数对由 nums[i] 和 nums[j] 组成且满足 0 <= i < j < nums.length 。返回 所有数对距离中 第 k 小的数对距离。

 

// 示例 1：

// 输入：nums = [1,3,1], k = 1
// 输出：0
// 解释：数对和对应的距离如下：
// (1,3) -> 2
// (1,1) -> 0
// (3,1) -> 2
// 距离第 1 小的数对是 (1,1) ，距离为 0 。
// 示例 2：

// 输入：nums = [1,1,1], k = 2
// 输出：0
// 示例 3：

// 输入：nums = [1,6,1], k = 3
// 输出：5

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 暴力，超时超内存
var smallestDistancePair = function(nums, k) {
  let distance = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      distance.push(Math.abs(nums[i] - nums[j]));
    }
  }
  distance.sort((a, b) => a - b);
  return distance[k - 1];
};

// 
var smallestDistancePair = function(nums, k) {
  nums.sort((a, b) => a - b);
};

var lengthOfLongestSubstring = function(s) {
  let n = s.length;
  if (n <= 1) return n;

  let map = Array(256).fill(-1);

  // dp[i]表示已i结尾的无重复字符的最长子串
  let dp = Array(n);
  dp[0] = 1;
  map[s[0].charCodeAt()] = 0;
  let res = dp[0];
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[i - 1] + 1, i - map[s[i].charCodeAt()]);
    map[s[i].charCodeAt()] = i;

    res = Math.max(res, dp[i]);
  }
  return res;
};

var maxSubArray = function(nums) {
  let n = nums.length;
  if (n == 0) return 0;

  // dp[i]表示以i结尾的最大子数组和
  let dp = Array(n);
  dp[0] = nums[0];

  let res = dp[0];
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    res = Math.max(res, dp[i]);
  }
  return res;
};