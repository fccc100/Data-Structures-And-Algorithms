// 6129. 全 0 子数组的数目
// 给你一个整数数组 nums ，返回全部为 0 的 子数组 数目。

// 子数组 是一个数组中一段连续非空元素组成的序列。

// 示例 1：

// 输入：nums = [1,3,0,0,2,0,0,4]
// 输出：6
// 解释：
// 子数组 [0] 出现了 4 次。
// 子数组 [0,0] 出现了 2 次。
// 不存在长度大于 2 的全 0 子数组，所以我们返回 6 。
// 示例 2：

// 输入：nums = [0,0,0,2,0,0]
// 输出：9
// 解释：
// 子数组 [0] 出现了 5 次。
// 子数组 [0,0] 出现了 3 次。
// 子数组 [0,0,0] 出现了 1 次。
// 不存在长度大于 3 的全 0 子数组，所以我们返回 9 。
// 示例 3：

// 输入：nums = [2,10,2019]
// 输出：0
// 解释：没有全 0 子数组，所以我们返回 0 。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 周赛时为了快做的结果
var zeroFilledSubarray = function (nums) {
  let res = 0;
  let dp = [0]
  for (let i = 1; i < 200000; i++) {
    dp[i] = dp[i - 1] + i;
  }
  for (let i = 0; i < nums.length;) {
    if (nums[i] != 0) {
      i = i + 1;
      continue;
    }
    let end = i;
    if (nums[i] == 0) {
      for (let j = i; j < nums.length; j++) {
        if (nums[j] != 0) {
          end = j;
          break;
        }
        if (j == nums.length - 1 && nums[j] == 0) {
          end = nums.length;
          break;
        }
      }

    }
    let len = end - i;
    res += dp[len];
    i = end;
  }
  return res;
};