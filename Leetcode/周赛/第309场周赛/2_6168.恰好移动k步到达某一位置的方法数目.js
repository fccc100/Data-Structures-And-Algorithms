// 6168. 恰好移动 k 步到达某一位置的方法数目
// 给你两个 正 整数 startPos 和 endPos 。最初，你站在 无限 数轴上位置 startPos 处。在一步移动中，你可以向左或者向右移动一个位置。

// 给你一个正整数 k ，返回从 startPos 出发、恰好 移动 k 步并到达 endPos 的 不同 方法数目。由于答案可能会很大，返回对 109 + 7 取余 的结果。

// 如果所执行移动的顺序不完全相同，则认为两种方法不同。

// 注意：数轴包含负整数。

// 示例 1：

// 输入：startPos = 1, endPos = 2, k = 3
// 输出：3
// 解释：存在 3 种从 1 到 2 且恰好移动 3 步的方法：
// - 1 -> 2 -> 3 -> 2.
// - 1 -> 2 -> 1 -> 2.
// - 1 -> 0 -> 1 -> 2.
// 可以证明不存在其他方法，所以返回 3 。
// 示例 2：

// 输入：startPos = 2, endPos = 5, k = 10
// 输出：0
// 解释：不存在从 2 到 5 且恰好移动 10 步的方法。

/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */
// 记忆化搜索
var numberOfWays = function (startPos, endPos, k) {
  const MOD = 1000000007;

  let map = new Map();

  function dfs(s, e, k) {
    // 如果起点与终点相等，并且k等于0，找到一种方法
    if (s == e && k == 0) {
      return 1;
    }

    // 距离大于k了，说明不可能走到了，返回0
    if (Math.abs(e - s) > k) {
      return 0;
    }

    // 没步数了还没走到，返回0
    if (k == 0) {
      return 0;
    }

    if (map.has(s + ',' + k)) {
      return map.get(s + ',' + k);
    }

    // 往左走或右走并记忆
    let res = (dfs(s + 1, e, k - 1) + dfs(s - 1, e, k - 1)) % MOD;
    map.set(s + ',' + k, res);
    return res;
  }

  return dfs(startPos, endPos, k);
};