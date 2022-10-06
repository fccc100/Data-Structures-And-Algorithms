// 474. 一和零
// 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。

// 请你找出并返回 strs 的最大子集的长度，该子集中 最多 有 m 个 0 和 n 个 1 。

// 如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。

// 示例 1：

// 输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
// 输出：4
// 解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
// 其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。
// 示例 2：

// 输入：strs = ["10", "0", "1"], m = 1, n = 1
// 输出：2
// 解释：最大的子集是 {"0", "1"} ，所以答案是 2 。

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  let l = strs.length;

  // dp[i][j][k] 表示前i个字符串包含j个0 k个1时的最大子集长度
  let dp = Array(l + 1);
  for (let i = 0; i <= l; i++) {
    dp[i] = Array(m + 1);
    for (let j = 0; j <= m; j++) {
      dp[i][j] = Array(n + 1).fill(0);
    }
  }

  // 遍历字符串数组
  for (let i = 1; i <= l; i++) {
    // 获取字符串 0 和 1的个数
    let counts = getCounts(strs[i - 1]);
    let zeros = counts[0];
    let ones = counts[1];

    // 遍历0的个数
    for (let j = 0; j <= m; j++) {

      // 遍历1的个数
      for (let k = 0; k <= n; k++) {
        // 假设0超出个数了或者1超出个数了，直接取i - 1处的dp值
        dp[i][j][k] = dp[i - 1][j][k];

        if (j >= zeros && k >= ones) {
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - zeros][k - ones] + 1);
        }
      }
    }
  }

  return dp[l][m][n];
};

function getCounts(str) {
  let res = Array(2).fill(0);
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '0') {
      res[0]++;
    } else {
      res[1]++;
    }
  }
  return res;
}