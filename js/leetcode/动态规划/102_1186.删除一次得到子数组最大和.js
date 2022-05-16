// 1186. 删除一次得到子数组最大和
// 给你一个整数数组，返回它的某个 非空 子数组（连续元素）在执行一次可选的删除操作后，所能得到的最大元素总和。
// 换句话说，你可以从原数组中选出一个子数组，并可以决定要不要从中删除一个元素（只能删一次哦），（删除后）子数组中至少应当有一个元素，然后该子数组（剩下）的元素总和是所有子数组之中最大的。

// 注意，删除一个元素后，子数组 不能为空。

// 示例 1：

// 输入：arr = [1,-2,0,3]
// 输出：4
// 解释：我们可以选出 [1, -2, 0, 3]，然后删掉 -2，这样得到 [1, 0, 3]，和最大。
// 示例 2：

// 输入：arr = [1,-2,-2,3]
// 输出：3
// 解释：我们直接选出 [3]，这就是最大和。
// 示例 3：

// 输入：arr = [-1,-1,-1,-1]
// 输出：-1
// 解释：最后得到的子数组不能为空，所以我们不能选择 [-1] 并从中删去 -1 来得到 0。
// 我们应该直接选择 [-1]，或者选择 [-1, -1] 再从中删去一个 -1。

/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
  // 定义dp[i][0]表示以i位置结尾，不使用删除的最大子数组和
  //     dp[i][1]表示以i位置结尾，使用删除操作的最大子数组和
  let dp = Array(arr.length);
  dp[0] = Array(2);
  // 0位置不使用删除最大和为arr[0]
  dp[0][0] = arr[0];
  dp[0][1] = 0;

  let ans = dp[0][0];
  for (let i = 1; i < arr.length; i++) {
    dp[i] = Array(2);
    dp[i][0] = Math.max(dp[i - 1][0] + arr[i], arr[i]);
    dp[i][1] = Math.max(dp[i - 1][1] + arr[i], dp[i - 1][0] + arr[i] - arr[i]);

    // 因为题目要求可以删除元素，也可以不删除元素，更新最大值时，可以取dp[0][0],也可以取dp[0][1]
    ans = Math.max(ans, dp[i][1], dp[i][0]);
  }
  return ans;
}

// 滚动数组
var maximumSum = function(arr) {
  // dp0表示使用删除
  let dp0 = arr[0];
  // dp1表示不使用删除
  let dp1 = 0;

  let ans = dp0;
  for (let i = 1; i < arr.length; i++) {
    dp1 = Math.max(dp1 + arr[i], dp0 + arr[i] - arr[i]);

    // dp0不依赖于dp1，放后面执行
    dp0 = Math.max(dp0 + arr[i], arr[i]);

    ans = Math.max(dp0, dp1, ans);
  }
  return ans;
}
