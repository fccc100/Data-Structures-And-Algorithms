// 2327. 知道秘密的人数
// 在第 1 天，有一个人发现了一个秘密。

// 给你一个整数 delay ，表示每个人会在发现秘密后的 delay 天之后，每天 给一个新的人 分享 秘密。
// 同时给你一个整数 forget ，表示每个人在发现秘密 forget 天之后会 忘记 这个秘密。
// 一个人 不能 在忘记秘密那一天及之后的日子里分享秘密。

// 给你一个整数 n ，请你返回在第 n 天结束时，知道秘密的人数。由于答案可能会很大，请你将结果对 109 + 7 取余 后返回。

// 示例 1：

// 输入：n = 6, delay = 2, forget = 4
// 输出：5
// 解释：
// 第 1 天：假设第一个人叫 A 。（一个人知道秘密）
// 第 2 天：A 是唯一一个知道秘密的人。（一个人知道秘密）
// 第 3 天：A 把秘密分享给 B 。（两个人知道秘密）
// 第 4 天：A 把秘密分享给一个新的人 C 。（三个人知道秘密）
// 第 5 天：A 忘记了秘密，B 把秘密分享给一个新的人 D 。（三个人知道秘密）
// 第 6 天：B 把秘密分享给 E，C 把秘密分享给 F 。（五个人知道秘密）
// 示例 2：

// 输入：n = 4, delay = 1, forget = 3
// 输出：6
// 解释：
// 第 1 天：第一个知道秘密的人为 A 。（一个人知道秘密）
// 第 2 天：A 把秘密分享给 B 。（两个人知道秘密）
// 第 3 天：A 和 B 把秘密分享给 2 个新的人 C 和 D 。（四个人知道秘密）
// 第 4 天：A 忘记了秘密，B、C、D 分别分享给 3 个新的人。（六个人知道秘密）

/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function(n, delay, forget) {
  let mod = 1e9 + 7;

  // dp[i]表示第i天新增的人
  let dp = new Array(n).fill(0);
  dp[0] = 1;

  // 遍历每一天
  for (let i = 0; i < n; i++) {

    // 在每一天i的delay天之后，min(n, i + forget)天之前，每一天都会新增第i天的人数
    for (let j = i + delay; j < Math.min(n, i + forget); j++) {
      dp[j] = (dp[j] + dp[i]) % mod;
    }
  }

  // 最后知道秘密的人数是第n - forget天到第n天新增的人数
  let sum = 0;
  for (let i = n - forget; i < n; i++) {
    sum = (sum + dp[i]) % mod;
  }
  return sum;
};
