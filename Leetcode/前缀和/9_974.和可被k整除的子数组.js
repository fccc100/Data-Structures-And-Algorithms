// 974. 和可被 K 整除的子数组
// 给定一个整数数组 nums 和一个整数 k ，返回其中元素之和可被 k 整除的（连续、非空） 子数组 的数目。

// 子数组 是数组的 连续 部分。

// 示例 1：

// 输入：nums = [4,5,0,-2,-3,1], k = 5
// 输出：7
// 解释：
// 有 7 个子数组满足其元素之和可被 k = 5 整除：
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
// 示例 2:

// 输入: nums = [5], k = 9
// 输出: 0

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
  let n = nums.length;

  let preSum = Array(n);
  preSum[0] = nums[0];
  for (let i = 1; i < n; i++) {
    preSum[i] = preSum[i - 1] + nums[i];
  }

  let map = new Map();
  let res = 0;
  for (let i = 0; i < n; i++) {
    let m = preSum[i] % k;
    // mod等于0，说明[0, i]范围可被k整除
    if (m == 0) {
      res++;
    }
    // 小于0的mod再加个k
    if (m < 0) {
      m += k;
    }
    // 计算有多少个相等的m就是又多了多少个子数组
    if (map.has(m)) {
      res += map.get(m);
      map.set(m, map.get(m) + 1);
    } else {
      map.set(m, 1);
    }
  }
  return res;
};

//                [4, 5, 0, -2, -3, 1]
//                [4, 9, 9,  7,  4, 5]

//      mod 5      4  4  4  2    4  0     



//         [-1, 2, 9]
//         [-1, 1, 10]
// mod 2    -1  1  0         