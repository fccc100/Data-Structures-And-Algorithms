// 898. 子数组按位或操作
// 我们有一个非负整数数组 arr 。

// 对于每个（连续的）子数组 sub = [arr[i], arr[i + 1], ..., arr[j]] （ i <= j），我们对 sub 中的每个元素进行按位或操作，获得结果 arr[i] | arr[i + 1] | ... | arr[j] 。

// 返回可能结果的数量。 多次出现的结果在最终答案中仅计算一次。

// 示例 1：

// 输入：arr = [0]
// 输出：1
// 解释：
// 只有一个可能的结果 0 。
// 示例 2：

// 输入：arr = [1,1,2]
// 输出：3
// 解释：
// 可能的子数组为 [1]，[1]，[2]，[1, 1]，[1, 2]，[1, 1, 2]。
// 产生的结果为 1，1，2，1，3，3 。
// 有三个唯一值，所以答案是 3 。
// 示例 3：

// 输入：arr = [1,2,4]
// 输出：6
// 解释：
// 可能的结果是 1，2，3，4，6，以及 7 。

/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function (arr) {
  let n = arr.length;

  // dp[i]表示已i结尾的子数组中有哪些按位或结果
  let dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Set();
  }

  let res = new Set();
  dp[0].add(arr[0]);
  res.add(arr[0]);
  for (let i = 1; i < n; i++) {
    let preSet = dp[i - 1];

    for (let k of preSet) {
      dp[i].add(k | arr[i]);
      res.add(k | arr[i]);
    }
    dp[i].add(arr[i]);
    res.add(arr[i]);
  }

  return res.size;
};