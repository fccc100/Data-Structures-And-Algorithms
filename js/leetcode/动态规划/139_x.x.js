// 剑指 Offer 14- II. 剪绳子 II
// 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m - 1] 。
// 请问 k[0]*k[1]*...*k[m - 1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

// 示例 1：

// 输入: 2
// 输出: 1
// 解释: 2 = 1 + 1, 1 × 1 = 1
// 示例 2:

// 输入: 10
// 输出: 36
// 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36

/**
 * @param {number} n
 * @return {number}
 */
// 不能使用整数拆分，取余后不能比较大小了
var cuttingRope = function(n) {
  // let MOD = 1000000007;

  // if (n == 1) {
  //   return 1;
  // }

  // let res = 1;
  // for (let i = 1; i < n; i++) {
  //   res = Math.max(res, (i * (n - i)) % MOD, i * cuttingRope(n - i));
  // }
  // return res % MOD;
};

// 2.记忆化搜索
var cuttingRope = function(n) {
  // let memo = Array(n);
  // const MOD = 1000000007;

  // function cut(n) {
  //   if (n == 1) {
  //     return 1;
  //   }

  //   if (memo[n] !== undefined) {
  //     return memo[n];
  //   }

  //   let res = 1;
  //   for (let i = 1; i < n; i++) {
  //     res = Math.max(res, (i * (n - i)), i * cut(n - i));
  //   }

  //   return memo[n] = res % MOD;
  // }

  // return cut(n);
}

// 3.动态规划
var cuttingRope = function(n) {

}
