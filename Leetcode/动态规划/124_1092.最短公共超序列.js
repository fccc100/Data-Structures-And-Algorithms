// 1092. 最短公共超序列
// 给出两个字符串 str1 和 str2，返回同时以 str1 和 str2 作为子序列的最短字符串。如果答案不止一个，则可以返回满足条件的任意一个答案。

// （如果从字符串 T 中删除一些字符（也可能不删除，并且选出的这些字符可以位于 T 中的 任意位置），可以得到字符串 S，那么 S 就是 T 的子序列）



// 示例：

// 输入：str1 = "abac", str2 = "cab"
// 输出："cabac"
// 解释：
// str1 = "abac" 是 "cabac" 的一个子串，因为我们可以删去 "cabac" 的第一个 "c"得到 "abac"。 
// str2 = "cab" 是 "cabac" 的一个子串，因为我们可以删去 "cabac" 末尾的 "ac" 得到 "cab"。
// 最终我们给出的答案是满足上述属性的最短字符串。

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
  let m = str1.length;
  let n = str2.length;

  // 先求最长公共子序列lcs
  let dp = Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1).fill('');
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] == str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
      } else {
        dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1];
      }
    }
  }

  // 求得lcs后，构建最短公共超序列
  let lcs = dp[m][n];
  let res = '';
  let j = 0;
  let k = 0;
  // 是lcs中的字符拼一次，不是lcs中的字符 str1和str2都要拼接
  for (let i = 0; i < lcs.length; i++) {
    while (j < m && str1[j] != lcs[i]) {
      res += str1[j];
      j++;
    }
    while (k < n && str2[k] != lcs[i]) {
      res += str2[k];
      k++;
    }
    res += lcs[i];

    j++;
    k++;
  }
  res += str1.substr(j);
  res += str2.substr(k);
  return res;
};