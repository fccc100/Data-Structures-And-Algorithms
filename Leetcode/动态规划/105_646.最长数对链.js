// 646. 最长数对链
// 给出 n 个数对。 在每一个数对中，第一个数字总是比第二个数字小。

// 现在，我们定义一种跟随关系，当且仅当 b < c 时，数对(c, d) 才可以跟在 (a, b) 后面。我们用这种形式来构造一个数对链。

// 给定一个数对集合，找出能够形成的最长数对链的长度。你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。

// 示例：

// 输入：[[1,2], [2,3], [3,4]]
// 输出：2
// 解释：最长的数对链是 [1,2] -> [3,4]

var findLongestChain = function(pairs) {
  let n = pairs.length;
  if (n == 0) return 0;

  pairs.sort((a, b) => a[0] - b[0]);

  // dp[i]表示以i结尾的最长数对链
  let dp = Array(n).fill(1);
  dp[0] = 1;
  let ans = dp[0];
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (pairs[j][1] < pairs[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        ans = Math.max(ans, dp[i]);
      }
    }
  }
  return ans;
};