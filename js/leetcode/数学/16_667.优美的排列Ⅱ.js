// 667. 优美的排列 II
// 给你两个整数 n 和 k ，请你构造一个答案列表 answer ，该列表应当包含从 1 到 n 的 n 个不同正整数，并同时满足下述条件：

// 假设该列表是 answer = [a1, a2, a3, ... , an] ，那么列表 [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|] 中应该有且仅有 k 个不同整数。
// 返回列表 answer 。如果存在多种答案，只需返回其中 任意一种 。

// 示例 1：

// 输入：n = 3, k = 1
// 输出：[1, 2, 3]
// 解释：[1, 2, 3] 包含 3 个范围在 1-3 的不同整数，并且 [1, 1] 中有且仅有 1 个不同整数：1
// 示例 2：

// 输入：n = 3, k = 2
// 输出：[1, 3, 2]
// 解释：[1, 3, 2] 包含 3 个范围在 1-3 的不同整数，并且 [2, 1] 中有且仅有 2 个不同整数：1 和 2

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */

// 先构造前k + 1个数 [1, 1+k, 2, 1+k-1, 3, 1+k-2...], 后面再使用剩余的数升序排列
var constructArray = function (n, k) {
  let res = Array(n);

  let cur = 1;
  let cur1 = 0;
  for (let i = 0; i <= k; i++) {
    if (i % 2 == 0) {
      res[i] = cur;
      cur++;
    } else {
      res[i] = 1 + k + cur1;
      cur1--;
    }
  }
  for (let i = k + 1; i < n; i++) {
    res[i] = i + 1;
  }
  return res;
};


// [1, 2, 3, 4, 5]
// [1, 3, 2, 4, 5]
// [1, 3, 2, 5, 4]
// [1, 5, 2, 4, 3]

// 1, 2, 3, 4
// 2, 1, 4, 3

// 1, 2, 3, 4, 5
// 